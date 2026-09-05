/* ============================================================
   Bootstrap Grid Plugin — expanded layouts + live preview colors
   ============================================================ */
CKEDITOR.plugins.add("bootstrapgrid", {
    init: function (editor) {
        editor.on("instanceReady", function () {
            if (editor.document) {
                var style = editor.document.createElement("style");
                style.setAttribute("type", "text/css");
                style.setText(`
                    .bootstrap-grid-helper {
                        background: linear-gradient(135deg, #eef4ff 0%, #f7faff 100%) !important;
                        padding: 18px !important;
                        border: 2px dashed #4c8bf5 !important;
                        border-radius: 8px !important;
                        text-align: center !important;
                        margin: 5px 0 !important;
                        min-height: 56px !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                        font-size: 13px !important;
                        font-weight: 600 !important;
                        color: #3a5db0 !important;
                        letter-spacing: 0.02em !important;
                        transition: background 0.2s ease, border-color 0.2s ease !important;
                    }
                    .bootstrap-grid-helper:hover {
                        background: linear-gradient(135deg, #e2ecff 0%, #eef4ff 100%) !important;
                        border-color: #2f6fe0 !important;
                    }
                    .row {
                        display: flex;
                        flex-wrap: wrap;
                        margin-right: -15px;
                        margin-left: -15px;
                    }
                    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6,
                    .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
                        position: relative;
                        width: 100%;
                        padding-right: 15px;
                        padding-left: 15px;
                    }
                    @media (min-width: 768px) {
                        .col-md-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
                        .col-md-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
                        .col-md-3 { flex: 0 0 25%; max-width: 25%; }
                        .col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
                        .col-md-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
                        .col-md-6 { flex: 0 0 50%; max-width: 50%; }
                        .col-md-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
                        .col-md-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
                        .col-md-9 { flex: 0 0 75%; max-width: 75%; }
                        .col-md-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
                        .col-md-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
                        .col-md-12 { flex: 0 0 100%; max-width: 100%; }
                    }
                `);
                editor.document.getHead().append(style);
            }
        });

        editor.ui.addRichCombo("BootstrapGrid", {
            label: "Layout Grid",
            title: "Insert Bootstrap Grid",
            toolbar: "insert",
            panel: {
                css: [CKEDITOR.skin.getPath("editor")].concat(
                    editor.config.contentsCss || [],
                ),
                multiSelect: false,
                attributes: { "aria-label": "Bootstrap Grid options" },
            },

            init: function () {
                this.add("2cols", "2 Columns (50 / 50)", "2 equal columns");
                this.add("3cols", "3 Columns (33 / 33 / 33)", "3 equal columns");
                this.add("4cols", "4 Columns (25 / 25 / 25 / 25)", "4 equal columns");
                this.add("6cols", "6 Columns (16 x 6)", "6 equal columns");
                this.add("main-sidebar", "Main + Sidebar (8 / 4)", "Main content with sidebar");
                this.add("sidebar-main", "Sidebar + Main (4 / 8)", "Sidebar with main content");
                this.add("main-sidebar-9-3", "Main + Sidebar (9 / 3)", "Main content with small sidebar");
                this.add("thirds-asym", "Asymmetric (7 / 5)", "Slightly uneven two column split");
                this.add("hero-two", "Hero + Two Below (12 / 6 / 6)", "Full-width header, two columns below");
            },

            onClick: function (value) {
                var col = function (size, label) {
                    return (
                        '<div class="col-md-' +
                        size +
                        '"><div class="bootstrap-grid-helper">' +
                        label +
                        " (" +
                        size +
                        ")</div></div>"
                    );
                };
                var row = function (inner) {
                    return '<div class="row">' + inner + "</div><p>&nbsp;</p>";
                };

                var html = "";
                switch (value) {
                    case "2cols":
                        html = row(col(6, "Column 1") + col(6, "Column 2"));
                        break;
                    case "3cols":
                        html = row(col(4, "Column 1") + col(4, "Column 2") + col(4, "Column 3"));
                        break;
                    case "4cols":
                        html = row(
                            col(3, "Column 1") + col(3, "Column 2") + col(3, "Column 3") + col(3, "Column 4"),
                        );
                        break;
                    case "6cols":
                        html = row(
                            col(2, "1") + col(2, "2") + col(2, "3") + col(2, "4") + col(2, "5") + col(2, "6"),
                        );
                        break;
                    case "main-sidebar":
                        html = row(col(8, "Main Content") + col(4, "Sidebar"));
                        break;
                    case "sidebar-main":
                        html = row(col(4, "Sidebar") + col(8, "Main Content"));
                        break;
                    case "main-sidebar-9-3":
                        html = row(col(9, "Main Content") + col(3, "Sidebar"));
                        break;
                    case "thirds-asym":
                        html = row(col(7, "Primary") + col(5, "Secondary"));
                        break;
                    case "hero-two":
                        html = row(col(12, "Hero Banner")) + row(col(6, "Left") + col(6, "Right"));
                        break;
                }
                editor.insertHtml(html);
            },
        });
    },
});

