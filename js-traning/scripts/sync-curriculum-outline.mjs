/**
 * Rewrites the Curriculum aside on every day-N/html/*.html page to list all 22 days
 * with titles matching index.html. Sets details open for days 1–6 and the current day.
 * Fixes lesson title and lesson-label for days 13–22 to match canonical topic names.
 *
 * Run: node js-traning/scripts/sync-curriculum-outline.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TRAINING = path.resolve(__dirname, "..");

/** Plain topic text (after "Day N - ") — same as DAY_SUMMARIES in generate script */
const TOPIC = {
    1: "Introduction to JavaScript",
    2: "Data Types & the Type System",
    3: "Operators & Expressions",
    4: "Control Flow",
    5: "Loops & Iteration",
    6: "Functions",
    7: "Arrays",
    8: "Objects",
    9: "ES6+ Essentials",
    10: "DOM Manipulation Basics",
    11: "Events & Event Handling",
    12: "Error Handling & Module Basics",
    13: "Execution Context & Hoisting",
    14: "Scope & Closures",
    15: "The this Keyword",
    16: "Prototypes & the Prototype Chain",
    17: "Classes & OOP",
    18: "Async: Callbacks & Promises",
    19: "Async / Await",
    20: "The Event Loop",
    21: "Advanced Array & Object Patterns",
    22: "Map / Set / WeakMap / WeakSet",
};

function escapeHtml(s) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/** Inner HTML for <summary>…</summary> — matches index.html */
function summaryInner(dayNum) {
    if (dayNum === 15) {
        return "Day 15 - The <code>this</code> Keyword";
    }
    return `Day ${dayNum} - ${escapeHtml(TOPIC[dayNum])}`;
}

function detailsOpenAttr(currentDay, n) {
    if (n <= 6 || n === currentDay) return " open";
    return "";
}

function buildAsideUl(currentDay, currentPage, hrefPrefix) {
    const pages = [
        ["lesson", "Lesson"],
        ["hands-on", "Hands-on"],
        ["homework", "Homework"],
    ];
    const lines = ['            <ul class="site-outline-tree">'];
    const overviewHref = `${hrefPrefix}index.html`;
    const overviewCurrent =
        currentDay === 0 ? ' aria-current="page"' : "";
    lines.push(
        `                <li class="site-outline-item"><a href="${overviewHref}"${overviewCurrent}>Overview</a></li>`
    );

    for (let n = 1; n <= 22; n++) {
        const open = detailsOpenAttr(currentDay, n);
        lines.push(`                <li class="site-outline-day">`);
        lines.push(
            `                    <details class="site-outline-details"${open}>`
        );
        lines.push(
            `                        <summary>${summaryInner(n)}</summary>`
        );
        lines.push(`                        <ul>`);
        for (const [slug, label] of pages) {
            const isCurrent = n === currentDay && slug === currentPage;
            const cur = isCurrent ? ' aria-current="page"' : "";
            let href;
            if (n === currentDay) {
                href = `${slug}.html`;
            } else {
                href = `${hrefPrefix}day-${n}/html/${slug}.html`;
            }
            lines.push(
                `                            <li><a href="${href}"${cur}>${label}</a></li>`
            );
        }
        lines.push(`                        </ul>`);
        lines.push(`                    </details>`);
        lines.push(`                </li>`);
    }
    lines.push("            </ul>");
    return lines.join("\n");
}

function replaceAside(html, newUlBlock) {
    const start = html.indexOf('<aside class="site-outline"');
    if (start === -1) return { ok: false, html, reason: "no aside" };
    const ulStart = html.indexOf('<ul class="site-outline-tree">', start);
    if (ulStart === -1) return { ok: false, html, reason: "no ul" };
    const ulEnd = html.indexOf("</ul>", ulStart);
    if (ulEnd === -1) return { ok: false, html, reason: "no /ul" };
    const afterUl = ulEnd + "</ul>".length;
    const asideEnd = html.indexOf("</aside>", afterUl);
    if (asideEnd === -1) return { ok: false, html, reason: "no /aside" };
    const before = html.slice(0, ulStart);
    const after = html.slice(asideEnd);
    const rebuilt =
        before +
        newUlBlock +
        "\n        " +
        after;
    return { ok: true, html: rebuilt };
}

const pageKindTitle = {
    lesson: "Lesson",
    "hands-on": "Hands-on",
    homework: "Homework",
};

function syncHeaders(html, dayNum, pageSlug) {
    if (dayNum < 13 || dayNum > 22) return html;
    const topicPlain = TOPIC[dayNum];
    const label =
        dayNum === 15
            ? `Day 15 — The <code>this</code> Keyword`
            : `Day ${dayNum} — ${escapeHtml(topicPlain)}`;

    const titlePlain = `Day ${dayNum} — ${topicPlain} — ${pageKindTitle[pageSlug]}`;
    const title = escapeHtml(titlePlain);

    let out = html.replace(
        /<p class="lesson-label">[\s\S]*?<\/p>/,
        `<p class="lesson-label">${label}</p>`
    );
    out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
    return out;
}

function walkHtmlFiles(dir, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const st = fs.statSync(p);
        if (st.isDirectory()) walkHtmlFiles(p, out);
        else if (name.endsWith(".html")) out.push(p);
    }
    return out;
}

function main() {
    const dayHtmlRoot = path.join(TRAINING, "day-1", "html");
    if (!fs.existsSync(dayHtmlRoot)) {
        console.error("Expected", dayHtmlRoot);
        process.exit(1);
    }

    let files = [];
    for (let d = 1; d <= 22; d++) {
        const dir = path.join(TRAINING, `day-${d}`, "html");
        files = files.concat(walkHtmlFiles(dir));
    }

    let nOk = 0;
    for (const file of files) {
        const rel = path.relative(TRAINING, file).replace(/\\/g, "/");
        const m = rel.match(/^day-(\d+)\/html\/(lesson|hands-on|homework)\.html$/);
        if (!m) continue;
        const dayNum = parseInt(m[1], 10);
        const pageSlug = m[2];

        let html = fs.readFileSync(file, "utf8");
        const ul = buildAsideUl(dayNum, pageSlug, "../../");
        const r = replaceAside(html, ul);
        if (!r.ok) {
            console.warn("Skip", rel, r.reason);
            continue;
        }
        html = syncHeaders(r.html, dayNum, pageSlug);
        fs.writeFileSync(file, html, "utf8");
        nOk++;
    }

    console.log("Updated curriculum aside + headers (days 13–22):", nOk, "files");
}

main();
