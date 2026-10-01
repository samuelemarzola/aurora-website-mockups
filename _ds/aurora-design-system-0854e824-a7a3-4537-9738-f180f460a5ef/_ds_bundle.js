/* @ds-bundle: {"format":4,"namespace":"AuroraDesignSystem_0854e8","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"OrbitRing","sourcePath":"components/brand/OrbitRing.jsx"},{"name":"WordmarkPattern","sourcePath":"components/brand/WordmarkPattern.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"TalentCard","sourcePath":"components/cards/TalentCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CategoryLabel","sourcePath":"components/core/CategoryLabel.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"StoryProgress","sourcePath":"components/navigation/StoryProgress.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AURORA_COLORS","sourcePath":"components/palette.js"},{"name":"LIGHT_COLORS","sourcePath":"components/palette.js"}],"sourceHashes":{"components/brand/Logo.jsx":"81fe4e850ac2","components/brand/OrbitRing.jsx":"64633e61e6ed","components/brand/WordmarkPattern.jsx":"8a00285194fb","components/cards/Card.jsx":"6b2321a15e96","components/cards/TalentCard.jsx":"350dba07a92f","components/core/Avatar.jsx":"5c4d85e3cdfe","components/core/Badge.jsx":"1d4b4f5e937c","components/core/Button.jsx":"f8d9f77a9f7b","components/core/CategoryLabel.jsx":"cec6733680cb","components/core/Icon.jsx":"0487b9e27be8","components/core/IconButton.jsx":"364ea21336b9","components/core/Tag.jsx":"e2898e11b0f2","components/feedback/Dialog.jsx":"022393feb8d2","components/feedback/Toast.jsx":"a9723c425871","components/feedback/Tooltip.jsx":"19d68a119ae4","components/forms/Checkbox.jsx":"9be466b9c9a2","components/forms/Input.jsx":"836292dd5754","components/forms/Radio.jsx":"ddd6685caddd","components/forms/Select.jsx":"f0ed9182385d","components/forms/Switch.jsx":"0bc99bffea42","components/navigation/StoryProgress.jsx":"6bcfae489806","components/navigation/Tabs.jsx":"631543a06213","components/palette.js":"63f1ffea9ca2","ui_kits/social/BannerOOH.jsx":"76682e832e79","ui_kits/social/StoryAd.jsx":"3650e5104110","ui_kits/social/data.js":"635bf7bf1d7d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AuroraDesignSystem_0854e8 = window.AuroraDesignSystem_0854e8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const LOGO_FILES = {
  horizontal: "aurora-horizontal",
  vertical: "aurora-vertical",
  symbol: "aurora-symbol"
};
const LOGO_RATIO = {
  horizontal: 1600 / 276,
  vertical: 1400 / 745,
  symbol: 800 / 536
};
function Logo({
  variant = "horizontal",
  tone = "black",
  base = "",
  width,
  height,
  style,
  alt = "Aurora Talent Agency"
}) {
  const r = LOGO_RATIO[variant] || 1;
  const w = width ?? (height ? height * r : variant === "symbol" ? 64 : 220);
  return /*#__PURE__*/React.createElement("img", {
    src: base + "assets/logo/" + (LOGO_FILES[variant] || LOGO_FILES.horizontal) + "-" + (tone === "white" ? "white" : "black") + ".png",
    alt: alt,
    style: {
      width: w,
      height: "auto",
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/OrbitRing.jsx
try { (() => {
function OrbitRing({
  size = 320,
  color = "var(--line-hair)",
  weight = 1,
  top,
  left,
  right,
  bottom,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      border: weight + "px solid " + color,
      top,
      left,
      right,
      bottom,
      pointerEvents: "none",
      ...style
    }
  });
}
Object.assign(__ds_scope, { OrbitRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/OrbitRing.jsx", error: String((e && e.message) || e) }); }

// components/brand/WordmarkPattern.jsx
try { (() => {
function WordmarkPattern({
  rows = 3,
  highlight = [[0, 1], [2, 1]],
  accent = "var(--aurora-rosso)",
  color = "#fff",
  size = 48,
  word = "AURORA",
  style
}) {
  const hl = (r, i) => highlight.some(([a, b]) => a === r && b === i);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: size,
      lineHeight: 1.04,
      letterSpacing: "0.06em",
      color,
      ...style
    }
  }, Array.from({
    length: rows
  }).map((_, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      marginLeft: -r * size * 0.8
    }
  }, Array.from({
    length: 6
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: hl(r, i) ? accent : undefined
    }
  }, word)))));
}
Object.assign(__ds_scope, { WordmarkPattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WordmarkPattern.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function Card({
  children,
  tone = "dark",
  padding = 24,
  radius = "var(--radius-lg)",
  grain = false,
  style,
  onClick
}) {
  const t = {
    dark: {
      background: "var(--surface-card)",
      color: "#fff",
      border: "1px solid var(--line-subtle)"
    },
    light: {
      background: "#fff",
      color: "var(--aurora-nero)",
      border: "1px solid var(--line-ink)"
    },
    paper: {
      background: "var(--surface-paper)",
      color: "var(--aurora-nero)",
      border: "none"
    },
    viola: {
      background: "var(--aurora-viola)",
      color: "#fff",
      border: "none"
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: grain ? "aurora-grain" : undefined,
    style: {
      borderRadius: radius,
      padding,
      overflow: "hidden",
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CategoryLabel.jsx
try { (() => {
function CategoryLabel({
  category = "TALENTI",
  name,
  role,
  color = "#fff",
  align = "left",
  size = "md",
  style
}) {
  const fs = size === "lg" ? 22 : size === "sm" ? 12 : 16;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color,
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 700,
      fontSize: fs * 0.92,
      lineHeight: 1.25,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, category), name && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: fs,
      lineHeight: 1.25,
      letterSpacing: "0.04em"
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: fs,
      lineHeight: 1.25,
      letterSpacing: "0.04em",
      opacity: .8
    }
  }, role));
}
Object.assign(__ds_scope, { CategoryLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CategoryLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name = "arrow-right",
  size = 20,
  color = "currentColor",
  style
}) {
  const url = "url(https://unpkg.com/lucide-static@0.460.0/icons/" + name + ".svg)";
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      background: color,
      WebkitMask: url + " center/contain no-repeat",
      mask: url + " center/contain no-repeat",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = "top",
  style
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)"
  } : {
    bottom: "calc(100% + 8px)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%) translateY(" + (o ? 0 : 4) + "px)",
      ...pos,
      opacity: o ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out)",
      background: "#fff",
      color: "var(--aurora-nero)",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 500,
      whiteSpace: "nowrap",
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  tone = "dark",
  disabled,
  style
}) {
  const fg = tone === "dark" ? "#fff" : "var(--aurora-nero)";
  const on = tone === "dark" ? "var(--aurora-lime)" : "var(--aurora-nero)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: fg,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      fontFamily: "var(--font-text)",
      fontSize: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: "1.5px solid " + (checked ? on : fg),
      background: checked ? on : "transparent",
      display: "grid",
      placeItems: "center",
      transition: "background var(--dur-fast)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: tone === "dark" ? "var(--aurora-nero)" : "#fff"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  tone = "dark",
  error,
  disabled,
  style
}) {
  const [f, setF] = React.useState(false);
  const fg = tone === "dark" ? "#fff" : "var(--aurora-nero)";
  const bc = error ? "var(--aurora-rosso)" : f ? tone === "dark" ? "var(--aurora-lime)" : "var(--aurora-nero)" : tone === "dark" ? "rgba(255,255,255,.35)" : "rgba(25,25,25,.3)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      color: fg,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      opacity: .8
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      height: 46,
      padding: "0 18px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid " + bc,
      background: "transparent",
      color: fg,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      outline: "none",
      opacity: disabled ? .4 : 1,
      transition: "border-color var(--dur-fast)"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--aurora-rosso)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  tone = "dark",
  disabled,
  style
}) {
  const fg = tone === "dark" ? "#fff" : "var(--aurora-nero)";
  const on = tone === "dark" ? "var(--aurora-lime)" : "var(--aurora-nero)";
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: fg,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      fontFamily: "var(--font-text)",
      fontSize: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: "1.5px solid " + (checked ? on : fg),
      display: "grid",
      placeItems: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: on
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  tone = "dark",
  style
}) {
  const fg = tone === "dark" ? "#fff" : "var(--aurora-nero)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      color: fg,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      opacity: .8
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: "none",
      width: "100%",
      height: 46,
      padding: "0 44px 0 18px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid " + (tone === "dark" ? "rgba(255,255,255,.35)" : "rgba(25,25,25,.3)"),
      background: "transparent",
      color: fg,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      outline: "none",
      cursor: "pointer"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o,
    style: {
      color: "#191919"
    }
  }, o.label ?? o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: "absolute",
      right: 18,
      top: 15,
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  tone = "dark",
  disabled,
  style
}) {
  const fg = tone === "dark" ? "#fff" : "var(--aurora-nero)";
  const on = tone === "dark" ? "var(--aurora-lime)" : "var(--aurora-viola)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: fg,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      fontFamily: "var(--font-text)",
      fontSize: 14,
      ...style
    },
    onClick: () => !disabled && onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      borderRadius: 999,
      border: "1.5px solid " + (checked ? on : fg),
      background: checked ? on : "transparent",
      position: "relative",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 17,
      height: 17,
      borderRadius: "50%",
      background: checked ? "var(--aurora-nero)" : fg,
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StoryProgress.jsx
try { (() => {
function StoryProgress({
  count = 3,
  active = 0,
  progress = 1,
  color = "#fff",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      ...style
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 2,
      background: "rgba(255,255,255,.35)",
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: color,
      width: i < active ? "100%" : i === active ? progress * 100 + "%" : "0%",
      transition: "width 120ms linear"
    }
  }))));
}
Object.assign(__ds_scope, { StoryProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StoryProgress.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = "dark",
  style
}) {
  const fg = tone === "dark" ? "#fff" : "var(--aurora-nero)";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 28,
      borderBottom: "1px solid " + (tone === "dark" ? "var(--line-subtle)" : "var(--line-ink)"),
      ...style
    }
  }, items.map(it => {
    const k = it.value ?? it;
    const on = k === value;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(k),
      style: {
        background: "none",
        border: 0,
        padding: "0 0 12px",
        marginBottom: -1,
        borderBottom: "2px solid " + (on ? fg : "transparent"),
        color: fg,
        opacity: on ? 1 : .5,
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 13,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "opacity var(--dur-fast)"
      }
    }, it.label ?? it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/palette.js
try { (() => {
const AURORA_COLORS = {
  nero: 'var(--aurora-nero)',
  bianco: 'var(--aurora-bianco)',
  viola: 'var(--aurora-viola)',
  rosso: 'var(--aurora-rosso)',
  lime: 'var(--aurora-lime)',
  arancio: 'var(--aurora-arancio)',
  menta: 'var(--aurora-menta)',
  carbone: 'var(--aurora-carbone)'
};
const LIGHT_COLORS = ['lime', 'bianco', 'menta', 'arancio'];
Object.assign(__ds_scope, { AURORA_COLORS, LIGHT_COLORS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/palette.js", error: String((e && e.message) || e) }); }

// components/cards/TalentCard.jsx
try { (() => {
function TalentCard({
  photo,
  color = "viola",
  category = "TALENTI",
  name,
  role,
  surround = "var(--aurora-nero)",
  width = 300,
  height = 520,
  labelColor,
  onClick,
  style
}) {
  const c = __ds_scope.AURORA_COLORS[color] || color;
  const lc = labelColor || (color === "lime" ? "var(--aurora-nero)" : "#fff");
  const nw = Math.round(width * 0.2),
    nh = Math.round(width * 0.12),
    r = 18;
  const fillet = pos => ({
    position: "absolute",
    width: r,
    height: r,
    background: "radial-gradient(circle at " + pos + ", transparent " + (r - 0.5) + "px, " + surround + " " + r + "px)"
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "aurora-grain",
    style: {
      position: "relative",
      width,
      height,
      borderRadius: r,
      background: c,
      overflow: "hidden",
      cursor: onClick ? "pointer" : undefined,
      flex: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.OrbitRing, {
    size: width * 1.0,
    top: height * 0.04,
    left: width * 0.06,
    style: {
      zIndex: 2
    }
  }), photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name || "",
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      transform: "translateX(-50%)",
      height: "88%",
      maxWidth: "none",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: nw,
      height: nh,
      background: surround,
      borderBottomRightRadius: r,
      zIndex: 3,
      display: "flex",
      gap: 6,
      alignItems: "center",
      paddingLeft: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: nh * 0.5,
      height: nh * 0.5,
      borderRadius: "50%",
      background: c
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: nh * 0.5,
      height: nh * 0.5,
      borderRadius: "50%",
      background: c
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...fillet("100% 100%"),
      top: 0,
      left: nw,
      zIndex: 3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...fillet("100% 100%"),
      top: nh,
      left: 0,
      zIndex: 3
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.CategoryLabel, {
    category: category,
    name: name,
    role: role,
    color: lc,
    size: "sm",
    style: {
      position: "absolute",
      top: 14,
      right: 18,
      zIndex: 4,
      maxWidth: "62%"
    }
  }));
}
Object.assign(__ds_scope, { TalentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TalentCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  color = "rosso",
  size = 44,
  base = "",
  symbolTone,
  style
}) {
  const c = __ds_scope.AURORA_COLORS[color] || color;
  const tone = symbolTone || (__ds_scope.LIGHT_COLORS.includes(color) ? "black" : "white");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: src ? "url(" + src + ") center/cover" : c,
      display: "inline-grid",
      placeItems: "center",
      flex: "none",
      overflow: "hidden",
      ...style
    }
  }, !src && /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: base + "assets/logo/aurora-symbol-" + tone + ".png",
    style: {
      width: size * 0.66
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  color = "rosso",
  dot = false,
  style
}) {
  const c = __ds_scope.AURORA_COLORS[color] || color;
  const dark = __ds_scope.LIGHT_COLORS.includes(color);
  if (dot) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: c,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "var(--radius-pill)",
      background: c,
      color: dark ? "var(--aurora-nero)" : "#fff",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 11,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const BTN_SIZES = {
  sm: {
    h: 34,
    px: 16,
    fs: 11
  },
  md: {
    h: 44,
    px: 22,
    fs: 13
  },
  lg: {
    h: 56,
    px: 30,
    fs: 15
  }
};
function Button({
  children,
  variant = "solid",
  color = "nero",
  size = "md",
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = BTN_SIZES[size] || BTN_SIZES.md;
  const c = __ds_scope.AURORA_COLORS[color] || color;
  const darkText = __ds_scope.LIGHT_COLORS.includes(color);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: s.h,
    padding: "0 " + s.px + "px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: s.fs,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? .4 : 1,
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    transform: down && !disabled ? "scale(0.97)" : "none",
    width: fullWidth ? "100%" : undefined,
    border: "1.5px solid " + c,
    whiteSpace: "nowrap"
  };
  const v = variant === "solid" ? {
    background: c,
    color: darkText ? "var(--aurora-nero)" : "#fff",
    filter: hov && !disabled ? "brightness(1.08)" : "none"
  } : variant === "outline" ? {
    background: hov && !disabled ? c : "transparent",
    color: hov && !disabled ? darkText ? "var(--aurora-nero)" : "#fff" : c
  } : {
    background: "transparent",
    borderColor: "transparent",
    color: c,
    textDecoration: hov ? "underline" : "none",
    textUnderlineOffset: 4
  };
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      ...base,
      ...v,
      ...style
    }
  }, icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 32,
  color = "bianco",
  variant = "outline",
  label,
  onClick,
  disabled = false,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const c = __ds_scope.AURORA_COLORS[color] || color;
  const dark = __ds_scope.LIGHT_COLORS.includes(color);
  const filled = variant === "solid" || hov && !disabled;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: "1.5px solid " + c,
      background: filled ? c : "transparent",
      color: filled ? dark ? "var(--aurora-nero)" : "#fff" : c,
      display: "inline-grid",
      placeItems: "center",
      padding: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast)",
      ...style
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  color = "bianco",
  variant = "outline",
  onRemove,
  style
}) {
  const c = __ds_scope.AURORA_COLORS[color] || color;
  const dark = __ds_scope.LIGHT_COLORS.includes(color);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 26,
      padding: "0 12px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid " + c,
      background: variant === "solid" ? c : "transparent",
      color: variant === "solid" ? dark ? "var(--aurora-nero)" : "#fff" : c,
      fontFamily: "var(--font-text)",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      cursor: "pointer",
      opacity: .7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width = 460,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(25,25,25,.6)",
      backdropFilter: "blur(8px)",
      display: "grid",
      placeItems: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "calc(100vw - 32px)",
      background: "var(--aurora-nero)",
      color: "#fff",
      border: "1px solid var(--line-subtle)",
      borderRadius: "var(--radius-xl)",
      padding: 32,
      position: "relative",
      ...style
    }
  }, onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Chiudi",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x",
      size: 14
    }),
    size: 30,
    onClick: onClose,
    style: {
      position: "absolute",
      top: 20,
      right: 20
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 26,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: 14,
      paddingRight: 40
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--fg-2)"
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 26,
      justifyContent: "flex-end"
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  accent = "lime",
  icon,
  style
}) {
  const c = __ds_scope.AURORA_COLORS[accent] || accent;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 20px 12px 14px",
      borderRadius: "var(--radius-pill)",
      background: "var(--aurora-nero)",
      color: "#fff",
      border: "1px solid var(--line-subtle)",
      fontFamily: "var(--font-text)",
      fontSize: 14,
      boxShadow: "var(--shadow-float)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: c,
      display: "grid",
      placeItems: "center",
      color: "var(--aurora-nero)",
      flex: "none"
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/BannerOOH.jsx
try { (() => {
const {
  Logo: BLogo,
  TalentCard: BTalentCard,
  OrbitRing: BOrbit
} = window.AuroraDesignSystem_0854e8;
function BannerOOH({
  cards,
  width = 1320
}) {
  const k = width / 2576;
  const h = Math.round(width * 975 / 2576);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      height: h,
      background: "var(--aurora-nero)",
      overflow: "hidden",
      color: "#fff",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(BOrbit, {
    size: 520 * k,
    top: -260 * k,
    left: -60 * k,
    color: "rgba(255,255,255,.08)"
  }), /*#__PURE__*/React.createElement(BOrbit, {
    size: 620 * k,
    bottom: -380 * k,
    left: 380 * k,
    color: "rgba(255,255,255,.08)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 70 * k,
      top: 38 * k,
      font: "400 " + 40 * k + "px var(--font-display)",
      letterSpacing: ".06em"
    }
  }, "QUALITY OVER QUANTITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120 * k,
      top: 350 * k,
      width: 480 * k
    }
  }, /*#__PURE__*/React.createElement(BLogo, {
    variant: "vertical",
    tone: "white",
    base: "../../",
    width: 480 * k
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 70 * k,
      bottom: 52 * k,
      width: 600 * k,
      font: "400 " + 15 * k + "px/1.35 var(--font-display)",
      letterSpacing: ".03em"
    }
  }, "Aurora \xE8 la talent agency creator-centrica: supportiamo talent e costruiamo progetti con i brand, mettendo i contenuti al centro."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 722 * k,
      top: 46 * k,
      display: "flex",
      gap: 52 * k
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(BTalentCard, {
    key: i,
    width: 494 * k,
    height: 882 * k,
    color: c.color,
    category: c.category,
    name: c.name,
    role: c.role,
    photo: "../../assets/photos/" + c.photo
  }))));
}
window.BannerOOH = BannerOOH;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/BannerOOH.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/StoryAd.jsx
try { (() => {
const {
  Avatar,
  Icon,
  IconButton,
  CategoryLabel,
  StoryProgress,
  WordmarkPattern,
  OrbitRing
} = window.AuroraDesignSystem_0854e8;
const DS_ROOT = "../../";
function StoryAd({
  story,
  index,
  total,
  progress,
  onPrev,
  onNext,
  width = 390
}) {
  const h = Math.round(width * 2.17);
  const k = width / 442;
  const fg = story.ink ? "var(--aurora-nero)" : "#fff";
  return /*#__PURE__*/React.createElement("div", {
    className: "aurora-grain",
    style: {
      position: "relative",
      width,
      height: h,
      borderRadius: 40 * k,
      overflow: "hidden",
      background: story.gradient,
      color: fg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: 0,
      width: 250 * k,
      height: 30 * k,
      background: "#fff",
      borderRadius: "0 0 " + 22 * k + "px " + 22 * k + "px",
      zIndex: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "38%",
      background: "linear-gradient(180deg,rgba(25,25,25,0),#191919 70%)",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(OrbitRing, {
    size: width * 1.02,
    top: h * 0.26,
    left: -width * 0.01,
    color: story.ink ? "rgba(25,25,25,.35)" : "rgba(255,255,255,.6)",
    style: {
      zIndex: 3
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: DS_ROOT + "assets/photos/" + story.photo,
    alt: story.name,
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      transform: "translateX(-50%)",
      height: "70%",
      maxWidth: "none",
      zIndex: 2,
      filter: "grayscale(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60 * k,
      left: 42 * k,
      right: 42 * k,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(StoryProgress, {
    count: total,
    active: index,
    progress: progress,
    color: fg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14 * k,
      marginTop: 18 * k
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    color: story.avatar,
    size: 58 * k,
    base: DS_ROOT
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--font-ui)",
      fontSize: 16 * k,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, "Aurora Talent Agency"), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: .85
    }
  }, "Sponsorizzato")), /*#__PURE__*/React.createElement(Icon, {
    name: "more-vertical",
    size: 18 * k,
    color: fg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14 * k,
      marginTop: 18 * k,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6 * k,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Precedente",
    size: 26 * k,
    color: story.ink ? "nero" : "bianco",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 13 * k
    }),
    onClick: onPrev
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Successivo",
    size: 26 * k,
    color: story.ink ? "nero" : "bianco",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 13 * k
    }),
    onClick: onNext
  })), /*#__PURE__*/React.createElement(CategoryLabel, {
    category: story.category,
    name: story.name,
    role: story.role,
    color: fg,
    style: {
      fontSize: 18 * k
    },
    size: width > 360 ? "md" : "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: h * 0.08,
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(WordmarkPattern, {
    rows: 3,
    size: 46 * k,
    accent: story.accent || "#fff",
    highlight: story.hl
  })), /*#__PURE__*/React.createElement("div", {
    onClick: onPrev,
    style: {
      position: "absolute",
      left: 0,
      top: "30%",
      bottom: 0,
      width: "35%",
      zIndex: 4,
      cursor: "w-resize"
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onNext,
    style: {
      position: "absolute",
      right: 0,
      top: "30%",
      bottom: 0,
      width: "35%",
      zIndex: 4,
      cursor: "e-resize"
    }
  }));
}
function PhoneOutline({
  color,
  children,
  width = 390
}) {
  const k = width / 442;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 28 * k,
      border: "1.5px solid " + color,
      borderRadius: 62 * k,
      background: "#fff"
    }
  }, [210, 300, 390].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: -7 * k,
      top: t * k,
      width: 10 * k,
      height: (i ? 62 : 34) * k,
      border: "1.5px solid " + color,
      borderRadius: 6 * k,
      background: "#fff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -7 * k,
      top: 260 * k,
      width: 10 * k,
      height: 110 * k,
      border: "1.5px solid " + color,
      borderRadius: 6 * k,
      background: "#fff"
    }
  }), children);
}
Object.assign(window, {
  StoryAd,
  PhoneOutline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/StoryAd.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/data.js
try { (() => {
window.AURORA_STORIES = [{
  id: "s1",
  gradient: "var(--gradient-story-viola)",
  frame: "var(--aurora-rosso)",
  avatar: "rosso",
  category: "TALENTI",
  name: "Sofia Maresca",
  role: "Creator digitale",
  photo: "cutout-04.png",
  accent: "var(--aurora-rosso)",
  hl: [[0, 1]]
}, {
  id: "s2",
  gradient: "var(--gradient-story-rosso)",
  frame: "var(--aurora-nero)",
  avatar: "nero",
  category: "TALENTI",
  name: "Maria Rossi",
  role: "Creator di video",
  photo: "cutout-06.png",
  accent: null,
  hl: []
}, {
  id: "s3",
  gradient: "var(--gradient-story-rosso)",
  frame: "var(--aurora-lime)",
  avatar: "lime",
  category: "TALENTI",
  name: "Comico",
  role: "Creator di video",
  photo: "cutout-03.png",
  accent: "var(--aurora-lime)",
  hl: [[2, 1]]
}, {
  id: "s4",
  gradient: "var(--gradient-story-notte)",
  frame: "var(--aurora-menta)",
  avatar: "menta",
  category: "BRAND",
  name: "Leonardo Manera",
  role: "CEO Outsideloop",
  photo: "cutout-05.png",
  accent: "var(--aurora-menta)",
  hl: [[1, 2]]
}, {
  id: "s5",
  gradient: "var(--gradient-story-pesca)",
  frame: "var(--aurora-viola)",
  avatar: "viola",
  category: "BRAND",
  name: "Giacomo B.",
  role: "CEO Datcom",
  photo: "cutout-02.png",
  accent: "var(--aurora-viola)",
  hl: [[0, 2]],
  ink: true
}];
window.AURORA_BANNER = [{
  color: "viola",
  category: "TALENTI",
  name: "Maria Rossi",
  role: "Creator di video",
  photo: "cutout-04.png"
}, {
  color: "rosso",
  category: "BRAND",
  name: "Leonardo Manera",
  role: "CEO Outsideloop",
  photo: "cutout-05.png"
}, {
  color: "lime",
  category: "TALENTI",
  name: "Maria Rossi",
  role: "Creator di video",
  photo: "cutout-06.png"
}, {
  color: "arancio",
  category: "TALENTI",
  name: "Luca Ferri",
  role: "Creator musicale",
  photo: "cutout-10.png"
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.OrbitRing = __ds_scope.OrbitRing;

__ds_ns.WordmarkPattern = __ds_scope.WordmarkPattern;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.TalentCard = __ds_scope.TalentCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CategoryLabel = __ds_scope.CategoryLabel;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.StoryProgress = __ds_scope.StoryProgress;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AURORA_COLORS = __ds_scope.AURORA_COLORS;

__ds_ns.LIGHT_COLORS = __ds_scope.LIGHT_COLORS;

})();
