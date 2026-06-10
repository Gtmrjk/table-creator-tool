const sampleText = `यहाँ अपना हैडलाइन लिखे

यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे
यहाँ से अपना  कंटेंट लिखे`;

    const logoSrc = "data:image/png;base64,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";

    const englishLogoSrc = "data:image/png;base64,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";

    const divyaBhaskarLogoSrc = "data:image/png;base64,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";

    const divyaMarathiLogoSrc = "data:image/png;base64,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";

    const source = document.querySelector("#source");
    const hasSubtitle = document.querySelector("#hasSubtitle");
    const titleSize = document.querySelector("#titleSize");
    const bodySize = document.querySelector("#bodySize");
    const headerSize = document.querySelector("#headerSize");
    const borderSize = document.querySelector("#borderSize");
    const sheetWidth = document.querySelector("#sheetWidth");
    const logoMode = document.querySelector("#logoMode");
    const languageMode = document.querySelector("#languageMode");
    const headerColorMode = document.querySelector("#headerColorMode");
    const sourceNote = document.querySelector("#sourceNote");
    const addColumnBtn = document.querySelector("#addColumnBtn");
    const removeColumnBtn = document.querySelector("#removeColumnBtn");
    const twoColumnWidthControl = document.querySelector("#twoColumnWidthControl");
    const twoColumnSplit = document.querySelector("#twoColumnSplit");
    const twoColumnWidthValue = document.querySelector("#twoColumnWidthValue");
    const makeSubheadBtn = document.querySelector("#makeSubheadBtn");
    const makeBoldBtn = document.querySelector("#makeBoldBtn");
    const photoInput = document.querySelector("#photoInput");
    const clearPhotoBtn = document.querySelector("#clearPhotoBtn");
    const headline = document.querySelector("#headline");
    const subheadline = document.querySelector("#subheadline");
    const table = document.querySelector("#table");
    const sheet = document.querySelector("#sheet");
    const logo = document.querySelector("#logo");
    const photoFrame = document.querySelector("#photoFrame");
    const photoPreview = document.querySelector("#photoPreview");
    const tableSource = document.querySelector("#tableSource");
    const error = document.querySelector("#error");
    let uploadedPhotoSrc = "";
    let photoEditMode = false;
    let photoCrop = { scale: 1, x: 0, y: 0 };
    let dragState = null;
    let removedColumnStack = [];
    let manualSubheadline = "";
    let undoStack = [];
    let redoStack = [];
    let pendingInputState = null;
    let isRestoringHistory = false;

    const languageFonts = {
      bhaskarHindi: {
        font: "Anek Devanagari",
        css: "\"Anek Devanagari\", system-ui, sans-serif",
        lang: "hi"
      },
      divyaMarathi: {
        font: "Anek Devanagari",
        css: "\"Anek Devanagari\", system-ui, sans-serif",
        lang: "mr"
      },
      bhaskarEnglish: {
        font: "Poppins",
        css: "\"Poppins\", system-ui, sans-serif",
        lang: "en"
      },
      divyaBhaskar: {
        font: "Anek Gujarati",
        css: "\"Anek Gujarati\", system-ui, sans-serif",
        lang: "gu"
      }
    };

    function getLanguageFont() {
      return languageFonts[languageMode.value] || languageFonts.bhaskarHindi;
    }

    function getActiveLogoSrc() {
      if (languageMode.value === "bhaskarEnglish") return englishLogoSrc;
      if (languageMode.value === "divyaMarathi") return divyaMarathiLogoSrc;
      if (languageMode.value === "divyaBhaskar") return divyaBhaskarLogoSrc;
      return logoSrc;
    }

    function getHeaderColors() {
      if (headerColorMode.value === "orange") {
        return { background: "#ff7f00", text: "#fff" };
      }
      return { background: "#dedee0", text: "#000" };
    }

    function refreshLogo() {
      logo.src = getActiveLogoSrc();
    }

    function splitColumns(line) {
      const trimmed = line.trim();
      if (trimmed.includes("|")) {
        const pipeParts = trimmed
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map(part => part.trim())
          .filter(Boolean);
        if (pipeParts.length > 1) return pipeParts;
      }

      const tabParts = line.split(/\t+/).map(part => part.trim()).filter(Boolean);
      if (tabParts.length > 1) return tabParts;
      return line.split(/ {2,}/).map(part => part.trim()).filter(Boolean);
    }

    function cleanPastedCell(cell) {
      return cell
        .replace(/\u00a0/g, " ")
        .replace(/\s*\n\s*/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function htmlTableToText(html) {
      if (!html) return "";
      const doc = new DOMParser().parseFromString(html, "text/html");
      const tableElement = doc.querySelector("table");
      if (!tableElement) return "";

      return Array.from(tableElement.querySelectorAll("tr"))
        .map(row => Array.from(row.querySelectorAll("th, td"))
          .map(cell => cleanPastedCell(cell.textContent || ""))
          .join("\t"))
        .filter(row => row.trim())
        .join("\n");
    }

    function insertTextAtCursor(textarea, text) {
      const start = textarea.selectionStart ?? textarea.value.length;
      const end = textarea.selectionEnd ?? textarea.value.length;
      const before = textarea.value.slice(0, start);
      const after = textarea.value.slice(end);
      const prefix = before && !before.endsWith("\n") ? "\n" : "";
      const suffix = after && !text.endsWith("\n") ? "\n" : "";
      textarea.value = `${before}${prefix}${text}${suffix}${after}`;
      const cursor = before.length + prefix.length + text.length;
      textarea.setSelectionRange(cursor, cursor);
    }

    function cloneRemovedColumnStack() {
      return removedColumnStack.map(column => [...column]);
    }

    function currentHistoryState() {
      return {
        value: source.value,
        manualSubheadline,
        removedColumnStack: cloneRemovedColumnStack(),
        selectionStart: source.selectionStart ?? 0,
        selectionEnd: source.selectionEnd ?? 0
      };
    }

    function restoreHistoryState(state) {
      isRestoringHistory = true;
      source.value = state.value;
      manualSubheadline = state.manualSubheadline || "";
      removedColumnStack = state.removedColumnStack.map(column => [...column]);
      const selectionStart = Math.min(state.selectionStart ?? 0, source.value.length);
      const selectionEnd = Math.min(state.selectionEnd ?? selectionStart, source.value.length);
      source.setSelectionRange(selectionStart, selectionEnd);
      render();
      updateFloatingButtons();
      isRestoringHistory = false;
    }

    function pushHistory(state = currentHistoryState()) {
      const previous = undoStack[undoStack.length - 1];
      if (previous && previous.value === state.value && previous.manualSubheadline === state.manualSubheadline) return;
      undoStack.push(state);
      if (undoStack.length > 80) undoStack.shift();
      redoStack = [];
    }

    function undoContentChange() {
      if (!undoStack.length) return;
      redoStack.push(currentHistoryState());
      restoreHistoryState(undoStack.pop());
    }

    function redoContentChange() {
      if (!redoStack.length) return;
      undoStack.push(currentHistoryState());
      restoreHistoryState(redoStack.pop());
    }

    function isSeparatorRow(row) {
      return row.length > 1 && row.every(cell => /^:?-{3,}:?$/.test(cell));
    }

    function cleanInputLine(line) {
      return line.replace(/^[ ]+|[ ]+$/g, "");
    }

    function getTableSelectionInfo() {
      try {
        const { tableLines } = splitContentParts(source.value);
        const tableText = tableLines.join("\n");
        const tableStart = source.value.indexOf(tableText);
        const selectedText = source.value.slice(source.selectionStart, source.selectionEnd);
        return {
          tableStart,
          selectedText,
          isInTable: tableStart >= 0 && source.selectionStart >= tableStart,
          isSingleCellText: Boolean(selectedText.trim()) && !/[\n\t]/.test(selectedText)
        };
      } catch (err) {
        return { tableStart: -1, selectedText: "", isInTable: false, isSingleCellText: false };
      }
    }

    function updateFloatingButtons() {
      const hasSelection = source.selectionStart !== source.selectionEnd &&
        source.value.slice(source.selectionStart, source.selectionEnd).trim();
      if (!hasSelection) {
        makeSubheadBtn.hidden = true;
        makeBoldBtn.hidden = true;
        return;
      }

      const tableSelection = getTableSelectionInfo();
      makeSubheadBtn.hidden = tableSelection.isInTable;
      makeBoldBtn.hidden = !(tableSelection.isInTable && tableSelection.isSingleCellText);
    }

    function makeSelectedTextSubhead() {
      const value = source.value;
      if (source.selectionStart === source.selectionEnd) return;

      const start = source.selectionStart ?? 0;
      const end = source.selectionEnd ?? 0;
      const selectedText = value.slice(start, end).replace(/\s+/g, " ").trim();
      if (!selectedText) return;

      const currentParts = splitContentParts(value);
      const tableText = currentParts.tableLines.join("\n");
      const tableStart = value.indexOf(tableText);
      if (tableStart >= 0 && start >= tableStart) return;

      const beforeSelection = value.slice(0, start).replace(/[ \t]+$/, "");
      const afterSelection = value.slice(end).replace(/^[ \t]+/, "");
      const joiner = beforeSelection &&
        afterSelection &&
        !beforeSelection.endsWith("\n") &&
        !afterSelection.startsWith("\n") ? " " : "";
      const remainingValue = `${beforeSelection}${joiner}${afterSelection}`;
      const { titleLines, tableLines } = splitContentParts(remainingValue);
      const titleWithoutSubhead = splitTitleAndSubtitle(titleLines).title
        .split(/\r?\n/)
        .map(cleanInputLine)
        .filter(line => line.trim());

      pushHistory();
      manualSubheadline = selectedText;

      if (titleWithoutSubhead.length) {
        titleWithoutSubhead[titleWithoutSubhead.length - 1] =
          `${titleWithoutSubhead[titleWithoutSubhead.length - 1]}\t${selectedText.replace(/\t+/g, " ")}`;
      }

      source.value = [
        ...titleWithoutSubhead,
        "",
        ...tableLines
      ].join("\n");
      source.setSelectionRange(0, 0);
      makeSubheadBtn.hidden = true;
      makeBoldBtn.hidden = true;
      removedColumnStack = [];
      render();
    }

    function makeSelectedTextBold() {
      const value = source.value;
      const start = source.selectionStart ?? 0;
      const end = source.selectionEnd ?? 0;
      if (start === end) return;

      const tableSelection = getTableSelectionInfo();
      if (!tableSelection.isInTable || !tableSelection.isSingleCellText) return;

      const selectedText = value.slice(start, end);
      pushHistory();
      source.value = `${value.slice(0, start)}**${selectedText}**${value.slice(end)}`;
      source.setSelectionRange(start + 2, end + 2);
      makeBoldBtn.hidden = true;
      render();
    }

    function splitTitleAndSubtitle(titleLines) {
      const titleText = titleLines.join("\n").trim();
      const tabIndex = titleText.indexOf("\t");
      if (tabIndex < 0) return { title: titleText, subtitle: "" };

      return {
        title: titleText.slice(0, tabIndex).trim(),
        subtitle: titleText.slice(tabIndex + 1).replace(/\t+/g, " ").trim()
      };
    }

    function splitContentParts(text) {
      const normalizedText = text.trim();
      if (!normalizedText) {
        throw new Error("Paste a headline and table content first.");
      }

      const blocks = normalizedText
        .split(/\n\s*\n+/)
        .map(block => block.split(/\r?\n/).map(cleanInputLine).filter(line => line.trim()))
        .filter(block => block.length);

      if (blocks.length > 1) {
        const possibleTableLines = blocks.slice(1).flat();
        const tableStartIndex = possibleTableLines.findIndex(line => splitColumns(line).length > 1);
        if (tableStartIndex >= 0) {
          return {
            titleLines: blocks[0],
            tableLines: possibleTableLines.slice(tableStartIndex)
          };
        }
      }

      const allLines = blocks.flat();
      const firstLineColumns = splitColumns(allLines[0] || "");
      if (
        allLines[0] &&
        allLines[0].includes("\t") &&
        firstLineColumns.length === 2 &&
        firstLineColumns.some(cell => cell.length > 12) &&
        allLines.slice(1).some(line => splitColumns(line).length > 1)
      ) {
        const tableStartIndex = allLines.slice(1).findIndex(line => splitColumns(line).length > 1);
        return {
          titleLines: [allLines[0]],
          tableLines: allLines.slice(tableStartIndex + 1)
        };
      }

      const tableStartIndex = allLines.findIndex(line => splitColumns(line).length > 1);

      if (tableStartIndex < 0) {
        throw new Error("Could not find table columns. Use tabs, pipes, or double spaces between columns.");
      }

      return {
        titleLines: allLines.slice(0, tableStartIndex),
        tableLines: allLines.slice(tableStartIndex)
      };
    }

    function parseInput(text) {
      const { titleLines, tableLines } = splitContentParts(text);
      const { title, subtitle } = splitTitleAndSubtitle(titleLines);
      const header = splitColumns(tableLines[0] || "");
      const rows = tableLines.slice(1).map(splitColumns).filter(row => !isSeparatorRow(row));
      const columnCount = Math.max(header.length, ...rows.map(row => row.length));
      const padRow = row => Array.from({ length: columnCount }, (_, index) => row[index] || "");

      if (header.length < 2) {
        throw new Error("The table header must have at least two columns.");
      }

      return { title, subtitle: manualSubheadline || subtitle, header: padRow(header), rows: rows.map(padRow) };
    }

    function addColumnToContent() {
      try {
        const { titleLines, tableLines } = splitContentParts(source.value);
        const tableRows = tableLines.map(splitColumns);
        const columnCount = Math.max(...tableRows.map(row => row.length));

        if (columnCount >= 6) {
          throw new Error("Maximum 6 columns allowed.");
        }

        pushHistory();
        const restoredColumn = removedColumnStack.pop() || [];
        const expandedRows = tableRows.map((row, rowIndex) => {
          const padded = Array.from({ length: columnCount }, (_, index) => row[index] || "");
          padded.push(restoredColumn[rowIndex] ?? (rowIndex === 0 ? "New Column" : ""));
          return padded;
        });

        const outputLines = [
          ...titleLines,
          ...(titleLines.length ? [""] : []),
          ...expandedRows.map(row => row.join("\t"))
        ];

        source.value = outputLines.join("\n");
        render();
      } catch (err) {
        error.textContent = err.message;
        error.classList.add("show");
      }
    }

    function removeColumnFromContent() {
      try {
        const { titleLines, tableLines } = splitContentParts(source.value);
        const tableRows = tableLines.map(splitColumns);
        const columnCount = Math.max(...tableRows.map(row => row.length));

        if (columnCount <= 2) {
          throw new Error("Table needs at least two columns.");
        }

        pushHistory();
        const removedColumn = [];
        const reducedRows = tableRows.map((row, rowIndex) => {
          const padded = Array.from({ length: columnCount }, (_, index) => row[index] || "");
          removedColumn[rowIndex] = padded[columnCount - 1] || "";
          return padded.slice(0, -1);
        });
        removedColumnStack.push(removedColumn);

        const outputLines = [
          ...titleLines,
          ...(titleLines.length ? [""] : []),
          ...reducedRows.map(row => row.join("\t"))
        ];

        source.value = outputLines.join("\n");
        render();
      } catch (err) {
        error.textContent = err.message;
        error.classList.add("show");
      }
    }

    function normalizeRow(row, length) {
      return Array.from({ length }, (_, index) => row[index] || "");
    }

    function getColumnFractions(columnCount) {
      if (columnCount === 2) {
        const first = Number(twoColumnSplit.value) / 100;
        return [first, 1 - first];
      }
      return Array.from({ length: columnCount }, () => 1 / columnCount);
    }

    function updateTwoColumnControl(columnCount) {
      const isTwoColumn = columnCount === 2;
      twoColumnWidthControl.hidden = !isTwoColumn;
      if (!isTwoColumn) return;

      const first = Number(twoColumnSplit.value);
      twoColumnWidthValue.textContent = `${first} / ${100 - first}`;
    }

    function parseRichSegments(text) {
      const segments = [];
      let remaining = String(text || "");
      let bold = false;

      while (remaining.length) {
        const markerIndex = remaining.indexOf("**");
        if (markerIndex < 0) {
          if (remaining) segments.push({ text: remaining, bold });
          break;
        }

        if (markerIndex > 0) {
          segments.push({ text: remaining.slice(0, markerIndex), bold });
        }

        bold = !bold;
        remaining = remaining.slice(markerIndex + 2);
      }

      return segments.filter(segment => segment.text);
    }

    function renderRichInline(element, text) {
      element.textContent = "";
      parseRichSegments(text).forEach(segment => {
        const span = document.createElement(segment.bold ? "strong" : "span");
        span.textContent = segment.text;
        element.append(span);
      });
    }

    function render() {
      let currentTitle = "";
      try {
        const data = parseInput(source.value);
        const colCount = data.header.length;
        const columnFractions = getColumnFractions(colCount);
        currentTitle = data.title;
        subheadline.textContent = data.subtitle;
        subheadline.hidden = !data.subtitle;
        sheet.style.setProperty("--subtitle-shift", uploadedPhotoSrc ? "0px" : "25px");
        updateTwoColumnControl(colCount);
        error.classList.remove("show");
        error.textContent = "";

        table.innerHTML = "";
        const colgroup = document.createElement("colgroup");
        columnFractions.forEach(fraction => {
          const col = document.createElement("col");
          col.style.width = `${fraction * 100}%`;
          colgroup.append(col);
        });
        const thead = document.createElement("thead");
        const headRow = document.createElement("tr");
        data.header.forEach(cell => {
          const th = document.createElement("th");
          renderRichInline(th, cell);
          headRow.append(th);
        });
        thead.append(headRow);

        const tbody = document.createElement("tbody");
        data.rows.forEach(row => {
          const tr = document.createElement("tr");
          normalizeRow(row, colCount).forEach(cell => {
            const td = document.createElement("td");
            renderRichInline(td, cell);
            tr.append(td);
          });
          tbody.append(tr);
        });

        table.append(colgroup, thead, tbody);
      } catch (err) {
        error.textContent = err.message;
        error.classList.add("show");
        twoColumnWidthControl.hidden = true;
      }

      sheet.style.setProperty("--title-size", `${titleSize.value}px`);
      sheet.style.setProperty("--subtitle-size", "30px");
      sheet.style.setProperty("--header-size", `${headerSize.value}px`);
      sheet.style.setProperty("--body-size", `${bodySize.value}px`);
      sheet.style.setProperty("--border-size", `${borderSize.value}px`);
      sheet.style.setProperty("--head", getHeaderColors().background);
      sheet.style.setProperty("--header-text", getHeaderColors().text);
      sheet.style.width = `${sheetWidth.value}px`;
      sheet.style.fontFamily = getLanguageFont().css;
      document.documentElement.lang = getLanguageFont().lang;
      refreshLogo();
      logo.hidden = logoMode.value === "hide";
      photoFrame.hidden = !uploadedPhotoSrc;
      photoPreview.src = uploadedPhotoSrc;
      tableSource.textContent = sourceNote.value.trim();
      tableSource.hidden = !sourceNote.value.trim();
      applyPhotoTransform();
      if (currentTitle) {
        layoutPreviewHeadline(currentTitle);
      } else {
        headline.innerHTML = "";
        sheet.querySelector(".table-titlebar").style.minHeight = "0px";
      }
    }

    function resetPhotoCrop() {
      photoEditMode = false;
      photoCrop = { scale: 1, x: 0, y: 0 };
      dragState = null;
      applyPhotoTransform();
    }

    function applyPhotoTransform() {
      photoFrame.classList.toggle("editing", photoEditMode && Boolean(uploadedPhotoSrc));
      const frameWidth = photoFrame.clientWidth || 0;
      const frameHeight = photoFrame.clientHeight || 0;
      const imageWidth = photoPreview.naturalWidth || 0;
      const imageHeight = photoPreview.naturalHeight || 0;

      if (frameWidth && frameHeight && imageWidth && imageHeight) {
        const baseScale = Math.max(frameWidth / imageWidth, frameHeight / imageHeight);
        photoPreview.style.width = `${imageWidth * baseScale}px`;
        photoPreview.style.height = `${imageHeight * baseScale}px`;
      }

      photoPreview.style.transform =
        `translate(-50%, -50%) translate(${photoCrop.x}px, ${photoCrop.y}px) scale(${photoCrop.scale})`;
    }

    function setCanvasFont(ctx, weight, size) {
      ctx.font = `${weight} ${size}px "${getLanguageFont().font}", sans-serif`;
      ctx.textBaseline = "top";
      ctx.fillStyle = "#000";
    }

    function wrapCanvasText(ctx, text, maxWidth) {
      const words = String(text || "").split(/\s+/).filter(Boolean);
      if (!words.length) return [""];

      const lines = [];
      let current = "";

      words.forEach(word => {
        const test = current ? `${current} ${word}` : word;
        if (ctx.measureText(test).width <= maxWidth || !current) {
          current = test;
          return;
        }
        lines.push(current);
        current = word;
      });

      if (current) lines.push(current);
      return lines;
    }

    function wrapBalancedCanvasText(ctx, text, maxWidth) {
      const words = String(text || "").split(/\s+/).filter(Boolean);
      if (words.length < 3) return wrapCanvasText(ctx, text, maxWidth);

      const lineWidth = (start, end) => ctx.measureText(words.slice(start, end).join(" ")).width;
      const memo = new Map();

      function bestFrom(index) {
        if (index >= words.length) return { cost: 0, lines: [] };
        if (memo.has(index)) return memo.get(index);

        let best = null;
        for (let end = index + 1; end <= words.length; end++) {
          const width = lineWidth(index, end);
          if (width > maxWidth && end > index + 1) break;

          const rest = bestFrom(end);
          const slack = Math.max(0, maxWidth - width);
          const isLast = end === words.length;
          const cost = rest.cost + (isLast ? 0 : slack * slack);
          const candidate = {
            cost,
            lines: [words.slice(index, end).join(" "), ...rest.lines]
          };

          if (!best || candidate.cost < best.cost) best = candidate;
        }

        memo.set(index, best);
        return best;
      }

      return bestFrom(0).lines;
    }

    function wrapBalancedVariableCanvasText(ctx, text, lineBoxForIndex) {
      const paragraphs = String(text || "")
        .split(/\n+/)
        .map(part => part.trim())
        .filter(Boolean);
      if (!paragraphs.length) return [];

      const wrappedLines = [];

      paragraphs.forEach(paragraph => {
        const words = paragraph.split(/\s+/).filter(Boolean);
        const startLineIndex = wrappedLines.length;
        const memo = new Map();
        const lineWidth = (start, end) => ctx.measureText(words.slice(start, end).join(" ")).width;

        function bestFrom(wordIndex, lineIndex) {
          if (wordIndex >= words.length) return { cost: 0, lines: [] };
          const key = `${wordIndex}:${lineIndex}`;
          if (memo.has(key)) return memo.get(key);

          const absoluteLineIndex = startLineIndex + lineIndex;
          const box = lineBoxForIndex(absoluteLineIndex);
          let best = null;

          for (let end = wordIndex + 1; end <= words.length; end++) {
            const width = lineWidth(wordIndex, end);
            if (width > box.width && end > wordIndex + 1) break;

            const rest = bestFrom(end, lineIndex + 1);
            const slack = Math.max(0, box.width - width);
            const isLast = end === words.length;
            const cost = rest.cost + (isLast ? 0 : slack * slack);
            const candidate = {
              cost,
              lines: [{
                text: words.slice(wordIndex, end).join(" "),
                x: box.x,
                width: box.width
              }, ...rest.lines]
            };

            if (!best || candidate.cost < best.cost) best = candidate;
          }

          memo.set(key, best);
          return best;
        }

        wrappedLines.push(...bestFrom(0, 0).lines);
      });

      return wrappedLines;
    }

    function roundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function drawWrappedText(ctx, lines, x, y, maxWidth, lineHeight, align = "left") {
      ctx.textAlign = align;
      const drawX = align === "center" ? x + maxWidth / 2 : x;
      lines.forEach((line, index) => {
        ctx.fillText(line, drawX, y + index * lineHeight);
      });
    }

    function tokenizeRichText(text) {
      const tokens = [];
      parseRichSegments(text).forEach(segment => {
        const parts = segment.text.match(/\S+\s*/g) || [];
        parts.forEach(part => tokens.push({ text: part, bold: segment.bold }));
      });
      return tokens;
    }

    function setRichCanvasFont(ctx, bold, size, normalWeight = 500, boldWeight = 700) {
      setCanvasFont(ctx, bold ? boldWeight : normalWeight, size);
    }

    function measureRichTokens(ctx, tokens, size, normalWeight = 500, boldWeight = 700) {
      return tokens.reduce((width, token) => {
        setRichCanvasFont(ctx, token.bold, size, normalWeight, boldWeight);
        return width + ctx.measureText(token.text).width;
      }, 0);
    }

    function wrapRichCanvasText(ctx, text, maxWidth, size, normalWeight = 500, boldWeight = 700) {
      const tokens = tokenizeRichText(text);
      if (!tokens.length) return [[{ text: "", bold: false }]];

      const lines = [];
      let current = [];

      tokens.forEach(token => {
        const test = [...current, token];
        if (measureRichTokens(ctx, test, size, normalWeight, boldWeight) <= maxWidth || !current.length) {
          current = test;
          return;
        }

        lines.push(current);
        current = [token];
      });

      if (current.length) lines.push(current);
      return lines;
    }

    function drawRichWrappedText(ctx, lines, x, y, lineHeight, size, normalWeight = 500, boldWeight = 700) {
      lines.forEach((line, lineIndex) => {
        const drawableLine = line.map(token => ({ ...token }));
        if (drawableLine.length) {
          drawableLine[drawableLine.length - 1].text =
            drawableLine[drawableLine.length - 1].text.replace(/\s+$/, "");
        }

        const fillStyle = ctx.fillStyle;
        const hasMixedWeight = drawableLine.some(token => token.bold) &&
          drawableLine.some(token => !token.bold);
        if (!hasMixedWeight) {
          const isBold = drawableLine.some(token => token.bold);
          setRichCanvasFont(ctx, isBold, size, normalWeight, boldWeight);
          ctx.fillStyle = fillStyle;
          ctx.textAlign = "left";
          ctx.fillText(drawableLine.map(token => token.text).join(""), x, y + lineIndex * lineHeight);
          return;
        }

        let cursorX = x;
        drawableLine.forEach(token => {
          setRichCanvasFont(ctx, token.bold, size, normalWeight, boldWeight);
          ctx.fillStyle = fillStyle;
          ctx.textAlign = "left";
          ctx.fillText(token.text, cursorX, y + lineIndex * lineHeight);
          cursorX += ctx.measureText(token.text).width;
        });
      });
    }

    function drawCenteredParagraphLine(ctx, line, x, y, fullX, fullWidth) {
      const textWidth = ctx.measureText(line.text).width;
      const centeredX = fullX + (fullWidth - textWidth) / 2;
      const minX = line.x;
      ctx.textAlign = "left";
      ctx.fillText(line.text, Math.max(centeredX, minX), y);
    }

    function layoutPreviewHeadline(text) {
      const outputWidth = Number(sheetWidth.value);
      const paddingX = 14;
      const innerWidth = outputWidth - paddingX * 2;
      const logoShown = logoMode.value !== "hide";
      const logoSize = logoShown ? 68 : 0;
      const shouldWrapAroundLogo = logoShown && !uploadedPhotoSrc;
      const logoGap = 4;
      const headlineShiftX = uploadedPhotoSrc ? 0 : 25;
      const titlePx = Number(titleSize.value);
      const titleLineHeight = Math.round(titlePx * 1.2);
      const titleTopSpace = 22;
      const scratch = document.createElement("canvas").getContext("2d");

      setCanvasFont(scratch, 700, titlePx);
      const fullLineBox = { x: headlineShiftX, width: innerWidth };
      const sideLineBox = {
        x: logoSize + logoGap + headlineShiftX,
        width: innerWidth - logoSize - logoGap - headlineShiftX
      };
      const headlineLineBox = lineIndex => {
        const lineY = titleTopSpace + lineIndex * titleLineHeight;
        return shouldWrapAroundLogo && lineY < logoSize ? sideLineBox : fullLineBox;
      };
      const lines = wrapBalancedVariableCanvasText(scratch, text, headlineLineBox);

      headline.innerHTML = "";
      lines.forEach(line => {
        const textWidth = scratch.measureText(line.text).width;
        const centeredX = headlineShiftX + (innerWidth - textWidth) / 2;
        const span = document.createElement("span");
        span.className = "headline-line";
        span.textContent = line.text;
        span.style.width = `${Math.ceil(textWidth)}px`;
        span.style.marginLeft = `${Math.max(centeredX, line.x)}px`;
        headline.append(span);
      });

      sheet.querySelector(".table-titlebar").style.minHeight =
        `${Math.max(logoSize, titleTopSpace + lines.length * titleLineHeight)}px`;
    }

    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = src;
      });
    }

    function drawCoverImage(ctx, image, x, y, width, height) {
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const sourceWidth = width / scale;
      const sourceHeight = height / scale;
      const sourceX = (image.naturalWidth - sourceWidth) / 2;
      const sourceY = (image.naturalHeight - sourceHeight) / 2;
      ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
    }

    function drawEditedCoverImage(ctx, image, x, y, width, height) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.clip();

      const baseScale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const drawWidth = image.naturalWidth * baseScale * photoCrop.scale;
      const drawHeight = image.naturalHeight * baseScale * photoCrop.scale;
      const drawX = x + (width - drawWidth) / 2 + photoCrop.x;
      const drawY = y + (height - drawHeight) / 2 + photoCrop.y;
      ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
      ctx.restore();
    }

    async function downloadJpg() {
      try {
        await document.fonts.ready;
        const data = parseInput(source.value);
        const outputWidth = 730;
        const scale = 2;
        const paddingX = 14;
        const paddingTop = 17;
        const paddingBottom = 18;
        const border = Number(borderSize.value);
        const titlePx = Number(titleSize.value);
        const subtitlePx = 30;
        const headerPx = Number(headerSize.value);
        const bodyPx = Number(bodySize.value);
        const logoShown = logoMode.value !== "hide";
        const logoImage = logoShown ? await loadImage(getActiveLogoSrc()) : null;
        const photoImage = uploadedPhotoSrc ? await loadImage(uploadedPhotoSrc) : null;
        const logoSize = logoShown ? 68 : 0;
        const shouldWrapAroundLogo = logoShown && !photoImage;
        const tableWidth = outputWidth - paddingX * 2;
        const columns = data.header.length;
        const columnFractions = getColumnFractions(columns);
        const columnWidths = columnFractions.map(fraction => tableWidth * fraction);
        const columnXs = columnWidths.reduce((positions, width, index) => {
          positions.push(index === 0 ? paddingX : positions[index - 1] + columnWidths[index - 1]);
          return positions;
        }, []);
        const headerColors = getHeaderColors();
        const scratch = document.createElement("canvas").getContext("2d");

        setCanvasFont(scratch, 700, titlePx);
        const titleLineHeight = Math.round(titlePx * 1.2);
        const titleTopSpace = 22;
        const photoY = paddingTop;
        const photoHeight = photoImage ? Math.round(outputWidth * 2 / 4) : 0;
        const titleAreaY = photoImage ? photoY + photoHeight + 13 : paddingTop;
        const titleStartY = titleAreaY + titleTopSpace;
        const logoBottom = paddingTop + logoSize;
        const headlineShiftX = photoImage ? 0 : 25;
        const fullLineBox = { x: paddingX + headlineShiftX, width: tableWidth };
        const sideLineBox = {
          x: paddingX + logoSize + 4 + headlineShiftX,
          width: outputWidth - (paddingX + logoSize + 4 + headlineShiftX) - paddingX
        };
        const headlineLineBox = lineIndex => {
          const lineY = titleStartY + lineIndex * titleLineHeight;
          return shouldWrapAroundLogo && lineY < logoBottom ? sideLineBox : fullLineBox;
        };
        const titleLines = data.title ? wrapBalancedVariableCanvasText(scratch, data.title, headlineLineBox) : [];
        let titleBlockHeight = titleLines.length ? titleTopSpace + titleLines.length * titleLineHeight : 0;
        let subtitleLines = [];
        let subtitleLineHeight = 0;

        if (data.subtitle) {
          setCanvasFont(scratch, 600, subtitlePx);
          subtitleLines = wrapCanvasText(scratch, data.subtitle, tableWidth);
          subtitleLineHeight = Math.round(subtitlePx * 1.25);
          titleBlockHeight += (titleBlockHeight ? 8 : titleTopSpace) + subtitleLines.length * subtitleLineHeight;
        }

        const topBlockHeight = Math.max(logoSize, titleBlockHeight);
        const tableY = titleAreaY + topBlockHeight + 13;
        const cellPadX = 18;
        const cellPadTop = 16;
        const cellPadBottom = 11;
        const headerLineHeight = 32;
        const bodyLineHeight = 32;
        const canvasTableTextOffsetY = 7;

        setCanvasFont(scratch, 600, headerPx);
        const headerLines = data.header.map((text, index) => wrapRichCanvasText(scratch, text, columnWidths[index] - cellPadX * 2, headerPx, 600, 700));
        const headerHeight = Math.max(...headerLines.map(lines => lines.length * headerLineHeight + cellPadTop + cellPadBottom));

        setCanvasFont(scratch, 500, bodyPx);
        const normalizedRows = data.rows.map(row => normalizeRow(row, columns));
        const bodyLines = normalizedRows.map(row => row.map((text, index) => wrapRichCanvasText(scratch, text, columnWidths[index] - cellPadX * 2, bodyPx, 500, 700)));
        const rowHeights = bodyLines.map(row => Math.max(60, ...row.map(lines => lines.length * bodyLineHeight + cellPadTop + cellPadBottom)));
        const sourceText = sourceNote.value.trim();
        const sourceFontSize = 20;
        const sourceLineHeight = 25;
        let sourceLines = [];
        let sourceBlockHeight = 0;
        if (sourceText) {
          setCanvasFont(scratch, 400, sourceFontSize);
          sourceLines = wrapCanvasText(scratch, sourceText, tableWidth);
          sourceBlockHeight = 19 + sourceLines.length * sourceLineHeight;
        }
        const tableHeight = headerHeight + rowHeights.reduce((sum, height) => sum + height, 0);
        const outputHeight = Math.ceil(tableY + tableHeight + sourceBlockHeight + paddingBottom);

        const canvas = document.createElement("canvas");
        canvas.width = outputWidth * scale;
        canvas.height = outputHeight * scale;
        const ctx = canvas.getContext("2d");
        ctx.scale(scale, scale);
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, outputWidth, outputHeight);

        if (photoImage) {
          drawEditedCoverImage(ctx, photoImage, 0, 0, outputWidth, photoHeight);
        }

        if (logoShown) {
          ctx.save();
          ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
          ctx.shadowBlur = 2;
          ctx.shadowOffsetY = 2;
          ctx.drawImage(logoImage, paddingX, paddingTop, logoSize, logoSize);
          ctx.restore();
        }

        if (titleLines.length) {
          setCanvasFont(ctx, 700, titlePx);
          titleLines.forEach((line, index) => {
            drawCenteredParagraphLine(ctx, line, line.x, titleStartY + index * titleLineHeight, paddingX + headlineShiftX, tableWidth);
          });
        }
        if (subtitleLines.length) {
          setCanvasFont(ctx, 600, subtitlePx);
          ctx.fillStyle = "#1f1f1f";
          const subtitleY = titleLines.length
            ? titleStartY + titleLines.length * titleLineHeight + 8
            : titleAreaY + titleTopSpace;
          drawWrappedText(ctx, subtitleLines, paddingX + headlineShiftX, subtitleY, tableWidth, subtitleLineHeight, "center");
        }

        let y = tableY;
        ctx.lineWidth = border;
        ctx.strokeStyle = "#0a0a0a";
        ctx.fillStyle = headerColors.background;
        ctx.fillRect(paddingX, y, tableWidth, headerHeight);

        setCanvasFont(ctx, 600, headerPx);
        ctx.fillStyle = headerColors.text;
        headerLines.forEach((lines, index) => {
          const x = columnXs[index];
          const textY = y + (headerHeight - lines.length * headerLineHeight) / 2 + canvasTableTextOffsetY;
          drawRichWrappedText(ctx, lines, x + cellPadX, textY, headerLineHeight, headerPx, 600, 700);
        });

        ctx.beginPath();
        ctx.rect(paddingX, y, tableWidth, headerHeight);
        ctx.stroke();
        for (let index = 1; index < columns; index++) {
          const x = columnXs[index];
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + headerHeight);
          ctx.stroke();
        }

        y += headerHeight;
        setCanvasFont(ctx, 500, bodyPx);
        bodyLines.forEach((row, rowIndex) => {
          const rowHeight = rowHeights[rowIndex];
          row.forEach((lines, colIndex) => {
            const x = columnXs[colIndex];
            const textY = y + (rowHeight - lines.length * bodyLineHeight) / 2 + canvasTableTextOffsetY;
            drawRichWrappedText(ctx, lines, x + cellPadX, textY, bodyLineHeight, bodyPx, 500, 700);
          });

          ctx.beginPath();
          ctx.rect(paddingX, y, tableWidth, rowHeight);
          ctx.stroke();
          for (let index = 1; index < columns; index++) {
            const x = columnXs[index];
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + rowHeight);
            ctx.stroke();
          }
          y += rowHeight;
        });

        if (sourceLines.length) {
          setCanvasFont(ctx, 400, sourceFontSize);
          ctx.fillStyle = "#9c9c9c";
          drawWrappedText(ctx, sourceLines, paddingX, y + 19, tableWidth, sourceLineHeight, "left");
        }

        const link = document.createElement("a");
        link.download = "hindi-table.jpg";
        link.href = canvas.toDataURL("image/jpeg", 0.95);
        link.click();
      } catch (err) {
        error.textContent = err.message || "JPG download failed.";
        error.classList.add("show");
      }
    }

    source.value = sampleText;
    source.addEventListener("beforeinput", () => {
      if (isRestoringHistory) return;
      pendingInputState = currentHistoryState();
    });
    source.addEventListener("paste", event => {
      const html = event.clipboardData && event.clipboardData.getData("text/html");
      const tableText = htmlTableToText(html);
      if (!tableText) return;

      event.preventDefault();
      pushHistory();
      removedColumnStack = [];
      manualSubheadline = "";
      insertTextAtCursor(source, tableText);
      render();
    });
    source.addEventListener("keydown", event => {
      const isUndoKey = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z";
      if (isUndoKey) {
        event.preventDefault();
        if (event.shiftKey) {
          redoContentChange();
        } else {
          undoContentChange();
        }
        return;
      }

      if (event.key !== "Tab" || event.shiftKey) return;

      event.preventDefault();
      pushHistory();
      insertTextAtCursor(source, "\t");
      render();
    });
    addColumnBtn.addEventListener("click", addColumnToContent);
    removeColumnBtn.addEventListener("click", removeColumnFromContent);
    makeSubheadBtn.addEventListener("mousedown", event => event.preventDefault());
    makeBoldBtn.addEventListener("mousedown", event => event.preventDefault());
    makeSubheadBtn.addEventListener("click", () => {
      try {
        makeSelectedTextSubhead();
      } catch (err) {
        error.textContent = err.message;
        error.classList.add("show");
      }
    });
    makeBoldBtn.addEventListener("click", () => {
      try {
        makeSelectedTextBold();
      } catch (err) {
        error.textContent = err.message;
        error.classList.add("show");
      }
    });
    source.addEventListener("select", updateFloatingButtons);
    source.addEventListener("mouseup", updateFloatingButtons);
    source.addEventListener("keyup", updateFloatingButtons);
    source.addEventListener("blur", () => {
      window.setTimeout(updateFloatingButtons, 120);
    });
    source.addEventListener("input", () => {
      if (isRestoringHistory) return;
      if (pendingInputState) pushHistory(pendingInputState);
      pendingInputState = null;
      removedColumnStack = [];
      manualSubheadline = "";
      updateFloatingButtons();
    });

    photoInput.addEventListener("change", () => {
      const file = photoInput.files && photoInput.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        uploadedPhotoSrc = String(reader.result || "");
        resetPhotoCrop();
        render();
      };
      reader.readAsDataURL(file);
    });

    clearPhotoBtn.addEventListener("click", () => {
      uploadedPhotoSrc = "";
      photoInput.value = "";
      resetPhotoCrop();
      render();
    });

    photoPreview.addEventListener("load", applyPhotoTransform);

    photoFrame.addEventListener("dblclick", event => {
      if (!uploadedPhotoSrc) return;
      event.preventDefault();
      photoEditMode = !photoEditMode;
      dragState = null;
      applyPhotoTransform();
    });

    photoFrame.addEventListener("pointerdown", event => {
      if (!photoEditMode || !uploadedPhotoSrc) return;
      event.preventDefault();
      photoFrame.setPointerCapture(event.pointerId);
      dragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        cropX: photoCrop.x,
        cropY: photoCrop.y
      };
    });

    photoFrame.addEventListener("pointermove", event => {
      if (!dragState || dragState.pointerId !== event.pointerId) return;
      photoCrop.x = dragState.cropX + event.clientX - dragState.startX;
      photoCrop.y = dragState.cropY + event.clientY - dragState.startY;
      applyPhotoTransform();
    });

    function endPhotoDrag(event) {
      if (!dragState || dragState.pointerId !== event.pointerId) return;
      dragState = null;
    }

    photoFrame.addEventListener("pointerup", endPhotoDrag);
    photoFrame.addEventListener("pointercancel", endPhotoDrag);

    photoFrame.addEventListener("wheel", event => {
      if (!photoEditMode || !uploadedPhotoSrc) return;
      event.preventDefault();
      const nextScale = photoCrop.scale * (event.deltaY < 0 ? 1.08 : 0.92);
      photoCrop.scale = Math.min(4, Math.max(1, nextScale));
      applyPhotoTransform();
    }, { passive: false });

    document.querySelector("#downloadBtn").addEventListener("click", downloadJpg);
    [source, sourceNote, hasSubtitle, titleSize, bodySize, headerSize, borderSize, sheetWidth, logoMode, languageMode, headerColorMode, twoColumnSplit]
      .forEach(control => control.addEventListener("input", render));
    languageMode.addEventListener("change", render);
    logoMode.addEventListener("change", render);
    headerColorMode.addEventListener("change", render);

    document.fonts.ready.then(render);
    render();
  