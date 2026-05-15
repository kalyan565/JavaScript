/**
 * Generates day-N/html/{lesson,hands-on,homework}.html from matching JS in day-N/js/.
 * Skips day 1 (hand-authored). Run: node scripts/generate-curriculum-html.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TRAINING = path.resolve(__dirname, "..");

const DAY_SUMMARIES = {
    1: "Introduction to JavaScript",
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
    13: "Objects",
    14: "Objects",
};

const DAY_HEADLINE = {
    2: "Types, strings, and typeof",
    3: "Operators, coercion, and logic",
    4: "Conditionals and truthy/falsy",
    5: "Loops and iteration",
    6: "declarations, arrows, defaults",
    7: "Arrays — basics and iteration",
    8: "Objects — literals and access",
    9: "ES6+ patterns",
    10: "DOM basics",
    11: "Events",
    12: "Errors and modules",
    13: "Execution context & hoisting",
    14: "Scope & closures",
};

function escapeHtml(s) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function readIfExists(p) {
    try {
        return fs.readFileSync(p, "utf8");
    } catch {
        return null;
    }
}

/** Split JS into display sections: Task comments, //# headings, or blank-line chunks. */
function splitIntoSections(source) {
    const text = source.replace(/\r\n/g, "\n");
    if (!text.trim()) {
        return [{ title: "Empty file", code: "// (no code in this file yet)" }];
    }

    const taskParts = text.split(/(?=\n\/\/\s*Task\s*\d+)/i);
    if (taskParts.length > 1) {
        return taskParts.map((chunk, i) => ({
            title: titleFromChunk(chunk, `Task ${i + 1}`),
            code: chunk.trim(),
        }));
    }

    const hashParts = text.split(/(?=\n\/\/\s*#+)/);
    if (hashParts.length > 1) {
        return hashParts.map((chunk, i) => ({
            title: titleFromChunk(chunk, `Topic ${i + 1}`),
            code: chunk.trim(),
        }));
    }

    return splitByParagraphs(text);
}

function titleFromChunk(chunk, fallback) {
    const lines = chunk.split("\n");
    for (const line of lines) {
        const t = line.trim();
        if (!t) continue;
        const m = t.match(/^\/\/\s*(.+)$/);
        if (m) {
            let s = m[1].replace(/^#\s*/, "").trim();
            if (/^Task\s*\d+/i.test(s)) return s;
            if (s.length > 2 && s.length < 90) return s;
        }
        break;
    }
    return fallback;
}

function splitByParagraphs(text) {
    const blocks = text.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
    if (blocks.length <= 1) {
        return [{ title: "Source", code: text.trim() }];
    }
    return blocks.map((code, i) => ({
        title: titleFromChunk(code, `Part ${i + 1}`),
        code,
    }));
}

function renderSections(sections, pageKind, jsFileName) {
    const hint =
        pageKind === "lesson"
            ? `Code below mirrors <code>../js/${jsFileName}</code>. Open DevTools → Console to see output when the script runs.`
            : pageKind === "hands-on"
              ? `Try the steps, then compare with <code>../js/${jsFileName}</code> (loaded at the bottom of this page).`
              : `Reference solution lives in <code>../js/${jsFileName}</code> (loaded at the bottom of this page).`;

    return sections
        .map((sec, i) => {
            const open = i === 0 ? " open" : "";
            const tag = pageKind === "homework" ? "Problem" : i === 0 && sections.length > 1 ? "Topic" : "Section";
            const safeTitle = escapeHtml(sec.title);
            return `            <details class="exercise"${open}>
                <summary>
                    <span class="lesson-task__tag">${tag} ${i + 1}</span>
                    <span class="lesson-task__title">${safeTitle}</span>
                </summary>
                <div class="lesson-task__body">
                    <pre class="code-sample"><code>${escapeHtml(sec.code)}</code></pre>
                    <p class="output-label">${hint}</p>
                </div>
            </details>`;
        })
        .join("\n\n");
}

function sidebar(dayNum, current) {
    const pages = [
        ["lesson", "Lesson"],
        ["hands-on", "Hands-on"],
        ["homework", "Homework"],
    ];
    const lines = ['            <ul class="site-outline-tree">'];
    lines.push(
        '                <li class="site-outline-item"><a href="../../index.html">Overview</a></li>'
    );
    for (let n = 1; n <= 14; n++) {
        const summary = DAY_SUMMARIES[n];
        if (!summary) continue;
        const open = n === dayNum ? " open" : "";
        lines.push(`                <li class="site-outline-day">`);
        lines.push(
            `                    <details class="site-outline-details"${open}>`
        );
        lines.push(`                        <summary>Day ${n} — ${summary}</summary>`);
        lines.push(`                        <ul>`);
        for (const [slug, label] of pages) {
            const isCurrent = n === dayNum && slug === current;
            const cur = isCurrent ? ' aria-current="page"' : "";
            let href;
            if (n === dayNum) {
                href = `${slug}.html`;
            } else {
                href = `../../day-${n}/html/${slug}.html`;
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

function buildHtml({
    dayNum,
    current,
    pageTitle,
    headline,
    mainInner,
    scriptTags,
}) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(pageTitle)}</title>
    <link rel="preload" href="../../shared/css/style.css" as="style">
    <link rel="stylesheet" href="../../shared/css/style.css">
</head>
<body>
    <div class="page-shell">
        <main class="page-main" id="main-content">
            <header class="page-title">
                <p class="lesson-label">${escapeHtml(headline)}</p>
                <h1>${current === "lesson" ? "Lesson" : current === "hands-on" ? "Hands-on" : "Homework"}</h1>
            </header>

${mainInner}
        </main>
        <aside class="site-outline" aria-label="Curriculum outline">
            <p class="site-outline-title">Curriculum</p>
${sidebar(dayNum, current)}
        </aside>
    </div>
${scriptTags}
    <script src="../../shared/js/nav-lock.js"></script>
</body>
</html>
`;
}

function resolveScriptForDay(dayNum, page) {
    const jsDir = path.join(TRAINING, `day-${dayNum}`, "js");
    if (page === "lesson") {
        const p = path.join(jsDir, "lesson.js");
        return fs.existsSync(p) ? { rel: "../js/lesson.js", file: "lesson.js" } : null;
    }
    if (page === "hands-on") {
        if (fs.existsSync(path.join(jsDir, "hands-on.js"))) {
            return { rel: "../js/hands-on.js", file: "hands-on.js" };
        }
        if (dayNum === 14 && fs.existsSync(path.join(jsDir, "day14.js"))) {
            return { rel: "../js/day14.js", file: "day14.js" };
        }
        return null;
    }
    if (page === "homework") {
        const p = path.join(jsDir, "homework.js");
        return fs.existsSync(p) ? { rel: "../js/homework.js", file: "homework.js" } : null;
    }
    return null;
}

function writePage(dayNum, page, mainInner, pageTitle, headline) {
    const sc = resolveScriptForDay(dayNum, page);
    const scriptTags = sc
        ? `    <script defer src="${sc.rel}"></script>`
        : "    <!-- No matching JS file for this page yet -->";
    const html = buildHtml({
        dayNum,
        current: page,
        pageTitle,
        headline,
        mainInner,
        scriptTags,
    });
    const dir = path.join(TRAINING, `day-${dayNum}`, "html");
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${page}.html`), html, "utf8");
}

function main() {
    for (let dayNum = 2; dayNum <= 14; dayNum++) {
        const summary = DAY_SUMMARIES[dayNum];
        if (!summary) continue;
        const headline = `Day ${dayNum} — ${DAY_HEADLINE[dayNum] || summary}`;
        const jsDir = path.join(TRAINING, `day-${dayNum}`, "js");

        for (const page of ["lesson", "hands-on", "homework"]) {
            // Hand-authored layout + prompts (keep when re-running this script)
            if (dayNum === 2 && page === "hands-on") continue;
            if (dayNum === 2 && page === "homework") continue;
            if (dayNum === 3 && page === "hands-on") continue;
            if (dayNum === 3 && page === "homework") continue;
            if (dayNum === 4 && page === "hands-on") continue;
            if (dayNum === 5 && page === "homework") continue;
            if (dayNum === 6 && page === "lesson") continue;
            if (dayNum === 6 && page === "hands-on") continue;
            if (dayNum === 6 && page === "homework") continue;
            if (dayNum === 7 && page === "lesson") continue;
            if (dayNum === 7 && page === "hands-on") continue;
            if (dayNum === 7 && page === "homework") continue;
            if (dayNum === 8 && page === "lesson") continue;
            if (dayNum === 8 && page === "hands-on") continue;
            if (dayNum === 8 && page === "homework") continue;
            if (dayNum === 9 && page === "lesson") continue;
            if (dayNum === 9 && page === "hands-on") continue;
            if (dayNum === 9 && page === "homework") continue;
            if (dayNum === 10 && page === "lesson") continue;
            if (dayNum === 10 && page === "hands-on") continue;
            if (dayNum === 10 && page === "homework") continue;
            if (dayNum === 11 && page === "lesson") continue;
            if (dayNum === 11 && page === "hands-on") continue;
            if (dayNum === 11 && page === "homework") continue;
            if (dayNum === 12 && page === "lesson") continue;
            if (dayNum === 12 && page === "hands-on") continue;
            if (dayNum === 12 && page === "homework") continue;

            const baseName =
                page === "lesson"
                    ? "lesson.js"
                    : page === "hands-on"
                      ? "hands-on.js"
                      : "homework.js";
            let filePath = path.join(jsDir, baseName);
            if (page === "hands-on" && dayNum === 14 && !fs.existsSync(filePath)) {
                filePath = path.join(jsDir, "day14.js");
            }

            const raw = fs.existsSync(filePath) ? readIfExists(filePath) : null;
            const pageTitle = `${headline} — ${
                page === "lesson" ? "Lesson" : page === "hands-on" ? "Hands-on" : "Homework"
            }`;

            if (!raw || !raw.trim()) {
                const stub = `            <p class="curriculum-lede">There is no <code>${baseName}</code> in <code>day-${dayNum}/js/</code> yet. Add that file and re-run <code>node scripts/generate-curriculum-html.mjs</code> to embed the code here.</p>`;
                writePage(dayNum, page, stub, pageTitle, headline);
                continue;
            }

            const sections = splitIntoSections(raw);
            const jsFileShown =
                page === "hands-on" && dayNum === 14 && baseName === "hands-on.js" && !fs.existsSync(path.join(jsDir, "hands-on.js"))
                    ? "day14.js"
                    : baseName;
            const mainInner = renderSections(sections, page, jsFileShown);
            writePage(dayNum, page, mainInner, pageTitle, headline);
        }
    }
    console.log("Wrote day-2 … day-14 pages under each day-N/html/");
}

main();