window.CKEDITOR_ROUTES = window.CKEDITOR_ROUTES || {
    upload: "/ckeditor/upload",
    imagelist: "/ckeditor/images",
    delete: "/ckeditor/delete",
};

let currentEditorInstance = null;

/* ============================================================
   Modernized modal + toast styling
   ============================================================ */
const modalStyles = `
    <style>
        :root {
            --gm-accent: #4c6ef5;
            --gm-accent-dark: #3b5bdb;
            --gm-danger: #e03131;
            --gm-danger-dark: #c92a2a;
            --gm-success: #2f9e44;
            --gm-bg: #ffffff;
            --gm-surface: #f8f9fb;
            --gm-border: #e6e8ee;
            --gm-text: #1c1f26;
            --gm-text-muted: #7a8194;
            --gm-radius: 12px;
            --gm-shadow: 0 12px 40px rgba(20, 24, 40, 0.18);
        }

        .ckeditor-modal {
            display: none;
            position: fixed;
            z-index: 999999 !important;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 18, 30, 0.55);
            backdrop-filter: blur(3px);
            animation: gm-fade-in 0.15s ease-out;
        }

        @keyframes gm-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes gm-pop-in {
            from { opacity: 0; transform: translateY(12px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ckeditor-modal-content {
            background-color: var(--gm-bg);
            margin: 2.5% auto;
            padding: 24px 26px 20px;
            border: none;
            width: 92%;
            max-width: 1040px;
            border-radius: var(--gm-radius);
            box-shadow: var(--gm-shadow);
            z-index: 999999 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            animation: gm-pop-in 0.18s ease-out;
        }

        .ckeditor-modal-header {
            padding-bottom: 14px;
            margin-bottom: 16px;
            border-bottom: 1px solid var(--gm-border);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .ckeditor-modal-header h3 {
            margin: 0;
            color: var(--gm-text);
            font-size: 18px;
            font-weight: 700;
            letter-spacing: -0.01em;
        }

        .ckeditor-modal-close {
            color: var(--gm-text-muted);
            font-size: 22px;
            font-weight: 400;
            line-height: 1;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.15s ease, color 0.15s ease;
        }

        .ckeditor-modal-close:hover {
            background: var(--gm-surface);
            color: var(--gm-text);
        }

        .gallery-toolbar {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }

        .gallery-search-wrap {
            position: relative;
            flex: 1;
            min-width: 200px;
        }

        .gallery-search-input {
            width: 100%;
            box-sizing: border-box;
            padding: 10px 14px 10px 36px;
            border: 1px solid var(--gm-border);
            border-radius: 8px;
            font-size: 14px;
            background: var(--gm-surface);
            transition: border-color 0.15s ease, background 0.15s ease;
        }

        .gallery-search-input:focus {
            outline: none;
            border-color: var(--gm-accent);
            background: var(--gm-bg);
        }

        .gallery-search-icon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gm-text-muted);
            pointer-events: none;
            font-size: 14px;
        }

        #gallery-scroll-container {
            max-height: 520px;
            overflow-y: auto;
            padding: 4px;
            border-radius: var(--gm-radius);
        }

        #gallery-scroll-container.drag-over {
            outline: 2px dashed var(--gm-accent);
            outline-offset: -6px;
            background: rgba(76, 110, 245, 0.05);
            border-radius: var(--gm-radius);
        }

        #gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 14px;
        }

        .gallery-image-item {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            background: var(--gm-bg);
            border: 1px solid var(--gm-border);
            box-shadow: 0 1px 3px rgba(20, 24, 40, 0.06);
            transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .gallery-image-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(20, 24, 40, 0.14);
        }

        .gallery-image-item img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            cursor: pointer;
            display: block;
            transition: opacity 0.2s ease;
        }

        .gallery-image-item img:hover {
            opacity: 0.85;
        }

        .gallery-image-name {
            padding: 6px 10px 8px;
            font-size: 11px;
            color: var(--gm-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .delete-image-btn {
            position: absolute;
            top: 6px;
            right: 6px;
            width: 26px;
            height: 26px;
            border: none;
            border-radius: 50%;
            background: rgba(224, 49, 49, 0.92);
            color: #fff;
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
            line-height: 1;
            opacity: 0;
            transition: opacity 0.15s ease, background 0.15s ease, transform 0.15s ease;
        }

        .gallery-image-item:hover .delete-image-btn {
            opacity: 1;
        }

        .delete-image-btn:hover {
            background: var(--gm-danger-dark);
            transform: scale(1.1);
        }

        .gallery-loader {
            text-align: center;
            padding: 16px;
            color: var(--gm-text-muted);
            font-size: 13px;
        }

        .upload-btn-in-modal {
            padding: 10px 18px;
            background: var(--gm-accent);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 6px rgba(76, 110, 245, 0.35);
            transition: background 0.15s ease, transform 0.1s ease;
        }

        .upload-btn-in-modal:hover {
            background: var(--gm-accent-dark);
        }

        .upload-btn-in-modal:active {
            transform: scale(0.97);
        }

        .upload-btn-in-modal:disabled {
            opacity: 0.7;
            cursor: default;
        }

        .pagination-status {
            text-align: center;
            padding: 12px;
            font-size: 12px;
            color: var(--gm-text-muted);
        }

        .gallery-drop-hint {
            text-align: center;
            padding: 40px 20px;
            color: var(--gm-text-muted);
            font-size: 13px;
            border: 2px dashed var(--gm-border);
            border-radius: var(--gm-radius);
            grid-column: 1 / -1;
        }

        /* Toast notifications, replacing alert() popups */
        #gm-toast-stack {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999999 !important;
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .gm-toast {
            min-width: 240px;
            max-width: 340px;
            padding: 12px 16px;
            border-radius: 10px;
            box-shadow: 0 8px 24px rgba(20, 24, 40, 0.2);
            font-size: 13.5px;
            font-weight: 500;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 8px;
            animation: gm-toast-in 0.2s ease-out;
        }

        @keyframes gm-toast-in {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .gm-toast.gm-success { background: var(--gm-success); }
        .gm-toast.gm-error { background: var(--gm-danger); }
        .gm-toast.gm-info { background: var(--gm-accent); }

        .spinner {
            display: inline-block;
            width: 18px;
            height: 18px;
            border: 2.5px solid rgba(0, 0, 0, 0.08);
            border-radius: 50%;
            border-top-color: var(--gm-accent);
            animation: spin 0.8s linear infinite;
            margin-right: 8px;
            vertical-align: middle;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
`;

