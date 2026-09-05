/**
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 *
 * Enhanced style set — adds callouts, highlights, buttons, badges, cards and
 * typography helpers on top of the original CKEditor 4 style definitions,
 * so editors get a richer, more attractive "Styles" dropdown out of the box.
 */

CKEDITOR.stylesSet.add( 'default', [
	/* ============================================================
	   Block styles
	   ============================================================ */

	// These styles are already available in the "Format" drop-down list ("format" plugin),
	// so they are not needed here by default. You may enable them to avoid
	// placing the "Format" combo in the toolbar, maintaining the same features.
	/*
	{ name: 'Paragraph',		element: 'p' },
	{ name: 'Heading 1',		element: 'h1' },
	{ name: 'Heading 2',		element: 'h2' },
	{ name: 'Heading 3',		element: 'h3' },
	{ name: 'Heading 4',		element: 'h4' },
	{ name: 'Heading 5',		element: 'h5' },
	{ name: 'Heading 6',		element: 'h6' },
	{ name: 'Preformatted Text',element: 'pre' },
	{ name: 'Address',			element: 'address' },
	*/

	{ name: 'Italic Title',		element: 'h2', styles: { 'font-style': 'italic' } },
	{ name: 'Subtitle',			element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } },

	// Lead paragraph — larger intro text, common in blog/article layouts
	{ name: 'Lead Paragraph', element: 'p', attributes: { 'class': 'lead-paragraph' } },

	// Drop-cap opening paragraph, classic editorial look
	{ name: 'Drop Cap Paragraph', element: 'p', attributes: { 'class': 'dropcap-paragraph' } },

	{
		name: 'Special Container',
		element: 'div',
		styles: {
			padding: '5px 10px',
			background: '#eee',
			border: '1px solid #ccc'
		}
	},

	/* ---- Callout / alert boxes ---- */
	{ name: 'Callout: Info',		element: 'div', attributes: { 'class': 'callout callout-info' } },
	{ name: 'Callout: Success',	element: 'div', attributes: { 'class': 'callout callout-success' } },
	{ name: 'Callout: Warning',	element: 'div', attributes: { 'class': 'callout callout-warning' } },
	{ name: 'Callout: Danger',		element: 'div', attributes: { 'class': 'callout callout-danger' } },

	/* ---- Card container ---- */
	{ name: 'Card',				element: 'div', attributes: { 'class': 'content-card' } },

	/* ============================================================
	   Inline styles
	   ============================================================ */

	// These are core styles available as toolbar buttons. You may opt enabling
	// some of them in the Styles drop-down list, removing them from the toolbar.
	// (This requires the "stylescombo" plugin.)
	/*
	{ name: 'Strong',			element: 'strong', overrides: 'b' },
	{ name: 'Emphasis',			element: 'em'	, overrides: 'i' },
	{ name: 'Underline',		element: 'u' },
	{ name: 'Strikethrough',	element: 'strike' },
	{ name: 'Subscript',		element: 'sub' },
	{ name: 'Superscript',		element: 'sup' },
	*/

	{ name: 'Marker',			element: 'span', attributes: { 'class': 'marker' } },

	/* ---- Highlight colors ---- */
	{ name: 'Highlight: Yellow',	element: 'span', attributes: { 'class': 'highlight highlight-yellow' } },
	{ name: 'Highlight: Green',	element: 'span', attributes: { 'class': 'highlight highlight-green' } },
	{ name: 'Highlight: Blue',		element: 'span', attributes: { 'class': 'highlight highlight-blue' } },
	{ name: 'Highlight: Pink',		element: 'span', attributes: { 'class': 'highlight highlight-pink' } },

	/* ---- Buttons & badges ---- */
	{ name: 'Button: Primary',		element: 'a', attributes: { 'class': 'btn btn-primary' } },
	{ name: 'Button: Outline',		element: 'a', attributes: { 'class': 'btn btn-outline' } },
	{ name: 'Badge: Default',		element: 'span', attributes: { 'class': 'badge' } },
	{ name: 'Badge: Success',		element: 'span', attributes: { 'class': 'badge badge-success' } },
	{ name: 'Badge: Danger',		element: 'span', attributes: { 'class': 'badge badge-danger' } },

	/* ---- Typography helpers ---- */
	{ name: 'Muted Text',			element: 'span', attributes: { 'class': 'text-muted' } },
	{ name: 'Small Caps',			element: 'span', attributes: { 'class': 'text-small-caps' } },

	{ name: 'Big',				element: 'big' },
	{ name: 'Small',			element: 'small' },
	{ name: 'Typewriter',		element: 'tt' },

	{ name: 'Computer Code',	element: 'code' },
	{ name: 'Keyboard Phrase',	element: 'kbd' },
	{ name: 'Sample Text',		element: 'samp' },
	{ name: 'Variable',			element: 'var' },

	{ name: 'Deleted Text',		element: 'del' },
	{ name: 'Inserted Text',	element: 'ins' },

	{ name: 'Cited Work',		element: 'cite' },
	{ name: 'Inline Quotation',	element: 'q' },

	{ name: 'Language: RTL',	element: 'span', attributes: { 'dir': 'rtl' } },
	{ name: 'Language: LTR',	element: 'span', attributes: { 'dir': 'ltr' } },

	/* ============================================================
	   Object styles
	   ============================================================ */

	{
		name: 'Styled Image (left)',
		element: 'img',
		attributes: { 'class': 'left' }
	},

	{
		name: 'Styled Image (right)',
		element: 'img',
		attributes: { 'class': 'right' }
	},

	// Rounded, framed image with soft shadow — nicer default for inline photos
	{
		name: 'Styled Image (framed)',
		element: 'img',
		attributes: { 'class': 'image-framed' }
	},

	{
		name: 'Compact Table',
		element: 'table',
		attributes: {
			cellpadding: '5',
			cellspacing: '0',
			border: '1',
			bordercolor: '#ccc'
		},
		styles: {
			'border-collapse': 'collapse'
		}
	},

	{ name: 'Borderless Table',		element: 'table',	styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
	{ name: 'Striped Table',			element: 'table',	attributes: { 'class': 'table-striped' } },
	{ name: 'Square Bulleted List',	element: 'ul',		styles: { 'list-style-type': 'square' } },
	{ name: 'Checklist',				element: 'ul',		attributes: { 'class': 'checklist' } },

	/* ============================================================
	   Widget styles
	   ============================================================ */

	{ name: 'Clean Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-clean' } },
	{ name: 'Grayscale Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-grayscale' } },

	{ name: 'Featured Snippet', type: 'widget', widget: 'codeSnippet', attributes: { 'class': 'code-featured' } },

	{ name: 'Featured Formula', type: 'widget', widget: 'mathjax', attributes: { 'class': 'math-featured' } },

	{ name: '240p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-240p' }, group: 'size' },
	{ name: '360p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-360p' }, group: 'size' },
	{ name: '480p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-480p' }, group: 'size' },
	{ name: '720p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-720p' }, group: 'size' },
	{ name: '1080p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-1080p' }, group: 'size' },

	// Adding space after the style name is an intended workaround. For now, there
	// is no option to create two styles with the same name for different widget types. See https://dev.ckeditor.com/ticket/16664.
	{ name: '240p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-240p' }, group: 'size' },
	{ name: '360p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-360p' }, group: 'size' },
	{ name: '480p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-480p' }, group: 'size' },
	{ name: '720p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-720p' }, group: 'size' },
	{ name: '1080p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-1080p' }, group: 'size' }

] );