/* Toast helper — replaces alert() with a small non-blocking notice */
function gmToast(message, type) {
    type = type || "info";
    let stack = document.getElementById("gm-toast-stack");
    if (!stack) {
        stack = document.createElement("div");
        stack.id = "gm-toast-stack";
        document.body.appendChild(stack);
    }
    const toast = document.createElement("div");
    toast.className = "gm-toast gm-" + type;
    toast.textContent = message;
    stack.appendChild(toast);
    setTimeout(function () {
        toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        toast.style.opacity = "0";
        toast.style.transform = "translateX(20px)";
        setTimeout(function () {
            toast.remove();
        }, 250);
    }, 3200);
}

// Add modal HTML to page
if (!document.getElementById("ckeditor-gallery-modal")) {
    const modalHTML = `
        <div id="ckeditor-gallery-modal" class="ckeditor-modal">
            <div class="ckeditor-modal-content">
                <div class="ckeditor-modal-header">
                    <h3>📷 Image Gallery</h3>
                    <span class="ckeditor-modal-close">&times;</span>
                </div>
                <div class="gallery-toolbar">
                    <div class="gallery-search-wrap">
                        <span class="gallery-search-icon">🔍</span>
                        <input type="text" id="gallerySearchInput" class="gallery-search-input" placeholder="Search images by name..." />
                    </div>
                    <button class="upload-btn-in-modal" id="uploadBtnInModal">
                        ⬆ Upload New Image
                    </button>
                </div>
                <div id="simple-image-gallery">
                    <div id="gallery-scroll-container">
                        <div id="gallery-grid">
                            <div style="grid-column:1/-1; text-align:center; padding:20px;">
                                Loading images...
                            </div>
                        </div>
                        <div id="gallery-loader" class="gallery-loader" style="display:none;">
                            <div class="spinner"></div>
                            Loading more images...
                        </div>
                        <div id="pagination-status" class="pagination-status"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalStyles + modalHTML);

    // Setup modal close functionality
    const modal = document.getElementById("ckeditor-gallery-modal");
    const closeBtn = modal.querySelector(".ckeditor-modal-close");
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });

    // Drag & drop upload directly onto the gallery
    modal.addEventListener("dragover", function (event) {
        event.preventDefault();
        const container = document.getElementById("gallery-scroll-container");
        if (container) container.classList.add("drag-over");
    });
    modal.addEventListener("dragleave", function (event) {
        const container = document.getElementById("gallery-scroll-container");
        if (container) container.classList.remove("drag-over");
    });
    modal.addEventListener("drop", function (event) {
        event.preventDefault();
        const container = document.getElementById("gallery-scroll-container");
        if (container) container.classList.remove("drag-over");
        const files = event.dataTransfer && event.dataTransfer.files;
        if (files && files.length > 0) {
            uploadImageFromModal(files[0]);
        }
    });

    // Live search filter
    document.addEventListener("input", function (event) {
        if (event.target && event.target.id === "gallerySearchInput") {
            const query = event.target.value.trim().toLowerCase();
            document.querySelectorAll(".gallery-image-item").forEach(function (item) {
                const name = (item.getAttribute("data-name") || "").toLowerCase();
                item.style.display = !query || name.indexOf(query) !== -1 ? "" : "none";
            });
        }
    });
}

if (typeof CKEDITOR === "undefined") {
    console.error(
        "[ckeditor-enhanced.js] CKEDITOR is not defined. Make sure ckeditor.js " +
            "(the core CKEditor 4 library, e.g. /vendor/ckeditor/ckeditor.js) is " +
            "loaded on the page BEFORE this script tag.",
    );
}

document.querySelectorAll(".ckeditorUpdate4").forEach(function (el) {
    try {
        CKEDITOR.replace(el, {
            removePlugins: "exportpdf",
            allowedContent: true,
            extraAllowedContent: "*(*);*{*}",
            // Keep this list to plugins that ship in your CKEditor 4 build.
            // "bootstrapgrid" is the only custom one added here; if your build
            // is a minimal/"basic" package, some of the others may not exist —
            // remove any that throw a "plugin not found" error in the console.
            extraPlugins: "uploadimage,sourcearea,justify,div,bootstrapgrid",
            filebrowserUploadUrl:
                window.CKEDITOR_ROUTES.upload + "?_token=" + window.csrfToken,
            filebrowserImageUploadUrl:
                window.CKEDITOR_ROUTES.upload + "?_token=" + window.csrfToken,
            imageUploadUrl:
                window.CKEDITOR_ROUTES.upload + "?_token=" + window.csrfToken,
            filebrowserUploadMethod: "form",
            baseHref: window.location.origin + "/",
            contentsCss: [
                CKEDITOR.basePath + "contents.css",
                "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
            ],
            resize_enabled: true,
            resize_dir: "vertical",
            image_previewText: " ",
            removeDialogTabs: "image:advanced",
            on: {
            instanceReady: function () {
                this.dataProcessor.htmlFilter.addRules({
                    elements: {
                        img: function (element) {
                            if (element.attributes.style) {
                                delete element.attributes.style;
                            }
                            if (element.attributes.width) {
                                delete element.attributes.width;
                            }
                            if (element.attributes.height) {
                                delete element.attributes.height;
                            }
                            return element;
                        },
                    },
                });
                this.on("change", function () {
                    var data = this.getData();
                    if (
                        data.indexOf('style="') !== -1 ||
                        data.indexOf('width="') !== -1
                    ) {
                        var cleanData = data
                            .replace(
                                /<img([^>]*?)style=["'][^"']*["']([^>]*?)>/gi,
                                function (match, before, after) {
                                    return "<img" + before + after + ">";
                                },
                            )
                            .replace(/width=["'][^"']*["']/gi, "")
                            .replace(/height=["'][^"']*["']/gi, "");
                        if (cleanData !== data) {
                            this.setData(cleanData);
                        }
                    }
                });
            },
        },
        });
    } catch (err) {
        console.error(
            "[ckeditor-enhanced.js] Failed to initialize CKEditor on element:",
            el,
            err,
        );
    }
});

if (typeof CKEDITOR !== "undefined") {
CKEDITOR.on("dialogDefinition", function (ev) {
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    if (dialogName === "image") {
        dialogDefinition.width = 900;
        dialogDefinition.height = 600;
        dialogDefinition.resizable = CKEDITOR.DIALOG_RESIZE_BOTH;
        dialogDefinition.addContents({
            id: "gallery",
            label: "Image Gallery",
            elements: [
                {
                    type: "html",
                    id: "imageGallery",
                    html: `
                        <div style="padding: 24px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                            <button type="button"
                                id="open-gallery-modal-btn"
                                style="
                                    padding: 12px 26px;
                                    background: linear-gradient(135deg, #4c6ef5, #3b5bdb);
                                    color: white;
                                    border: none;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-size: 15px;
                                    font-weight: 600;
                                    box-shadow: 0 4px 12px rgba(76,110,245,0.35);
                                ">
                                📂 Open Image Gallery
                            </button>
                            <p style="margin-top: 15px; color: #7a8194; font-size: 12px;">
                                Browse, search, and upload images — or drag &amp; drop a file straight into the gallery.
                            </p>
                        </div>
                    `,
                },
            ],
        });

        var infoTab = dialogDefinition.getContents("info");
        if (infoTab) {
            var txtUrlField = infoTab.get("txtUrl");
            if (txtUrlField) {
                txtUrlField.style = "width: 100%;";
            }
            var previewField = infoTab.get("htmlPreview");
            if (previewField) {
                previewField.style = "min-height: 150px;";
            }
        }

        var originalOnShow = dialogDefinition.onShow;
        dialogDefinition.onShow = function () {
            if (originalOnShow) {
                originalOnShow.apply(this, arguments);
            }
            setTimeout(function () {
                var openBtn = document.getElementById("open-gallery-modal-btn");
                if (openBtn) {
                    var newBtn = openBtn.cloneNode(true);
                    openBtn.parentNode.replaceChild(newBtn, openBtn);

                    newBtn.onclick = function () {
                        currentEditorInstance = CKEDITOR.dialog.getCurrent();
                        const modal = document.getElementById(
                            "ckeditor-gallery-modal",
                        );
                        if (modal) {
                            modal.style.display = "block";
                            loadGalleryInModal(true);
                        }
                    };
                }
            }, 100);
        };
    }

    if (
        dialogName === "link" ||
        dialogName === "table" ||
        dialogName === "flash"
    ) {
        dialogDefinition.width = 800;
        dialogDefinition.height = 500;
        dialogDefinition.resizable = CKEDITOR.DIALOG_RESIZE_BOTH;
    }
});
}

let currentPage = 1;
let loadingImages = false;
let hasMoreImages = true;
let totalImagesLoaded = 0;

function loadGalleryInModal(reset = false) {
    var container = document.getElementById("simple-image-gallery");
    if (!container) {
        console.log("Container not found");
        return;
    }

    if (loadingImages) {
        console.log("Already loading images, skipping...");
        return;
    }

    if (!reset && !hasMoreImages) {
        console.log("No more images to load");
        const statusDiv = document.getElementById("pagination-status");
        if (statusDiv) {
            statusDiv.innerHTML = "No more images to load";
        }
        return;
    }

    loadingImages = true;
    console.log("Loading page:", currentPage, "Reset:", reset);

    if (reset) {
        currentPage = 1;
        hasMoreImages = true;
        totalImagesLoaded = 0;
        container.innerHTML = `
            <div id="gallery-scroll-container">
                <div id="gallery-grid">
                    <div style="grid-column:1/-1; text-align:center; padding:20px;">
                        <div class="spinner"></div>
                        Loading images...
                    </div>
                </div>
                <div id="gallery-loader" class="gallery-loader" style="display:none;">
                    <div class="spinner"></div>
                    Loading more images...
                </div>
                <div id="pagination-status" class="pagination-status"></div>
            </div>
        `;
    }

    const galleryGrid = document.getElementById("gallery-grid");
    const loader = document.getElementById("gallery-loader");
    const statusDiv = document.getElementById("pagination-status");

    if (!galleryGrid) {
        loadingImages = false;
        return;
    }

    if (loader && !reset) {
        loader.style.display = "block";
    }

    var apiUrl = window.CKEDITOR_ROUTES.imagelist + "?page=" + currentPage;
    console.log("Fetching images from:", apiUrl);

    fetch(apiUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    "HTTP " + response.status + " - " + response.statusText,
                );
            }
            return response.json();
        })
        .then((data) => {
            loadingImages = false;
            if (loader) {
                loader.style.display = "none";
            }

            hasMoreImages = data.hasMore || false;
            console.log(
                "Has more images:",
                hasMoreImages,
                "Images count:",
                data.images?.length,
            );

            if (!data.images || data.images.length === 0) {
                if (currentPage === 1) {
                    galleryGrid.innerHTML = `
                    <div class="gallery-drop-hint">
                        No images found yet.<br>
                        Click <strong>Upload New Image</strong> above, or drag &amp; drop a file into this area.
                    </div>
                `;
                    if (statusDiv) statusDiv.innerHTML = "";
                } else {
                    if (statusDiv) statusDiv.innerHTML = "🏁 End of gallery";
                }
                return;
            }

            if (currentPage === 1 && reset) {
                galleryGrid.innerHTML = "";
            }
            data.images.forEach((image) => {
                const imageItem = document.createElement("div");
                imageItem.className = "gallery-image-item";
                imageItem.setAttribute("data-name", image.name || "");
                imageItem.innerHTML = `
                <img
                    src="${image.url}"
                    loading="lazy"
                    onclick="insertImageToEditor('${image.url}')"
                    alt="${escapeHtml(image.name)}"
                    title="Click to insert this image"
                >
                <div class="gallery-image-name" title="${escapeHtml(image.name)}">${escapeHtml(image.name)}</div>
                <button
                    type="button"
                    class="delete-image-btn"
                    onclick="deleteGalleryImageFromModal('${escapeHtml(image.name)}', this)"
                    title="Delete image"
                >
                    ×
                </button>
            `;
                galleryGrid.appendChild(imageItem);
                totalImagesLoaded++;
            });
            if (statusDiv) {
                if (hasMoreImages) {
                    statusDiv.innerHTML = `📸 Loaded ${totalImagesLoaded} images. Scroll for more...`;
                } else {
                    statusDiv.innerHTML = `✨ Loaded ${totalImagesLoaded} images. That's all!`;
                }
            }
            currentPage++;
            setTimeout(() => {
                initModalGalleryScroll();
            }, 100);
        })
        .catch((error) => {
            console.error("Gallery error:", error);
            loadingImages = false;
            if (loader) {
                loader.style.display = "none";
            }
            if (galleryGrid && currentPage === 1 && reset) {
                galleryGrid.innerHTML = `
                <div style="grid-column:1/-1; text-align:center; padding:20px; color:#e03131;">
                    Error loading images: ${error.message}<br>
                    Please check if the image list endpoint is configured correctly.
                </div>
            `;
            }
            if (statusDiv) {
                statusDiv.innerHTML = "Error loading images";
            }
        });
}

function initModalGalleryScroll() {
    const scrollContainer = document.getElementById("gallery-scroll-container");
    if (!scrollContainer) {
        console.log("Scroll container not found");
        return;
    }
    console.log("Initializing scroll listener");
    scrollContainer.removeEventListener("scroll", handleScroll);
    scrollContainer.addEventListener("scroll", handleScroll);
}

function handleScroll() {
    const scrollContainer = document.getElementById("gallery-scroll-container");
    if (!scrollContainer) return;

    const scrollPosition =
        scrollContainer.scrollTop + scrollContainer.clientHeight;
    const scrollHeight = scrollContainer.scrollHeight;
    const threshold = 100;

    if (scrollHeight - scrollPosition <= threshold) {
        console.log("Near bottom, loading more...", {
            scrollTop: scrollContainer.scrollTop,
            clientHeight: scrollContainer.clientHeight,
            scrollHeight: scrollHeight,
            position: scrollPosition,
            hasMore: hasMoreImages,
            loading: loadingImages,
        });

        if (hasMoreImages && !loadingImages) {
            console.log("Loading more images, page:", currentPage);
            loadGalleryInModal(false);
        } else if (!hasMoreImages) {
            console.log("No more images to load");
            const statusDiv = document.getElementById("pagination-status");
            if (statusDiv && statusDiv.innerHTML !== "End of gallery") {
                statusDiv.innerHTML =
                    "You have reached the end of the gallery";
            }
        }
    }
}

// Insert image directly into CKEditor
function insertImageToEditor(imageUrl) {
    console.log("Inserting image:", imageUrl);
    var dialog = CKEDITOR.dialog.getCurrent();

    if (dialog) {
        dialog.setValueOf("info", "txtUrl", imageUrl);
        var preview = dialog.getContentElement("info", "htmlPreview");
        if (preview && preview.getElement) {
            var previewElement = preview.getElement();
            if (previewElement) {
                previewElement.setHtml(
                    '<img src="' +
                        imageUrl +
                        '" style="max-width:200px; max-height:200px;" />',
                );
            }
        }
        dialog.selectPage("info");
        const modal = document.getElementById("ckeditor-gallery-modal");
        if (modal) {
            modal.style.display = "none";
        }

        console.log("Image URL set in dialog:", imageUrl);
        gmToast("Image selected — adjust size and click OK to insert.", "success");
    } else {
        // If no dialog is open, try to insert directly into editor
        for (var instanceName in CKEDITOR.instances) {
            if (CKEDITOR.instances.hasOwnProperty(instanceName)) {
                var editor = CKEDITOR.instances[instanceName];
                if (editor && editor.mode === "wysiwyg") {
                    var imgHtml =
                        '<img src="' +
                        imageUrl +
                        '" alt="Image" style="max-width:100%; height:auto;" />';
                    editor.insertHtml(imgHtml);
                    const modal = document.getElementById(
                        "ckeditor-gallery-modal",
                    );
                    if (modal) {
                        modal.style.display = "none";
                    }

                    console.log("Image inserted directly into editor");
                    gmToast("Image inserted successfully!", "success");
                    return;
                }
            }
        }

        console.error("No dialog or editor instance found");
        gmToast(
            "Open the image dialog first, or click inside the editor before selecting an image.",
            "error",
        );
        const modal = document.getElementById("ckeditor-gallery-modal");
        if (modal) {
            modal.style.display = "none";
        }
    }
}

function deleteGalleryImageFromModal(imageName, button) {
    if (!confirm("Delete this image?")) {
        return;
    }

    var csrfToken =
        document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content") || window.csrfToken;

    fetch(window.CKEDITOR_ROUTES.delete, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
            Accept: "application/json",
        },
        body: JSON.stringify({
            image: imageName,
        }),
    })
        .then((response) => {
            return response.json().then((data) => {
                if (!response.ok) {
                    throw new Error(data.error || "Delete failed");
                }
                return data;
            });
        })
        .then((result) => {
            const imageItem = button.closest(".gallery-image-item");
            if (imageItem) {
                imageItem.remove();
                totalImagesLoaded--;
                console.log(result.message || "Image deleted successfully");
                gmToast("Image deleted.", "success");
                setTimeout(() => {
                    currentPage = 1;
                    loadGalleryInModal(true);
                }, 500);
            }
        })
        .catch((error) => {
            console.error(error);
            gmToast(error.message || "Delete failed", "error");
        });
}

// Upload function that handles both JSON and HTML responses
function triggerUploadFromModal() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/jpeg,image/jpg,image/png,image/webp,image/gif";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    fileInput.onchange = function (e) {
        const file = e.target.files[0];
        if (file) {
            uploadImageFromModal(file);
        }
        document.body.removeChild(fileInput);
    };

    fileInput.click();
}

function uploadImageFromModal(file) {
    const formData = new FormData();
    formData.append("upload", file);
    formData.append("_token", window.csrfToken);
    const uploadUrl = window.CKEDITOR_ROUTES.upload;
    const uploadBtn = document.getElementById("uploadBtnInModal");
    if (!uploadBtn) return;

    const originalText = uploadBtn.innerHTML;
    uploadBtn.innerHTML = '<span class="spinner"></span>Uploading...';
    uploadBtn.disabled = true;

    fetch(uploadUrl, {
        method: "POST",
        body: formData,
        credentials: "same-origin",
        headers: {
            "X-CSRF-TOKEN": window.csrfToken,
            "X-Requested-With": "XMLHttpRequest",
        },
    })
        .then(async (response) => {
            const contentType = response.headers.get("content-type");
            let responseData;

            if (contentType && contentType.includes("application/json")) {
                responseData = await response.json();
            } else {
                const text = await response.text();
                const urlMatch = text.match(
                    /window\.parent\.CKEDITOR\.tools\.callFunction\([^,]+,\s*['"]([^'"]+)['"]/,
                );
                if (urlMatch && urlMatch[1]) {
                    responseData = { uploaded: true, url: urlMatch[1] };
                } else {
                    throw new Error("Invalid response from server");
                }
            }

            uploadBtn.innerHTML = originalText;
            uploadBtn.disabled = false;

            if (responseData.uploaded === true || responseData.url) {
                const imageUrl = responseData.url;
                if (imageUrl) {
                    // Reset and reload gallery
                    currentPage = 1;
                    hasMoreImages = true;
                    await loadGalleryInModal(true);
                    gmToast("Image uploaded successfully!", "success");
                    if (
                        confirm(
                            "Do you want to insert this uploaded image into the editor?",
                        )
                    ) {
                        insertImageToEditor(imageUrl);
                    }
                } else {
                    gmToast("Upload successful but no URL returned", "error");
                }
            } else {
                gmToast(
                    "Upload failed: " +
                        (responseData.error?.message || "Unknown error"),
                    "error",
                );
            }
        })
        .catch((error) => {
            uploadBtn.innerHTML = originalText;
            uploadBtn.disabled = false;
            console.error("Upload error:", error);
            gmToast("Upload failed: " + error.message, "error");
        });
}

// Add click handler for upload button
document.addEventListener("DOMContentLoaded", function () {
    const uploadBtn = document.getElementById("uploadBtnInModal");
    if (uploadBtn) {
        uploadBtn.addEventListener("click", function (e) {
            e.preventDefault();
            triggerUploadFromModal();
        });
    }
});

function escapeHtml(str) {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}