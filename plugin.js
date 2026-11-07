/* skin-studio v0.3.0 | built 2026-11-07T14:05:57.704Z */
(() => {
  // src/ui/theme.css
  var theme_default = '/* 设计令牌：白底 + 单一强调色，字号三档，圆角统一 */\n.ss-root {\n  --ss-bg: #ffffff;\n  --ss-soft: #f7f8fa;\n  --ss-chip: #f4f4f5;\n  --ss-line: #ecedef;\n  --ss-line-2: #dfe1e5;\n  --ss-ink: #1b1c1f;\n  --ss-ink-2: #4b5563;\n  --ss-muted: #9ca3af;\n  --ss-accent: #4d6bfe;\n  --ss-accent-soft: rgba(77, 107, 254, 0.08);\n  --ss-accent-line: rgba(77, 107, 254, 0.26);\n  --ss-danger: #c0392b;\n  --ss-ok: #0f9d58;\n\n  --ss-r-sm: 8px;\n  --ss-r-md: 12px;\n  --ss-r-lg: 16px;\n\n  --ss-fs-xs: 11px;\n  --ss-fs-sm: 12px;\n  --ss-fs-md: 13px;\n  --ss-fs-body: 14px;\n  --ss-fs-lg: 15px;\n\n  --ss-font: -apple-system, BlinkMacSystemFont, "PingFang SC", "HarmonyOS Sans SC",\n    "Source Han Sans SC", "Microsoft YaHei", system-ui, sans-serif;\n  --ss-mono: ui-monospace, "SF Mono", Menlo, Consolas, "Courier New", monospace;\n\n  --ss-t: 180ms ease;\n  --ss-sidebar: 300px;\n}\n';

  // src/ui/base.css
  var base_default = "/* 两栏骨架：侧边栏 + 主区；窄屏侧边栏变抽屉 */\n\n.ss-root,\n.ss-root * {\n  box-sizing: border-box;\n}\n\n.ss-root {\n  position: relative;\n  display: flex;\n  width: calc(100% + env(safe-area-inset-left) + env(safe-area-inset-right));\n  height: calc(100% + env(safe-area-inset-top) + env(safe-area-inset-bottom));\n  margin: calc(0px - env(safe-area-inset-top)) calc(0px - env(safe-area-inset-right))\n    calc(0px - env(safe-area-inset-bottom)) calc(0px - env(safe-area-inset-left));\n  overflow: hidden;\n  background: var(--ss-bg);\n  color: var(--ss-ink);\n  font-family: var(--ss-font);\n  font-size: var(--ss-fs-body);\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* 用 :where() 把重置的选择器权重降到 0，\n   否则 .ss-root button（0-1-1）会盖掉 .ss-btn--primary（0-1-0）这类组件样式 */\n:where(.ss-root) button {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  text-align: left;\n}\n\n:where(.ss-root) input,\n:where(.ss-root) textarea {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  border: 0;\n  outline: none;\n  background: none;\n}\n\n.ss-root ::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.ss-root ::-webkit-scrollbar-track {\n  background: transparent;\n}\n.ss-root ::-webkit-scrollbar-thumb {\n  background: var(--ss-line-2);\n  border-radius: 999px;\n}\n\n/* ---------------- 布局 ---------------- */\n\n.ss-app {\n  flex: 1 1 auto;\n  display: flex;\n  min-width: 0;\n  min-height: 0;\n}\n\n.ss-side {\n  flex: 0 0 auto;\n  width: var(--ss-sidebar);\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  background: var(--ss-bg);\n  border-right: 1px solid var(--ss-line);\n  padding-top: env(safe-area-inset-top);\n}\n\n.ss-main {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  background: var(--ss-bg);\n}\n\n/* 窄屏：侧边栏 = 抽屉 */\n@media (max-width: 719px) {\n  .ss-side {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 86%;\n    max-width: 340px;\n    z-index: 41;\n    border-radius: 0 var(--ss-r-lg) var(--ss-r-lg) 0;\n    transform: translateX(-100%);\n    transition: transform var(--ss-t);\n    pointer-events: none;\n  }\n  .ss-side--in {\n    transform: translateX(0);\n    pointer-events: auto;\n  }\n  .ss-side {\n    box-shadow: 0 10px 40px rgba(17, 18, 20, 0.12);\n  }\n}\n\n@media (min-width: 720px) {\n  .ss-hamburger,\n  .ss-side__close {\n    display: none !important;\n  }\n}\n\n/* ---------------- 侧边栏内部 ---------------- */\n\n.ss-side__head {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 48px;\n  padding: 0 10px 0 14px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-side__title {\n  flex: 1 1 auto;\n  font-size: var(--ss-fs-lg);\n  font-weight: 600;\n  letter-spacing: 0.01em;\n}\n.ss-side__tree {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 6px 6px 16px;\n}\n.ss-side__foot {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 6px;\n  padding: 8px 10px;\n  border-top: 1px solid var(--ss-line);\n  padding-bottom: max(8px, env(safe-area-inset-bottom));\n}\n\n/* ---------------- 顶栏 ---------------- */\n\n.ss-top {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 48px;\n  padding: 0 max(8px, env(safe-area-inset-right)) 0 max(8px, env(safe-area-inset-left));\n  padding-top: env(safe-area-inset-top);\n  box-sizing: content-box;\n  border-bottom: 1px solid var(--ss-line);\n  background: var(--ss-bg);\n}\n\n.ss-crumb {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  padding-left: 4px;\n  overflow: hidden;\n}\n.ss-crumb__main {\n  font-size: var(--ss-fs-lg);\n  font-weight: 600;\n  color: var(--ss-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-crumb__sub {\n  flex: 0 0 auto;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n  letter-spacing: 0.04em;\n}\n\n.ss-icon-btn {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--ss-r-sm);\n  color: var(--ss-ink-2);\n  transition: background-color var(--ss-t), color var(--ss-t);\n}\n.ss-icon-btn:active {\n  background: var(--ss-chip);\n  color: var(--ss-ink);\n}\n.ss-icon-btn[disabled] {\n  opacity: 0.35;\n}\n\n/* ---------------- 消息区 ---------------- */\n\n.ss-body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n/* ---------------- 输入区 ---------------- */\n\n.ss-composer {\n  flex: 0 0 auto;\n  padding: 6px max(12px, env(safe-area-inset-right)) max(8px, env(safe-area-inset-bottom))\n    max(12px, env(safe-area-inset-left));\n  background: var(--ss-bg);\n  border-top: 1px solid var(--ss-line);\n}\n\n/* ---------------- 覆层 ---------------- */\n\n.ss-mask {\n  position: absolute;\n  inset: 0;\n  background: rgba(17, 18, 20, 0.28);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--ss-t);\n  z-index: 40;\n}\n.ss-mask--in {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.ss-sheet {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 76%;\n  display: flex;\n  flex-direction: column;\n  background: var(--ss-bg);\n  border-radius: var(--ss-r-lg) var(--ss-r-lg) 0 0;\n  transform: translateY(100%);\n  transition: transform var(--ss-t);\n  z-index: 42;\n  pointer-events: none;\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.ss-sheet--in {\n  transform: translateY(0);\n  pointer-events: auto;\n}\n\n.ss-drawer-right {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 88%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  background: var(--ss-bg);\n  border-left: 1px solid var(--ss-line);\n  border-radius: var(--ss-r-lg) 0 0 var(--ss-r-lg);\n  transform: translateX(100%);\n  transition: transform var(--ss-t);\n  z-index: 42;\n  pointer-events: none;\n  padding-top: env(safe-area-inset-top);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.ss-drawer-right--in {\n  transform: translateX(0);\n  pointer-events: auto;\n}\n\n.ss-screen {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--ss-bg);\n  z-index: 50;\n  padding-top: env(safe-area-inset-top);\n  padding-bottom: env(safe-area-inset-bottom);\n  transform: translateX(100%);\n  transition: transform var(--ss-t);\n  pointer-events: none;\n  visibility: hidden;\n}\n.ss-screen--in {\n  transform: translateX(0);\n  pointer-events: auto;\n  visibility: visible;\n}\n\n.ss-sheet__head {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 16px 12px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-sheet__title {\n  flex: 1 1 auto;\n  font-size: var(--ss-fs-lg);\n  font-weight: 600;\n}\n.ss-sheet__body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 6px 0 16px;\n}\n\n/* ---------------- 通用控件 ---------------- */\n\n.ss-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 14px;\n  border-radius: var(--ss-r-sm);\n  font-size: var(--ss-fs-md);\n  font-weight: 500;\n  white-space: nowrap;\n  transition: background-color var(--ss-t), color var(--ss-t), border-color var(--ss-t);\n}\n.ss-btn--primary {\n  background: var(--ss-accent);\n  color: #fff;\n}\n.ss-btn--primary:active {\n  background: #3f5ae0;\n}\n.ss-btn--ghost {\n  border: 1px solid var(--ss-line-2);\n  color: var(--ss-ink-2);\n}\n.ss-btn--ghost:active {\n  background: var(--ss-chip);\n}\n.ss-btn--danger {\n  color: var(--ss-danger);\n}\n.ss-btn--block {\n  width: 100%;\n}\n.ss-btn[disabled] {\n  opacity: 0.45;\n}\n\n.ss-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  background: var(--ss-chip);\n  color: var(--ss-ink-2);\n  font-size: var(--ss-fs-sm);\n  white-space: nowrap;\n}\n.ss-chip--on {\n  background: var(--ss-accent-soft);\n  color: var(--ss-accent);\n}\n\n.ss-empty {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 48px 28px;\n  text-align: center;\n  color: var(--ss-muted);\n}\n.ss-empty h2 {\n  margin: 0;\n  font-size: var(--ss-fs-lg);\n  font-weight: 600;\n  color: var(--ss-ink);\n}\n.ss-empty p {\n  margin: 0;\n  font-size: var(--ss-fs-md);\n  line-height: 1.7;\n  max-width: 34em;\n}\n\n.ss-toast {\n  position: absolute;\n  left: 50%;\n  bottom: 122px;\n  transform: translate(-50%, 8px);\n  max-width: 78%;\n  padding: 9px 14px;\n  border-radius: 999px;\n  background: rgba(17, 18, 20, 0.9);\n  color: #fff;\n  font-size: 12.5px;\n  line-height: 1.45;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--ss-t), transform var(--ss-t);\n  z-index: 60;\n  text-align: center;\n}\n.ss-toast--in {\n  opacity: 1;\n  transform: translate(-50%, 0);\n}\n\n.ss-dialog {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: rgba(17, 18, 20, 0.34);\n  z-index: 70;\n  opacity: 0;\n  transition: opacity var(--ss-t);\n}\n.ss-dialog--in {\n  opacity: 1;\n}\n.ss-dialog__box {\n  width: 100%;\n  max-width: 320px;\n  background: #fff;\n  border-radius: var(--ss-r-lg);\n  padding: 18px;\n}\n.ss-dialog__title {\n  font-size: var(--ss-fs-lg);\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.ss-dialog__msg {\n  font-size: var(--ss-fs-md);\n  line-height: 1.65;\n  color: var(--ss-ink-2);\n  max-height: 42vh;\n  overflow: auto;\n  white-space: pre-wrap;\n}\n.ss-dialog__foot {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n\n.ss-lightbox {\n  position: absolute;\n  inset: 0;\n  z-index: 80;\n  background: rgba(10, 10, 12, 0.92);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.ss-lightbox img {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius: var(--ss-r-sm);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .ss-root * {\n    transition: none !important;\n    animation: none !important;\n  }\n}\n";

  // src/ui/views.css
  var views_default = '/* ---------------- 侧边栏树 ---------------- */\n\n.ss-tree__row {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  height: 34px;\n  padding: 0 10px 0 8px;\n  border-radius: var(--ss-r-sm);\n  transition: background-color var(--ss-t);\n}\n.ss-tree__row:active {\n  background: var(--ss-soft);\n}\n.ss-tree__row--on {\n  background: var(--ss-accent-soft);\n}\n.ss-tree__row--on::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 9px;\n  bottom: 9px;\n  width: 2px;\n  border-radius: 2px;\n  background: var(--ss-accent);\n}\n.ss-tree__chev {\n  flex: 0 0 auto;\n  width: 16px;\n  height: 16px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--ss-muted);\n  transform: rotate(-90deg);\n  transition: transform var(--ss-t);\n}\n.ss-tree__chev--open {\n  transform: rotate(0deg);\n}\n.ss-tree__spacer {\n  flex: 0 0 auto;\n  width: 16px;\n}\n.ss-tree__label {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-size: var(--ss-fs-md);\n  color: var(--ss-ink-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-tree__row--on .ss-tree__label {\n  color: var(--ss-ink);\n  font-weight: 500;\n}\n.ss-tree__row--scope .ss-tree__label {\n  font-weight: 600;\n  color: var(--ss-ink);\n}\n.ss-tree__row--plan .ss-tree__label {\n  color: var(--ss-ink-2);\n  font-style: normal;\n}\n.ss-tree__badge {\n  flex: 0 0 auto;\n  font-family: var(--ss-mono);\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n.ss-tree__dot {\n  flex: 0 0 auto;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--ss-accent);\n  opacity: 0.65;\n}\n\n/* ---------------- 对话流 ---------------- */\n\n.ss-thread {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 20px 16px 30px;\n}\n\n.ss-msg {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.ss-msg--me {\n  align-items: flex-end;\n}\n\n.ss-msg__bubble {\n  max-width: 86%;\n  padding: 10px 14px;\n  border-radius: var(--ss-r-md);\n  background: var(--ss-chip);\n  color: var(--ss-ink);\n  font-size: var(--ss-fs-body);\n  line-height: 1.6;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ss-msg__plain {\n  font-size: var(--ss-fs-lg);\n  line-height: 1.75;\n  color: var(--ss-ink);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ss-msg__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--ss-mono);\n  font-size: var(--ss-fs-xs);\n  letter-spacing: 0.04em;\n  color: var(--ss-muted);\n}\n\n.ss-msg__images {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.ss-msg__img {\n  width: 92px;\n  height: 92px;\n  object-fit: cover;\n  border-radius: var(--ss-r-sm);\n  border: 1px solid var(--ss-line);\n  background: var(--ss-soft);\n}\n\n.ss-msg__actions {\n  display: flex;\n  gap: 2px;\n  opacity: 0;\n  transition: opacity var(--ss-t);\n}\n.ss-msg:hover .ss-msg__actions,\n.ss-msg:focus-within .ss-msg__actions {\n  opacity: 1;\n}\n@media (hover: none) {\n  .ss-msg__actions {\n    opacity: 0.55;\n  }\n}\n\n.ss-mini-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 26px;\n  padding: 0 8px;\n  border-radius: 6px;\n  color: var(--ss-muted);\n  font-size: var(--ss-fs-xs);\n}\n.ss-mini-btn:active {\n  background: var(--ss-chip);\n  color: var(--ss-ink);\n}\n\n.ss-editor {\n  width: 100%;\n  min-height: 74px;\n  padding: 10px 12px;\n  border: 1px solid var(--ss-line-2);\n  border-radius: var(--ss-r-md);\n  font-size: var(--ss-fs-body);\n  line-height: 1.6;\n  resize: vertical;\n}\n\n/* ---------------- 多段 CSS 卡 ---------------- */\n\n.ss-card {\n  margin-top: 8px;\n  border: 1px solid var(--ss-line);\n  border-radius: var(--ss-r-md);\n  background: #fff;\n  overflow: hidden;\n}\n\n.ss-card__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  user-select: none;\n}\n.ss-card__tag {\n  font-family: var(--ss-mono);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--ss-accent);\n  background: var(--ss-accent-soft);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.ss-card__meta {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-size: var(--ss-fs-sm);\n  color: var(--ss-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-card__chev {\n  color: var(--ss-muted);\n  transition: transform var(--ss-t);\n}\n.ss-card--open .ss-card__chev {\n  transform: rotate(180deg);\n}\n\n.ss-card__rows {\n  border-top: 1px solid var(--ss-line);\n}\n.ss-card__row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-card__row:last-child {\n  border-bottom: 0;\n}\n.ss-card__id {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-family: var(--ss-mono);\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-ink-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-card__lines {\n  font-family: var(--ss-mono);\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n.ss-card__write {\n  flex: 0 0 auto;\n  height: 26px;\n  padding: 0 10px;\n  border-radius: 6px;\n  background: var(--ss-accent);\n  color: #fff;\n  font-size: var(--ss-fs-xs);\n}\n.ss-card__write--done {\n  background: transparent;\n  color: var(--ss-ok);\n  box-shadow: inset 0 0 0 1px rgba(15, 157, 88, 0.3);\n}\n\n.ss-card__code {\n  display: none;\n  max-height: 320px;\n  overflow: auto;\n  padding: 12px;\n  background: var(--ss-soft);\n  border-top: 1px solid var(--ss-line);\n  font-family: var(--ss-mono);\n  font-size: 12px;\n  line-height: 1.7;\n  color: var(--ss-ink-2);\n  white-space: pre;\n}\n.ss-card--open .ss-card__code {\n  display: block;\n}\n\n.ss-card__foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--ss-line);\n}\n.ss-card__lint {\n  margin-left: auto;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n\n/* ---------------- 输入区 ---------------- */\n\n.ss-inputbox {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  padding: 6px 6px 6px 8px;\n  background: var(--ss-soft);\n  border-radius: var(--ss-r-md);\n  transition: box-shadow var(--ss-t);\n}\n.ss-inputbox:focus-within {\n  box-shadow: inset 0 0 0 1px var(--ss-accent-line);\n}\n\n.ss-scope-badge {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 28px;\n  padding: 0 8px;\n  border-radius: var(--ss-r-sm);\n  background: #fff;\n  box-shadow: inset 0 0 0 1px var(--ss-line);\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-ink-2);\n  max-width: 42%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.ss-textarea {\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 32px;\n  max-height: 132px;\n  padding: 6px 4px;\n  font-size: var(--ss-fs-body);\n  line-height: 1.5;\n  resize: none;\n  overflow-y: auto;\n  background: transparent;\n}\n.ss-textarea::placeholder {\n  color: var(--ss-muted);\n}\n\n.ss-send {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--ss-chip);\n  color: var(--ss-muted);\n  transition: background-color var(--ss-t), color var(--ss-t);\n}\n.ss-send--on {\n  background: var(--ss-accent);\n  color: #fff;\n}\n.ss-send--stop {\n  background: var(--ss-ink);\n  color: #fff;\n}\n\n.ss-composer__tools {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 2px 6px;\n}\n.ss-composer__hint {\n  flex: 1 1 auto;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n  text-align: right;\n  padding-right: 4px;\n}\n\n.ss-attach-row {\n  display: flex;\n  gap: 6px;\n  padding: 6px 2px;\n  flex-wrap: wrap;\n}\n.ss-attach {\n  position: relative;\n}\n.ss-attach img {\n  width: 54px;\n  height: 54px;\n  object-fit: cover;\n  border-radius: var(--ss-r-sm);\n  border: 1px solid var(--ss-line);\n}\n.ss-attach button {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: rgba(17, 18, 20, 0.72);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ss-suggest {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n  padding-top: 4px;\n}\n.ss-suggest .ss-chip {\n  height: 30px;\n  padding: 0 12px;\n  background: #fff;\n  box-shadow: inset 0 0 0 1px var(--ss-line);\n}\n.ss-suggest .ss-chip:active {\n  background: var(--ss-accent-soft);\n  color: var(--ss-accent);\n}\n\n/* ---------------- 提示词面板 ---------------- */\n\n.ss-tabs {\n  display: flex;\n  gap: 16px;\n  padding: 0 16px 8px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-tab {\n  position: relative;\n  padding: 4px 0 10px;\n  font-size: var(--ss-fs-md);\n  color: var(--ss-muted);\n}\n.ss-tab--on {\n  color: var(--ss-ink);\n  font-weight: 600;\n}\n.ss-tab--on::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 6px;\n  height: 2px;\n  border-radius: 2px;\n  background: var(--ss-accent);\n}\n\n.ss-pre {\n  flex: 1 1 auto;\n  min-height: 0;\n  margin: 12px 16px 16px;\n  padding: 12px;\n  overflow: auto;\n  background: var(--ss-soft);\n  border-radius: var(--ss-r-sm);\n  font-family: var(--ss-mono);\n  font-size: 11.5px;\n  line-height: 1.7;\n  color: var(--ss-ink-2);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ss-panel-note {\n  padding: 0 16px 10px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n  line-height: 1.6;\n}\n\n.ss-branch-list {\n  border-top: 1px solid var(--ss-line);\n}\n.ss-branch-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-branch-item__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-branch-item__name {\n  font-size: var(--ss-fs-md);\n  color: var(--ss-ink);\n}\n.ss-branch-item__id {\n  font-family: var(--ss-mono);\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n\n/* ---------------- 导出面板 ---------------- */\n\n.ss-export-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-export-row__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-export-row__name {\n  font-size: var(--ss-fs-body);\n  color: var(--ss-ink);\n}\n.ss-export-row__hint {\n  margin-top: 2px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n.ss-export-row__count {\n  font-family: var(--ss-mono);\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n\n/* ---------------- 预览 ---------------- */\n\n.ss-pv {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.ss-pv__tabs {\n  display: flex;\n  gap: 18px;\n  padding: 0 16px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-pv__stage {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px;\n  background: var(--ss-soft);\n}\n.ss-device {\n  width: min(390px, 100%);\n  height: 100%;\n  max-height: 100%;\n  border: 1px solid var(--ss-line-2);\n  border-radius: 18px;\n  overflow: hidden;\n  background: #fff;\n}\n.ss-pv__frame {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n  background: #fff;\n}\n.ss-pv__foot {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 8px;\n  padding: 8px 12px;\n  border-top: 1px solid var(--ss-line);\n}\n.ss-pv__note {\n  padding: 6px 16px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-accent);\n  background: var(--ss-accent-soft);\n}\n\n/* ---------------- 素材库 / 设置 ---------------- */\n\n.ss-scroll-page {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 14px 16px 28px;\n}\n\n.ss-field {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.ss-field input {\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 36px;\n  padding: 0 10px;\n  border-radius: var(--ss-r-sm);\n  background: var(--ss-soft);\n  font-size: var(--ss-fs-md);\n}\n\n.ss-assets-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-top: 12px;\n}\n@media (min-width: 560px) {\n  .ss-assets-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.ss-asset {\n  position: relative;\n  border: 1px solid var(--ss-line);\n  border-radius: var(--ss-r-sm);\n  overflow: hidden;\n  background: var(--ss-soft);\n  aspect-ratio: 1 / 1;\n}\n.ss-asset img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.ss-asset__fallback {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n.ss-asset__name {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 12px 6px 4px;\n  font-size: 10px;\n  color: #fff;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.62));\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-asset__used {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: rgba(77, 107, 254, 0.9);\n  color: #fff;\n  font-size: 9px;\n  font-family: var(--ss-mono);\n}\n\n.ss-gen-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 10px;\n}\n.ss-gen {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: 1px solid var(--ss-line);\n  border-radius: var(--ss-r-sm);\n}\n.ss-gen__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-gen__name {\n  font-size: var(--ss-fs-md);\n  font-weight: 500;\n}\n.ss-gen__desc {\n  margin-top: 2px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n\n.ss-list {\n  border-top: 1px solid var(--ss-line);\n}\n.ss-list__row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 13px 0;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-list__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-list__label {\n  font-size: var(--ss-fs-body);\n  color: var(--ss-ink);\n}\n.ss-list__hint {\n  margin-top: 3px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n  line-height: 1.5;\n}\n.ss-list__value {\n  font-family: var(--ss-mono);\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n\n.ss-switch {\n  flex: 0 0 auto;\n  width: 38px;\n  height: 22px;\n  border-radius: 999px;\n  background: var(--ss-line-2);\n  position: relative;\n  transition: background-color var(--ss-t);\n}\n.ss-switch::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);\n  transition: transform var(--ss-t);\n}\n.ss-switch--on {\n  background: var(--ss-accent);\n}\n.ss-switch--on::after {\n  transform: translateX(16px);\n}\n\n/* ---------------- 方案切换器（侧栏顶） ---------------- */\n\n.ss-proj-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 36px;\n  padding: 0 6px 0 8px;\n  border-radius: var(--ss-r-sm);\n  transition: background-color var(--ss-t);\n}\n.ss-proj-btn:active {\n  background: var(--ss-soft);\n}\n.ss-proj-btn__main {\n  flex: 1 1 auto;\n  min-width: 0;\n  text-align: left;\n}\n.ss-proj-btn__name {\n  font-size: var(--ss-fs-md);\n  font-weight: 600;\n  color: var(--ss-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-proj-btn__meta {\n  font-size: 10px;\n  color: var(--ss-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-proj-btn__chev {\n  flex: 0 0 auto;\n  color: var(--ss-muted);\n  display: inline-flex;\n}\n\n.ss-proj-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 12px 10px 16px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-proj-item--on {\n  background: var(--ss-accent-soft);\n}\n.ss-proj-item__main {\n  flex: 1 1 auto;\n  min-width: 0;\n  text-align: left;\n}\n.ss-proj-item__name {\n  font-size: var(--ss-fs-body);\n  color: var(--ss-ink);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-proj-item__meta {\n  margin-top: 2px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n.ss-proj-item__tick {\n  color: var(--ss-accent);\n  font-size: var(--ss-fs-md);\n  padding: 0 4px;\n}\n\n/* ---------------- 面板通用 ---------------- */\n\n.ss-sheet-inner {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n}\n.ss-sheet__foot {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 8px;\n  padding: 10px 16px;\n  border-top: 1px solid var(--ss-line);\n}\n.ss-menu-row {\n  display: block;\n  width: 100%;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--ss-line);\n  text-align: left;\n  font-size: var(--ss-fs-body);\n}\n\n/* ---------------- 提示词面板 ---------------- */\n\n.ss-prompt-panel {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n}\n.ss-settings {\n  flex: 0 0 auto;\n  padding: 4px 16px 12px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-setting {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 34px;\n  padding: 6px 0;\n}\n.ss-setting__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-setting__label {\n  font-size: var(--ss-fs-md);\n  color: var(--ss-ink);\n}\n.ss-setting__hint {\n  margin-top: 2px;\n  font-size: 10px;\n  color: var(--ss-muted);\n  line-height: 1.5;\n}\n.ss-sizebadge {\n  margin-left: auto;\n  font-family: var(--ss-mono);\n  font-size: 10px;\n  color: var(--ss-muted);\n  white-space: nowrap;\n  flex: 0 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* 面板标题不换行，避免「注入的提 / 示词」这种断行 */\n.ss-sheet__title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-seg {\n  display: inline-flex;\n  flex: 0 0 auto;\n  border-radius: var(--ss-r-sm);\n  background: var(--ss-chip);\n  padding: 2px;\n}\n.ss-seg__item {\n  height: 26px;\n  padding: 0 10px;\n  border-radius: 6px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-ink-2);\n}\n.ss-seg__item--on {\n  background: #fff;\n  color: var(--ss-ink);\n  box-shadow: 0 1px 2px rgba(17, 18, 20, 0.08);\n}\n.ss-presetbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 0 2px;\n}\n.ss-presetbar__label {\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n  flex: 0 0 auto;\n}\n.ss-select {\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--ss-r-sm);\n  border: 1px solid var(--ss-line-2);\n  background: #fff;\n  font-size: var(--ss-fs-sm);\n  color: var(--ss-ink);\n  appearance: none;\n}\n.ss-panel-body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 4px 16px 20px;\n}\n.ss-panel-body .ss-pre {\n  margin: 8px 0 12px;\n  max-height: 40vh;\n}\n\n/* ---------------- 导出结果页 ---------------- */\n\n.ss-exportpage {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.ss-screen__bar {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 48px;\n  padding: 0 10px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-exportmeta {\n  flex: 0 0 auto;\n  padding: 8px 16px;\n  font-family: var(--ss-mono);\n  font-size: 10px;\n  color: var(--ss-muted);\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-exportbody {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: hidden;\n  display: flex;\n}\n.ss-codebox {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  overflow: auto;\n  background: #fff;\n}\n.ss-code__nums {\n  flex: 0 0 auto;\n  width: 34px;\n  padding: 12px 6px 12px 0;\n  text-align: right;\n  font-family: var(--ss-mono);\n  font-size: 11px;\n  line-height: 1.75;\n  color: #c7cbd1;\n  background: var(--ss-soft);\n  border-right: 1px solid var(--ss-line);\n  user-select: none;\n  white-space: pre;\n}\n.ss-code__text {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 12px;\n  font-family: var(--ss-mono);\n  font-size: 12px;\n  line-height: 1.75;\n  color: var(--ss-ink-2);\n  white-space: pre;\n  user-select: text;\n}\n.ss-history {\n  flex: 0 0 auto;\n  border-top: 1px solid var(--ss-line);\n  max-height: 30vh;\n  overflow-y: auto;\n}\n.ss-history__head {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  padding: 10px 16px;\n  font-size: var(--ss-fs-sm);\n  color: var(--ss-ink-2);\n}\n.ss-history__row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 12px 8px 16px;\n  border-top: 1px solid var(--ss-line);\n}\n.ss-history__main {\n  flex: 1 1 auto;\n  min-width: 0;\n  text-align: left;\n}\n.ss-history__name {\n  font-size: var(--ss-fs-sm);\n  color: var(--ss-ink);\n  font-family: var(--ss-mono);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-history__meta {\n  margin-top: 2px;\n  font-size: 10px;\n  color: var(--ss-muted);\n}\n\n/* ---------------- 预设编辑 ---------------- */\n\n.ss-preset-row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-preset-row__main {\n  flex: 1 1 auto;\n  min-width: 0;\n  text-align: left;\n}\n.ss-preset-row__name {\n  font-size: var(--ss-fs-md);\n  color: var(--ss-ink);\n}\n.ss-preset-row__meta {\n  margin-top: 2px;\n  font-size: var(--ss-fs-xs);\n  color: var(--ss-muted);\n}\n.ss-preset-editorbox {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ss-preset-editor {\n  width: 100%;\n  min-height: 220px;\n  padding: 10px 12px;\n  border-radius: var(--ss-r-sm);\n  background: var(--ss-soft);\n  font-size: var(--ss-fs-md);\n  line-height: 1.7;\n  resize: vertical;\n}\n.ss-field__input {\n  width: 100%;\n  height: 36px;\n  padding: 0 10px;\n  border-radius: var(--ss-r-sm);\n  background: var(--ss-soft);\n  font-size: var(--ss-fs-md);\n}\n\n/* ---------------- Markdown ---------------- */\n\n.ss-msg__plain .ss-md__p {\n  margin: 0 0 10px;\n  font-size: var(--ss-fs-lg);\n  line-height: 1.75;\n}\n.ss-msg__plain .ss-md__p:last-child {\n  margin-bottom: 0;\n}\n.ss-md__h {\n  margin: 14px 0 8px;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n.ss-md__list {\n  margin: 0 0 10px;\n  padding-left: 20px;\n  font-size: var(--ss-fs-lg);\n  line-height: 1.75;\n}\n.ss-md__li--sub {\n  margin-left: 14px;\n  list-style-type: circle;\n}\n.ss-md__quote {\n  margin: 0 0 10px;\n  padding: 2px 0 2px 10px;\n  border-left: 2px solid var(--ss-line-2);\n  color: var(--ss-ink-2);\n  font-size: var(--ss-fs-md);\n  line-height: 1.7;\n}\n.ss-md__hr {\n  height: 1px;\n  background: var(--ss-line);\n  margin: 14px 0;\n}\n.ss-md__code {\n  margin: 0 0 10px;\n  padding: 10px 12px;\n  border-radius: var(--ss-r-sm);\n  background: var(--ss-soft);\n  font-family: var(--ss-mono);\n  font-size: 12px;\n  line-height: 1.7;\n  overflow-x: auto;\n  white-space: pre;\n}\n.ss-md__inline {\n  padding: 1px 4px;\n  border-radius: 4px;\n  background: var(--ss-chip);\n  font-family: var(--ss-mono);\n  font-size: 0.92em;\n}\n.ss-md__link {\n  color: var(--ss-accent);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n';

  // src/core/storage.js
  var CHUNK = 50;
  var DEBOUNCE = 300;
  function createStorage(roche) {
    const timers = {};
    async function get(key, fallback) {
      try {
        const v = await roche.storage.get(key);
        return v === void 0 || v === null ? fallback : v;
      } catch (err) {
        console.warn("[skin-studio] storage.get 失败", key, err);
        return fallback;
      }
    }
    async function set(key, value) {
      try {
        await roche.storage.set(key, value);
        return true;
      } catch (err) {
        console.warn("[skin-studio] storage.set 失败", key, err);
        return false;
      }
    }
    function schedule(key, value) {
      if (timers[key]) clearTimeout(timers[key]);
      timers[key] = setTimeout(function() {
        delete timers[key];
        set(key, value);
      }, DEBOUNCE);
    }
    async function remove(key) {
      try {
        await roche.storage.delete(key);
      } catch (err) {
        console.warn("[skin-studio] delete 失败", key, err);
      }
    }
    function chunkKey(prefix, id, n) {
      return prefix + id + "." + n;
    }
    async function loadChunked(prefix, id) {
      const index = await get(prefix + "index." + id, []);
      const all = [];
      for (let i = 0; i < index.length; i++) {
        const part = await get(chunkKey(prefix, id, index[i]), []);
        if (Array.isArray(part)) all.push.apply(all, part);
      }
      return all;
    }
    async function saveChunked(prefix, id, list) {
      const total = Math.ceil(list.length / CHUNK);
      const old = await get(prefix + "index." + id, []);
      for (let i = 0; i < total; i++) {
        await set(chunkKey(prefix, id, i), list.slice(i * CHUNK, (i + 1) * CHUNK));
      }
      for (let i = 0; i < old.length; i++) {
        if (old[i] >= total) await remove(chunkKey(prefix, id, old[i]));
      }
      const index = [];
      for (let i = 0; i < total; i++) index.push(i);
      await set(prefix + "index." + id, index);
      return total;
    }
    async function dropChunked(prefix, id) {
      const index = await get(prefix + "index." + id, []);
      for (let i = 0; i < index.length; i++) await remove(chunkKey(prefix, id, index[i]));
      await remove(prefix + "index." + id);
    }
    function chatIndexKey(pid, nodeId) {
      return "ss.chat.index." + pid + "." + nodeId;
    }
    function chatChunkKey(pid, nodeId, n) {
      return "ss.chat." + pid + "." + nodeId + "." + n;
    }
    async function loadChat(pid, nodeId) {
      const index = await get(chatIndexKey(pid, nodeId), []);
      const all = [];
      for (let i = 0; i < index.length; i++) {
        const part = await get(chatChunkKey(pid, nodeId, i), []);
        if (Array.isArray(part)) all.push.apply(all, part);
      }
      return all;
    }
    async function saveChat(pid, nodeId, messages) {
      const list = Array.isArray(messages) ? messages : [];
      const total = Math.ceil(list.length / CHUNK);
      const old = await get(chatIndexKey(pid, nodeId), []);
      for (let i = 0; i < total; i++) {
        await set(chatChunkKey(pid, nodeId, i), list.slice(i * CHUNK, (i + 1) * CHUNK));
      }
      for (let i = 0; i < old.length; i++) {
        if (old[i] >= total) await remove(chatChunkKey(pid, nodeId, old[i]));
      }
      const index = [];
      for (let i = 0; i < total; i++) index.push(i);
      await set(chatIndexKey(pid, nodeId), index);
      return total;
    }
    async function dropChat(pid, nodeId) {
      const index = await get(chatIndexKey(pid, nodeId), []);
      for (let i = 0; i < index.length; i++) await remove(chatChunkKey(pid, nodeId, i));
      await remove(chatIndexKey(pid, nodeId));
    }
    return {
      get,
      set,
      remove,
      schedule,
      loadChat,
      saveChat,
      dropChat,
      loadChunked,
      saveChunked,
      dropChunked
    };
  }

  // src/core/schema.js
  var BRANCHES = [
    /* ---------------- 线上 22 ---------------- */
    {
      id: "online.tokens",
      scope: "online",
      name: "令牌（日夜双色）",
      hint: "定义整套 --ss-* 变量，其余分支只引用；含 prefers-color-scheme: dark 覆盖",
      forbid: [],
      skeleton: `/* 令牌：先定这里，别的分支只写 var(--ss-*) */
:root{
  --ss-paper:#f5f4f0;
  --ss-ink:#1a1e21;
  --ss-me-bg:#232a2e;
  --ss-me-ink:#f3f2ed;
  --ss-you-bg:#fbfbf8;
}
@media (prefers-color-scheme: dark){
  :root{ --ss-paper:#12151a; --ss-ink:#e8e6e1; }
}
`
    },
    {
      id: "online.bg",
      scope: "online",
      name: "聊天背景（默认关闭）",
      hint: "只能改背景图与遮罩，会覆盖宿主原生聊天背景",
      forbid: ["width", "height", "padding", "margin", "filter"],
      enabled: false,
      skeleton: `/* 默认关闭：宿主原生背景优先，打开前先确认没传过背景图 */
.chat-scroll-area{
  background-image: var(--ss-img-chat-bg, none);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
`
    },
    {
      id: "online.header",
      scope: "online",
      name: "顶栏",
      hint: "顶栏底色、细线、标题字排、头像描边",
      skeleton: `header:has(.chat-header-title){
  background-color: var(--ss-paper);
  border-bottom: 1px solid rgba(0,0,0,.08);
}
.chat-header-title{ font-size:17px; font-weight:600; color: var(--ss-ink); }
`
    },
    {
      id: "online.msgrow",
      scope: "online",
      name: "消息行 / 头像 / 间距（只读说明）",
      hint: "部位说明：头像尺寸、头像↔气泡间距、消息外距由「聊天外观」设置控制，不要写死",
      locked: true,
      forbid: ["border-radius", "width", "height", "padding", "margin", "gap"],
      skeleton: `/* 只读说明位：此处故意留空
   头像尺寸、头像与气泡间距、消息行外距都是聊天外观设置里的内联值，
   写死会让用户的快捷修改永久失效。需要微调请去聊天外观里改。 */
`
    },
    {
      id: "online.bubble-me",
      scope: "online",
      name: "我方气泡",
      hint: "只改底色/文字色/描边/字号行高；改底色必须同步 online.bubble-tail 的三角色",
      forbid: ["border-radius", "width", "max-width", "padding", "margin", "gap"],
      skeleton: `/* 该底色必须同步 online.bubble-tail 的三角色，否则尾巴脱色 */
.bubble-sent[class]{
  background-color: var(--ss-me-bg,#232a2e);
  color: var(--ss-me-ink,#f3f2ed);
}
`
    },
    {
      id: "online.bubble-you",
      scope: "online",
      name: "对方气泡",
      hint: "只改底色/文字色/描边/字号行高",
      forbid: ["border-radius", "width", "max-width", "padding", "margin", "gap"],
      skeleton: `.bubble-received[class]{
  background-color: var(--ss-you-bg,#fbfbf8);
  color: var(--ss-ink,#1a1e21);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.08);
}
`
    },
    {
      id: "online.bubble-tail",
      scope: "online",
      name: "气泡尾巴",
      hint: "只能改三角颜色（形状/尺寸/位置归宿主）",
      forbid: ["border-radius", "width", "height", "bottom", "left", "right"],
      skeleton: `/* 只接颜色：iOS 尾巴是 ::before 三角，宿主写死了 #F1F1F1 / #000 */
.bubble-tail-ios.bubble-sent[class]::before{ border-left-color: var(--ss-me-bg,#232a2e); }
.bubble-tail-ios.bubble-received[class]::before{ border-right-color: var(--ss-you-bg,#fbfbf8); }
`
    },
    {
      id: "online.quote",
      scope: "online",
      name: "引用 / 回复块",
      hint: "引用块的底色、左侧竖线、字号",
      skeleton: `.bubble-sent :is(.border-l-2,.border-l){ border-color: rgba(255,255,255,.45); }
.translation-block{ background-color: rgba(0,0,0,.04); }
`
    },
    {
      id: "online.time",
      scope: "online",
      name: "时间戳 / 发送者名 / 系统灰字",
      hint: "等宽小字、字距、灰色层级",
      skeleton: `:is(.chat-message-time,.chat-message-sender-name){
  font-family: ui-monospace,Menlo,monospace;
  font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(0,0,0,.42);
}
`
    },
    {
      id: "online.input",
      scope: "online",
      name: "输入栏",
      hint: "底栏底色、顶线、输入框、发送按钮",
      skeleton: `footer:has(.chat-input-bar){
  background-color: var(--ss-paper);
  border-top: 1px solid rgba(0,0,0,.08);
}
.chat-input-send{ border-radius: 8px; }
`
    },
    {
      id: "online.plus",
      scope: "online",
      name: "+ 面板",
      hint: "加号面板底色、格栅线、序号、标签字排",
      skeleton: `.chat-plus-panel{ counter-reset: ssplus; }
.chat-plus-action{ position: relative; counter-increment: ssplus; }
.chat-plus-action::before{
  content: counter(ssplus,decimal-leading-zero);
  position:absolute; top:4px; left:8px;
  font: 9px/1 ui-monospace,monospace; color: rgba(0,0,0,.35);
}
`
    },
    {
      id: "online.card-transfer",
      scope: "online",
      name: "卡片：转账/收款",
      hint: "金额字排、币种小字、状态词",
      skeleton: `:is(.chat-card--transfer,[data-card-type="transfer"]) .transfer-amount{
  font-family: Georgia,"Songti SC",serif;
  font-size: 28px;
  font-variant-numeric: tabular-nums;
}
`
    },
    {
      id: "online.card-media",
      scope: "online",
      name: "卡片：图片/位置",
      hint: "图片圆角与外描边、位置卡 caption",
      skeleton: `.image-card__image{ border-radius: 4px; }
`
    },
    {
      id: "online.card-voice",
      scope: "online",
      name: "卡片：语音",
      hint: "波形与时长配色",
      skeleton: `.chat-voice-wave--playing{ color: #4d6bfe; }
`
    },
    {
      id: "online.card-sticker",
      scope: "online",
      name: "卡片：表情包/贴纸",
      hint: "去框去影，不要卡片化",
      skeleton: `:is(.chat-card--sticker,[data-card-type="sticker"]){
  background: transparent; box-shadow: none; border-radius: 0;
}
`
    },
    {
      id: "online.card-forward",
      scope: "online",
      name: "卡片：聊天记录",
      hint: "目录式排版、条目分隔线",
      skeleton: `:is(.chat-card--forward-bundle,[data-card-type="forward_bundle"]){ border-radius: 4px; }
`
    },
    {
      id: "online.card-invite",
      scope: "online",
      name: "卡片：邀请类",
      hint: "羁绊/查手机/线下/一起听邀请，票券式竖栏与按钮",
      skeleton: `:is(.chat-card--drip-invite,.chat-card--phone-inspect-invite,.chat-card--listen-together){
  box-shadow: inset 3px 0 0 #4d6bfe;
}
`
    },
    {
      id: "online.card-notice",
      scope: "online",
      name: "卡片：通知类",
      hint: "视频通话/到账/羁绊通知，编者按式居中灰字",
      skeleton: `:is(.chat-card--video-call-notice,.chat-card--payment-notice,.chat-card--drip-notice){
  background: transparent; box-shadow: none;
}
`
    },
    {
      id: "online.card-money",
      scope: "online",
      name: "卡片：赠送/代付/亲属卡",
      hint: "结算卡与小票卡的状态色（只调灰与强调色）",
      skeleton: `.checkout-card{ border-radius: 4px; }
.checkout-card__money{ font-variant-numeric: tabular-nums; }
`
    },
    {
      id: "online.receipt",
      scope: "online",
      name: "小票 / 弹窗",
      hint: "小票、转账弹窗、翻译面板的纸面与按钮",
      skeleton: `.receipt-shell{ border-radius: 4px; }
.receipt-dash{ border-top: 1px dashed rgba(0,0,0,.18); }
`
    },
    {
      id: "online.translation",
      scope: "online",
      name: "翻译面板",
      hint: "翻译块底色与译文排版",
      skeleton: `.translation-toggle{ font-size: 10px; letter-spacing: .14em; }
`
    },
    {
      id: "online.overlay",
      scope: "online",
      name: "搜索 / 浮层 / 徽标",
      hint: "搜索面板、未读徽标、正在输入点",
      skeleton: `.chat-other-unread-badge{ border-radius: 2px; }
.typing-dot{ background-color: #4d6bfe; }
`
    },
    /* ---------------- 全局 7 ---------------- */
    {
      id: "global.tokens",
      scope: "global",
      name: "令牌（纸面与墨色）",
      hint: "定义全站纸面、墨色、细线与强调色，含夜间覆盖",
      skeleton: `:root{
  --ssg-paper:#ffffff;
  --ssg-ink:#1b1c1f;
  --ssg-line:#ecedef;
  --ssg-accent:#4d6bfe;
}
@media (prefers-color-scheme: dark){
  :root{ --ssg-paper:#12151a; --ssg-ink:#e8e6e1; --ssg-line:#2b3138; }
}
`
    },
    {
      id: "global.desktop",
      scope: "global",
      name: "桌面图标 / Dock",
      hint: "图标圆角、描边、标签字排（宿主用 --desktop-icon-* 变量）",
      skeleton: `:root{ --desktop-icon-radius: 8px; }
.app-label{ letter-spacing: .04em; }
.dock-icon-btn{ box-shadow: inset 0 0 0 1px var(--ssg-line); }
`
    },
    {
      id: "global.feed",
      scope: "global",
      name: "动态流 / 帖子",
      hint: "条目分隔、正文排版、操作条",
      skeleton: `.post-action-btn{ font-size: 11px; letter-spacing: .08em; }
.message-text{ line-height: 1.75; }
`
    },
    {
      id: "global.list",
      scope: "global",
      name: "列表（会话/收件箱/收藏）",
      hint: "条目分隔线、未读徽标、头像描边",
      skeleton: `.avatar-abstract{ box-shadow: inset 0 0 0 1px var(--ssg-line); }
`
    },
    {
      id: "global.nav",
      scope: "global",
      name: "底部导航",
      hint: "导航底色、选中态、文字",
      skeleton: `.bottom-nav{ border-top: 1px solid var(--ssg-line); }
`
    },
    {
      id: "global.dialog",
      scope: "global",
      name: "弹窗 / 空状态",
      hint: "弹窗纸面与按钮、空状态排版",
      skeleton: `/* 尽量用宿主已有类，别自己造结构 */
`
    },
    {
      id: "global.typo",
      scope: "global",
      name: "全站字体 / 滚动条",
      hint: "字体栈、等宽元信息、细滚动条、选中色",
      skeleton: `::-webkit-scrollbar{ width:4px; height:4px; }
::-webkit-scrollbar-thumb{ background: var(--ssg-line); border-radius: 999px; }
::selection{ background: rgba(77,107,254,.16); }
`
    },
    /* ---------------- 线下 6 ---------------- */
    {
      id: "offline.tokens",
      scope: "offline",
      name: "令牌（线下）",
      hint: "线下纸面与墨色，夜间覆盖",
      skeleton: `.offline-mode{
  --sso-paper:#ffffff;
  --sso-ink:#1b1c1f;
  --sso-line:#ecedef;
}
`
    },
    {
      id: "offline.card-tokens",
      scope: "offline",
      name: "档案卡令牌",
      hint: "直接改宿主 --card-* 令牌：字体/字号/颜色/边线",
      skeleton: `.offline-card[class]{
  --card-surface: var(--sso-paper,#fff);
  --card-title-font: Georgia,"Songti SC",serif;
  --card-title-color: var(--sso-ink,#1b1c1f);
  --card-meta-font: ui-monospace,Menlo,monospace;
  --card-body-line-height: 1.85;
}
`
    },
    {
      id: "offline.card-chrome",
      scope: "offline",
      name: "档案卡外观",
      hint: "圆角、边框、hover、卡头卡脚",
      skeleton: `.offline-card[class]{ border-radius: 4px; box-shadow: none; }
.offline-card-top{ border-bottom: 1px solid var(--sso-line); }
`
    },
    {
      id: "offline.card-body",
      scope: "offline",
      name: "档案卡正文",
      hint: "正文排版、首字下沉、引文、页脚指标",
      skeleton: `.offline-card__content-text{ line-height: 1.85; }
.offline-card__inline-quote{ border-left: 2px solid var(--sso-line); padding-left: 12px; }
`
    },
    {
      id: "offline.sidebar",
      scope: "offline",
      name: "侧栏目录",
      hint: "菜单外壳变量、开关、分组标题",
      skeleton: `.offline-mode{
  --offline-menu-bg: var(--sso-paper);
  --offline-menu-border: var(--sso-line);
}
`
    },
    {
      id: "offline.form",
      scope: "offline",
      name: "子面板表单",
      hint: "输入框、开关、按钮",
      skeleton: `.offline-mode :is(input,textarea,select){
  background-color: color-mix(in srgb, var(--sso-line) 30%, transparent);
  border-radius: 4px;
}
`
    }
  ];
  function getBranch(id) {
    for (let i = 0; i < BRANCHES.length; i++) {
      if (BRANCHES[i].id === id) return BRANCHES[i];
    }
    return null;
  }
  var ALIASES = {
    "令牌": "online.tokens",
    "tokens": "online.tokens",
    "topbar": "online.header",
    "顶栏": "online.header",
    "header": "online.header",
    "background": "online.bg",
    "背景": "online.bg",
    "我方气泡": "online.bubble-me",
    "bubble-sent": "online.bubble-me",
    "bubble-me": "online.bubble-me",
    "对方气泡": "online.bubble-you",
    "bubble-received": "online.bubble-you",
    "bubble-you": "online.bubble-you",
    "尾巴": "online.bubble-tail",
    "tail": "online.bubble-tail",
    "引用": "online.quote",
    "quote": "online.quote",
    "时间": "online.time",
    "time": "online.time",
    "输入栏": "online.input",
    "input": "online.input",
    "加号": "online.plus",
    "plus": "online.plus",
    "转账": "online.card-transfer",
    "transfer": "online.card-transfer",
    "图片": "online.card-media",
    "image": "online.card-media",
    "语音": "online.card-voice",
    "voice": "online.card-voice",
    "贴纸": "online.card-sticker",
    "sticker": "online.card-sticker",
    "聊天记录": "online.card-forward",
    "forward": "online.card-forward",
    "邀请": "online.card-invite",
    "invite": "online.card-invite",
    "通知": "online.card-notice",
    "notice": "online.card-notice",
    "代付": "online.card-money",
    "money": "online.card-money",
    "小票": "online.receipt",
    "receipt": "online.receipt",
    "翻译": "online.translation",
    "浮层": "online.overlay",
    "overlay": "online.overlay",
    "桌面": "global.desktop",
    "desktop": "global.desktop",
    "动态": "global.feed",
    "feed": "global.feed",
    "列表": "global.list",
    "list": "global.list",
    "导航": "global.nav",
    "nav": "global.nav",
    "弹窗": "global.dialog",
    "字体": "global.typo",
    "typo": "global.typo",
    "档案卡": "offline.card-chrome",
    "card": "offline.card-chrome",
    "侧栏": "offline.sidebar",
    "sidebar": "offline.sidebar",
    "表单": "offline.form",
    "form": "offline.form"
  };

  // src/core/tree.js
  var NODES = [
    { id: "root", parentId: "", type: "root", label: "美化", scope: "", order: 0 },
    { id: "plan", parentId: "root", type: "plan", label: "风格规划", scope: "", order: 1 },
    /* ---------------- 线上 ---------------- */
    { id: "online", parentId: "root", type: "scope", label: "线上", scope: "online", order: 10 },
    { id: "online.tokens", parentId: "online", type: "branch", label: "令牌", scope: "online", order: 11 },
    { id: "online.bg", parentId: "online", type: "branch", label: "聊天背景", scope: "online", order: 12 },
    { id: "online.header", parentId: "online", type: "branch", label: "顶栏", scope: "online", order: 13 },
    { id: "group.online.bubble", parentId: "online", type: "group", label: "气泡", scope: "online", order: 14 },
    { id: "online.bubble-me", parentId: "group.online.bubble", type: "branch", label: "我方气泡", scope: "online", order: 1 },
    { id: "online.bubble-you", parentId: "group.online.bubble", type: "branch", label: "对方气泡", scope: "online", order: 2 },
    { id: "online.bubble-tail", parentId: "group.online.bubble", type: "branch", label: "气泡尾巴", scope: "online", order: 3 },
    { id: "group.online.content", parentId: "online", type: "group", label: "内容", scope: "online", order: 15 },
    { id: "online.quote", parentId: "group.online.content", type: "branch", label: "引用 / 回复块", scope: "online", order: 1 },
    { id: "online.time", parentId: "group.online.content", type: "branch", label: "时间 / 发送者 / 灰字", scope: "online", order: 2 },
    { id: "online.translation", parentId: "group.online.content", type: "branch", label: "翻译", scope: "online", order: 3 },
    { id: "online.msgrow", parentId: "group.online.content", type: "branch", label: "消息行与头像（只读）", scope: "online", order: 4 },
    { id: "group.online.input", parentId: "online", type: "group", label: "输入", scope: "online", order: 16 },
    { id: "online.input", parentId: "group.online.input", type: "branch", label: "输入栏", scope: "online", order: 1 },
    { id: "online.plus", parentId: "group.online.input", type: "branch", label: "加号面板", scope: "online", order: 2 },
    { id: "group.online.card", parentId: "online", type: "group", label: "卡片", scope: "online", order: 17 },
    { id: "online.card-transfer", parentId: "group.online.card", type: "branch", label: "转账 / 收款", scope: "online", order: 1 },
    { id: "online.card-media", parentId: "group.online.card", type: "branch", label: "图片 / 位置", scope: "online", order: 2 },
    { id: "online.card-voice", parentId: "group.online.card", type: "branch", label: "语音", scope: "online", order: 3 },
    { id: "online.card-sticker", parentId: "group.online.card", type: "branch", label: "表情包 / 贴纸", scope: "online", order: 4 },
    { id: "online.card-forward", parentId: "group.online.card", type: "branch", label: "聊天记录", scope: "online", order: 5 },
    { id: "online.card-invite", parentId: "group.online.card", type: "branch", label: "邀请", scope: "online", order: 6 },
    { id: "online.card-notice", parentId: "group.online.card", type: "branch", label: "通知", scope: "online", order: 7 },
    { id: "online.card-money", parentId: "group.online.card", type: "branch", label: "赠送 / 代付 / 亲属卡", scope: "online", order: 8 },
    { id: "online.receipt", parentId: "group.online.card", type: "branch", label: "小票 / 弹窗", scope: "online", order: 9 },
    { id: "online.overlay", parentId: "online", type: "branch", label: "搜索 / 浮层 / 徽标", scope: "online", order: 18 },
    /* ---------------- 线下 ---------------- */
    { id: "offline", parentId: "root", type: "scope", label: "线下", scope: "offline", order: 20 },
    { id: "offline.tokens", parentId: "offline", type: "branch", label: "令牌", scope: "offline", order: 1 },
    { id: "offline.card-tokens", parentId: "offline", type: "branch", label: "档案卡令牌", scope: "offline", order: 2 },
    { id: "offline.card-chrome", parentId: "offline", type: "branch", label: "档案卡外观", scope: "offline", order: 3 },
    { id: "offline.card-body", parentId: "offline", type: "branch", label: "档案卡正文", scope: "offline", order: 4 },
    { id: "offline.sidebar", parentId: "offline", type: "branch", label: "侧栏目录", scope: "offline", order: 5 },
    { id: "offline.form", parentId: "offline", type: "branch", label: "子面板表单", scope: "offline", order: 6 },
    /* ---------------- 全局 ---------------- */
    { id: "global", parentId: "root", type: "scope", label: "全局", scope: "global", order: 30 },
    { id: "global.tokens", parentId: "global", type: "branch", label: "令牌", scope: "global", order: 1 },
    { id: "global.desktop", parentId: "global", type: "branch", label: "桌面 / Dock", scope: "global", order: 2 },
    { id: "global.feed", parentId: "global", type: "branch", label: "动态流", scope: "global", order: 3 },
    { id: "global.list", parentId: "global", type: "branch", label: "列表", scope: "global", order: 4 },
    { id: "global.nav", parentId: "global", type: "branch", label: "底部导航", scope: "global", order: 5 },
    { id: "global.dialog", parentId: "global", type: "branch", label: "弹窗 / 空状态", scope: "global", order: 6 },
    { id: "global.typo", parentId: "global", type: "branch", label: "字体 / 滚动条", scope: "global", order: 7 }
  ];
  var BY_ID = {};
  NODES.forEach(function(n) {
    BY_ID[n.id] = n;
  });
  var CHILDREN = {};
  NODES.forEach(function(n) {
    const p = n.parentId || "";
    CHILDREN[p] = CHILDREN[p] || [];
    CHILDREN[p].push(n);
  });
  Object.keys(CHILDREN).forEach(function(k) {
    CHILDREN[k].sort(function(a, b) {
      return a.order - b.order;
    });
  });
  function getNode(id) {
    return BY_ID[id] || null;
  }
  function childrenOf(id) {
    return (CHILDREN[id || ""] || []).slice();
  }
  function pathOf(id) {
    const out = [];
    let cur = getNode(id);
    let guard = 0;
    while (cur && guard < 20) {
      out.unshift(cur);
      cur = cur.parentId ? getNode(cur.parentId) : null;
      guard += 1;
    }
    return out;
  }
  function breadcrumb(id) {
    const path = pathOf(id).filter(function(n) {
      return n.type !== "root";
    });
    return path.map(function(n) {
      return n.label;
    }).join(" · ");
  }
  function branchIdsOf(id) {
    const node = getNode(id);
    if (!node) return [];
    if (node.type === "branch") return [node.id];
    if (node.type === "root" || node.type === "plan") return [];
    const out = [];
    (function walk(nid) {
      childrenOf(nid).forEach(function(child) {
        if (child.type === "branch") out.push(child.id);
        else walk(child.id);
      });
    })(id);
    return out;
  }
  function scopeOf(id) {
    const node = getNode(id);
    if (node && node.scope) return node.scope;
    if (id && id.indexOf("online") === 0) return "online";
    if (id && id.indexOf("offline") === 0) return "offline";
    if (id && id.indexOf("global") === 0) return "global";
    return "";
  }
  function branchNodesOfScope(scope) {
    return NODES.filter(function(n) {
      return n.type === "branch" && n.scope === scope;
    });
  }
  function labelOf(id) {
    const n = getNode(id);
    return n ? n.label : id;
  }
  var SCOPE_LABEL = { online: "线上", offline: "线下", global: "全局" };

  // src/core/branches.js
  function emptyBranches() {
    const out = {};
    BRANCHES.forEach(function(def) {
      out[def.id] = {
        css: "",
        mode: "REPLACE",
        enabled: def.enabled !== false,
        locked: !!def.locked,
        updatedAt: 0,
        source: "skeleton",
        history: []
      };
    });
    return out;
  }
  function normalize(branches) {
    const base = emptyBranches();
    const out = {};
    Object.keys(base).forEach(function(id) {
      const cur = branches && branches[id];
      out[id] = Object.assign({}, base[id], cur || {});
      if (!Array.isArray(out[id].history)) out[id].history = [];
    });
    return out;
  }
  function lineCount(css) {
    if (!css || !css.trim()) return 0;
    return css.split("\n").filter(function(l) {
      return l.trim();
    }).length;
  }
  function pushHistory(branch, prevCss, prevMode) {
    branch.history = branch.history || [];
    branch.history.unshift({ css: prevCss, mode: prevMode, at: Date.now() });
    if (branch.history.length > 5) branch.history.length = 5;
  }
  function write(branches, id, css, mode, source) {
    const branch = branches[id];
    if (!branch || branch.locked) return false;
    pushHistory(branch, branch.css, branch.mode);
    const next = mode === "APPEND" && branch.css.trim() ? branch.css.replace(/\s*$/, "\n\n") + css : css;
    branch.css = next;
    branch.mode = mode || "REPLACE";
    branch.source = source || "ai";
    branch.updatedAt = Date.now();
    return true;
  }
  function undo(branches, id) {
    const branch = branches[id];
    if (!branch || !branch.history || !branch.history.length) return false;
    const prev = branch.history.shift();
    branch.css = prev.css;
    branch.mode = prev.mode || "REPLACE";
    branch.updatedAt = Date.now();
    return true;
  }
  function reset(branches, id) {
    const branch = branches[id];
    if (!branch || branch.locked) return false;
    pushHistory(branch, branch.css, branch.mode);
    branch.css = "";
    branch.source = "skeleton";
    branch.updatedAt = Date.now();
    return true;
  }
  function toggle(branches, id, enabled) {
    const branch = branches[id];
    if (!branch || branch.locked) return false;
    branch.enabled = !!enabled;
    branch.updatedAt = Date.now();
    return true;
  }
  function activeOfScope(branches, scope) {
    return branchNodesOfScope(scope).map(function(node) {
      const data = branches[node.id];
      if (!data || !data.enabled) return null;
      return { id: node.id, node, def: getBranch(node.id) || { id: node.id, name: node.label }, data };
    }).filter(Boolean);
  }
  function writtenCount(branches, scope) {
    const list = scope ? branchNodesOfScope(scope) : BRANCHES;
    let n = 0;
    list.forEach(function(def) {
      const b = branches[def.id];
      if (b && b.enabled && b.css && b.css.trim()) n += 1;
    });
    return n;
  }
  function totalCount(scope) {
    return (scope ? branchNodesOfScope(scope) : BRANCHES).length;
  }

  // src/core/workspaces.js
  var DEFAULT_PROJECT_ID = "p_default";
  var DEFAULT_PROJECT_NAME = "我的美化";
  function uid(prefix) {
    const rnd = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID().slice(0, 8) : Math.random().toString(36).slice(2, 10);
    return (prefix || "id") + "_" + rnd;
  }
  function defaultPromptCfg() {
    return {
      injectHooks: false,
      injectExisting: false,
      refMode: "condensed",
      presetId: ""
    };
  }
  function normalizePromptCfg(cfg) {
    const base = defaultPromptCfg();
    const out = Object.assign({}, base, cfg || {});
    if (["off", "condensed", "full"].indexOf(out.refMode) < 0) out.refMode = "condensed";
    out.injectHooks = !!out.injectHooks;
    out.injectExisting = !!out.injectExisting;
    out.presetId = typeof out.presetId === "string" ? out.presetId : "";
    return out;
  }
  function projectMeta(project) {
    const branches = project.branches || {};
    let written = 0;
    Object.keys(branches).forEach(function(id) {
      const b = branches[id];
      if (b && b.css && b.css.trim()) written += 1;
    });
    return {
      id: project.id,
      name: project.name,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      written
    };
  }
  function newProject(name, opts) {
    const now = Date.now();
    return {
      id: opts && opts.id || uid("p"),
      name: String(name || "未命名方案").trim() || "未命名方案",
      branches: emptyBranches(),
      nodes: {},
      promptCfg: {},
      activeNodeId: "plan",
      createdAt: now,
      updatedAt: now
    };
  }
  function normalizeProject(raw) {
    if (!raw || typeof raw !== "object") return null;
    const fallback = newProject(raw.name || DEFAULT_PROJECT_NAME, { id: raw.id });
    const project = Object.assign({}, fallback, raw);
    project.id = raw.id || fallback.id;
    project.name = raw.name || fallback.name;
    project.branches = normalize(raw.branches);
    project.nodes = raw.nodes && typeof raw.nodes === "object" ? raw.nodes : {};
    project.promptCfg = raw.promptCfg && typeof raw.promptCfg === "object" ? raw.promptCfg : {};
    project.activeNodeId = raw.activeNodeId || "plan";
    project.createdAt = raw.createdAt || fallback.createdAt;
    project.updatedAt = raw.updatedAt || fallback.updatedAt;
    return project;
  }
  function cfgOf(project, nodeId) {
    if (!project) return defaultPromptCfg();
    return normalizePromptCfg(project.promptCfg[nodeId]);
  }
  function setCfg(project, nodeId, patch) {
    if (!project) return null;
    const next = normalizePromptCfg(Object.assign({}, cfgOf(project, nodeId), patch || {}));
    project.promptCfg[nodeId] = next;
    project.updatedAt = Date.now();
    return next;
  }
  function duplicateProject(project, name) {
    const now = Date.now();
    return {
      id: uid("p"),
      name: name || project.name + " 副本",
      branches: JSON.parse(JSON.stringify(project.branches || {})),
      nodes: JSON.parse(JSON.stringify(project.nodes || {})),
      promptCfg: JSON.parse(JSON.stringify(project.promptCfg || {})),
      activeNodeId: project.activeNodeId || "plan",
      createdAt: now,
      updatedAt: now
    };
  }
  var EXPORT_LIMIT = 10;
  var EXPORT_CSS_LIMIT = 120 * 1024;
  function pushExportRecord(list, record) {
    const item = Object.assign({}, record);
    if (item.css && item.css.length > EXPORT_CSS_LIMIT) {
      item.truncated = true;
      item.css = item.css.slice(0, EXPORT_CSS_LIMIT) + "\n\n/* …超出 120KB，已截断，请重新导出完整文件… */";
    }
    const next = [item].concat(list || []);
    return next.slice(0, EXPORT_LIMIT);
  }

  // src/core/presets.js
  var BUILTIN = [
    {
      id: "preset_magazine",
      name: "杂志风（细线衬线）",
      scope: "*",
      builtin: true,
      text: [
        "整体取向：杂志版面，不靠装饰靠排版。",
        "只用 1px 细线分区，禁止阴影堆叠、渐变、玻璃模糊。",
        "标题用衬线（Songti / Source Han Serif），元信息（时间、序号、金额单位）用等宽小字 + 大写 + 字距 0.14em。",
        "配色只允许一个彩度（冷青灰），其余全部靠灰阶层次；圆角 ≤ 4px（气泡除外，气泡形状归宿主设置）。",
        "留白优先：宁可少画一个框，也不要多一条边。"
      ].join("\n")
    },
    {
      id: "preset_paper",
      name: "纸感低饱和",
      scope: "*",
      builtin: true,
      text: [
        "整体取向：米灰纸面 + 冷调墨色，像印在纸上的界面。",
        "底色 #F5F4F0 一类暖灰，文字 #1A1E21 一类墨色；卡片面比底纸略亮一档即可，不要纯白刺眼。",
        "分页与分区用 1px 线（#DEDDD6 / 夜间 #2B3138），不用卡片投影。",
        "正文行高 1.75，字号 15px；小字 11px 等宽用于标注。",
        "夜间反相：纸变墨（#12151A），墨变纸（#E8E6E1），不要简单反色导致灰阶塌陷。"
      ].join("\n")
    },
    {
      id: "preset_night",
      name: "暗夜静默",
      scope: "*",
      builtin: true,
      text: [
        "整体取向：夜间阅读，低亮度、低对比、不刺眼。",
        "底色 #12151A，卡片 #181C22，文字 #E8E6E1，次级文字不超过 #C3C7CB。",
        "强调色只用一处：选中态或状态点，饱和度压到最低。",
        "禁止纯黑纯白对撞；禁止发光描边；禁止大面积高饱和色块。"
      ].join("\n")
    },
    {
      id: "preset_minimal",
      name: "极简克制",
      scope: "*",
      builtin: true,
      text: [
        "整体取向：少即是多，能删就删。",
        "只保留两类元素：文字与 1px 线。图标尺寸、点击区、布局一律不动。",
        "颜色只允许黑、白、两档灰，加一个低饱和强调色。",
        "不要给按钮加底色，不要给卡片加边框，靠留白分组。"
      ].join("\n")
    }
  ];
  function builtinPresets() {
    return BUILTIN.map(function(p) {
      return Object.assign({}, p);
    });
  }
  function allPresets(custom) {
    const list = builtinPresets();
    (custom || []).forEach(function(p) {
      if (!p || !p.id) return;
      list.push(Object.assign({ scope: "*" }, p, { builtin: false }));
    });
    return list;
  }
  function presetsForScope(custom, scope) {
    return allPresets(custom).filter(function(p) {
      return !p.scope || p.scope === "*" || p.scope === scope;
    });
  }
  function createPreset(name, text, scope) {
    return {
      id: uid("preset"),
      name: String(name || "未命名预设").trim() || "未命名预设",
      scope: scope || "*",
      text: String(text || ""),
      builtin: false,
      createdAt: Date.now()
    };
  }
  function clonePreset(preset) {
    return createPreset((preset.name || "预设") + " 副本", preset.text, preset.scope || "*");
  }
  function updatePreset(custom, id, patch) {
    const list = custom || [];
    const idx = list.findIndex(function(p) {
      return p.id === id;
    });
    if (idx < 0) return false;
    list[idx] = Object.assign({}, list[idx], patch || {}, { builtin: false });
    return true;
  }
  function removePreset(custom, id) {
    const list = custom || [];
    const idx = list.findIndex(function(p) {
      return p.id === id;
    });
    if (idx < 0) return false;
    list.splice(idx, 1);
    return true;
  }
  function isBuiltin(id) {
    return BUILTIN.some(function(p) {
      return p.id === id;
    });
  }

  // src/core/hooks.js
  var HOOKS = {
    online: [
      ".chat-viewport-root",
      ".chat-scroll-area",
      ".chat-glass-surface",
      ".chat-header",
      ".chat-header-title",
      ".chat-header-avatar",
      ".chat-header-subtitle",
      ".chat-header-online",
      ".chat-header-life-status",
      ".chat-header-status-dot",
      ".chat-header-button",
      ".chat-header-button__icon",
      ".chat-header-inspection-badge",
      ".chat-message",
      ".chat-message-row",
      ".chat-message-avatar",
      ".chat-message-body",
      ".chat-message-content",
      ".chat-message-sender-name",
      ".chat-message-time",
      ".message-text",
      ".bubble-sent",
      ".bubble-received",
      ".bubble-tail-ios",
      ".bubble-tail-none",
      ".bubble-tail-rounded",
      ".chat-input-bar",
      ".chat-input-field",
      ".chat-input-textarea",
      ".chat-input-plus",
      ".chat-input-heart",
      ".chat-input-send",
      ".chat-input-send-icon",
      ".chat-input-inner-voice-button",
      ".chat-plus-panel",
      ".chat-plus-action",
      ".chat-plus-action__icon",
      ".chat-plus-action__label",
      ".chat-plus-action__symbol",
      ".chat-card",
      ".chat-card--transfer",
      ".chat-card--image",
      ".chat-card--sticker",
      ".chat-card--voice",
      ".chat-card--location",
      ".chat-card--forward-bundle",
      ".chat-card--video-call-notice",
      ".chat-card--payment-notice",
      ".chat-card--drip-invite",
      ".chat-card--drip-notice",
      ".chat-card--phone-inspect-invite",
      ".chat-card--phone-inspect-notice",
      ".chat-card--offline-invite",
      ".chat-card--listen-together",
      ".chat-card--poll",
      ".chat-card--vote",
      ".chat-card--html",
      ".chat-card--regex",
      ".chat-card--spoiler",
      ".chat-card--family-card",
      ".chat-card--checkout",
      ".chat-card--peer-pay-notice",
      ".checkout-card",
      ".checkout-card__icon",
      ".checkout-card__title",
      ".checkout-card__subtitle",
      ".checkout-card__money",
      ".checkout-card__link",
      ".checkout-card__action-button--pay",
      ".checkout-card__action-button--reject",
      ".peer-pay-notice",
      ".peer-pay-notice__icon",
      ".peer-pay-notice__money",
      ".receipt-shell",
      ".receipt-kicker",
      ".receipt-title",
      ".receipt-money",
      ".receipt-total",
      ".receipt-dash",
      ".receipt-stamp",
      ".receipt-code-text",
      ".receipt-items",
      ".receipt-totals",
      ".receipt-grand-total",
      ".chat-panel-frosted",
      ".chat-search-panel",
      ".chat-search-field",
      ".chat-search-header-row",
      ".chat-search-icon-button",
      ".chat-other-unread-badge",
      ".typing-dot",
      ".chat-voice-wave--playing",
      ".image-card__image",
      ".image-card--ready",
      ".translation-panel",
      ".translation-card",
      ".translation-block",
      ".translation-toggle",
      ".bubble-translation",
      ".transfer-amount",
      ".transfer-currency",
      ".transfer-note",
      ".transfer-message",
      ".transfer-confirm",
      ".transfer-cancel",
      ".transfer-modal",
      ".transfer-sheet",
      ".offline-invite__button",
      ".offline-invite__button--accept",
      ".offline-invite__button--reject"
    ],
    global: [
      ".app-icon-bg",
      ".app-icon-bg--material",
      ".app-label",
      ".dock-icon-btn",
      ".dock-icon-btn--material",
      ".square-app-btn",
      ".post-action-btn",
      ".thread-line",
      ".pinned-indicator",
      ".avatar-abstract",
      ".bokeh-effect",
      ".no-scrollbar",
      ".custom-scrollbar",
      ".message-text",
      ".native-feed-spoiler-card",
      ".native-feed-spoiler-stack",
      ".native-feed-spoiler-icon",
      ".native-feed-spoiler-photo"
    ],
    offline: [
      ".offline-mode",
      ".offline-mode__scroll",
      ".offline-card",
      ".offline-card-layer",
      ".offline-card-top",
      ".offline-card-body",
      ".offline-card-bottom",
      ".offline-card__header",
      ".offline-card__header-main",
      ".offline-card__avatar-shell",
      ".offline-card__avatar-frame",
      ".offline-card__avatar-image",
      ".offline-card__avatar-fallback",
      ".offline-card__title-row",
      ".offline-card__sender",
      ".offline-card__meta-row",
      ".offline-card__time",
      ".offline-card__meta-dot",
      ".offline-card__floor",
      ".offline-card__body",
      ".offline-card__content",
      ".offline-card__content-text",
      ".offline-card__thought",
      ".offline-card__text-flow",
      ".offline-card__text-divider",
      ".offline-card__inline-code",
      ".offline-card__inline-quote",
      ".offline-card__inline-emphasis",
      ".offline-card__inline-delete",
      ".offline-card__html-card",
      ".offline-card__regex-fragment",
      ".offline-card__footer",
      ".offline-card__footer-left",
      ".offline-card__footer-right",
      ".offline-card__footer-line",
      ".offline-card__footer-label",
      ".offline-card__footer-metric",
      ".offline-card__footer-status-dot",
      ".offline-card__continue-btn",
      ".offline-card__actions",
      ".offline-card__action-btn",
      ".offline-card__action-btn--edit",
      ".offline-card__action-btn--delete",
      ".offline-card__action-icon",
      ".offline-card__textarea",
      ".offline-card__editor-actions",
      ".offline-card__editor-btn",
      ".offline-card__editor-btn--cancel",
      ".offline-card__editor-btn--save",
      ".noir-toggle",
      ".noir-toggle-bg",
      ".parsed-content",
      ".html-content-wrapper"
    ]
  };
  var LEGACY = [
    ".profile-header",
    ".profile-section",
    ".profile-handle",
    ".profile-avatar",
    ".profile-nav",
    ".profile-action-btn",
    ".post-item",
    ".post-container",
    ".post-author-name",
    ".post-timestamp",
    ".post-body",
    ".post-actions",
    ".post-action-unit",
    ".post-avatar-small",
    ".conversation-item",
    ".conversation-avatar",
    ".inbox-header",
    ".inbox-title",
    ".contact-item",
    ".contact-avatar",
    ".favorite-card",
    ".bottom-nav",
    ".tab-item",
    ".create-group-entry",
    ".empty-state"
  ];
  var HOST_VARS = [
    "--desktop-icon-size",
    "--desktop-icon-radius",
    "--desktop-icon-opacity",
    "--card-surface",
    "--card-border",
    "--card-shadow",
    "--card-shadow-hover",
    "--card-title-font",
    "--card-title-size",
    "--card-title-weight",
    "--card-title-color",
    "--card-meta-font",
    "--card-meta-size",
    "--card-meta-weight",
    "--card-meta-color",
    "--card-body-font",
    "--card-body-size",
    "--card-body-weight",
    "--card-body-line-height",
    "--card-body-letter-spacing",
    "--card-body-color",
    "--card-floor-font",
    "--card-floor-size",
    "--card-floor-color",
    "--card-footer-font",
    "--card-footer-size",
    "--card-footer-color",
    "--card-footer-metric-size",
    "--card-action-icon-size",
    "--card-action-color",
    "--card-action-hover",
    "--card-danger-hover",
    "--card-quote-font",
    "--card-quote-color",
    "--offline-menu-width",
    "--offline-menu-bg",
    "--offline-menu-border",
    "--offline-menu-shadow",
    "--offline-menu-title-color"
  ];
  function allHooks() {
    return HOOKS.online.concat(HOOKS.global, HOOKS.offline);
  }
  function distance(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = [];
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(
          prev[j] + 1,
          cur[j - 1] + 1,
          prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
      prev = cur;
    }
    return prev[n];
  }
  function closestHook(name) {
    const clean = String(name || "").replace(/^\./, "");
    if (!clean) return "";
    const pool = allHooks().map(function(h) {
      return h.slice(1);
    });
    let best = "";
    let bestScore = 0;
    for (let i = 0; i < pool.length; i++) {
      const d = distance(clean, pool[i]);
      const score = 1 - d / Math.max(clean.length, pool[i].length);
      if (score > bestScore) {
        bestScore = score;
        best = pool[i];
      }
    }
    return bestScore >= 0.45 ? "." + best : "";
  }
  function isKnownHook(name) {
    const dot = "." + String(name || "").replace(/^\./, "");
    return allHooks().indexOf(dot) > -1 || LEGACY.indexOf(dot) > -1 || HOST_VARS.indexOf(dot) > -1;
  }
  function hooksForScope(scope) {
    return (HOOKS[scope] || HOOKS.online).join(", ");
  }

  // src/core/reference.generated.js
  var SECTION_BRANCHES = {
    "10": [
      "online.bg",
      "online.header",
      "global.desktop"
    ],
    "12": [
      "online.input"
    ],
    "13": [
      "online.quote",
      "online.plus",
      "online.card-transfer",
      "online.card-media",
      "online.card-voice",
      "online.card-sticker",
      "online.card-forward",
      "online.card-invite",
      "online.card-notice",
      "online.card-money",
      "online.receipt",
      "online.translation",
      "global.dialog"
    ],
    "14": [
      "online.tokens",
      "online.msgrow",
      "online.bubble-me",
      "online.bubble-you",
      "online.plus",
      "online.card-transfer",
      "online.card-media",
      "online.card-voice",
      "online.card-sticker",
      "online.card-forward",
      "online.card-invite",
      "online.card-notice",
      "online.card-money",
      "online.receipt",
      "online.overlay"
    ],
    "15": [
      "online.time",
      "online.overlay",
      "global.typo",
      "offline.sidebar"
    ],
    "07": [
      "online.tokens",
      "online.bg",
      "online.header",
      "online.bubble-me",
      "online.bubble-you",
      "online.bubble-tail",
      "online.quote"
    ],
    "15.5": [
      "online.time"
    ],
    "09": [
      "online.input",
      "offline.form"
    ],
    "15.6": [
      "online.overlay"
    ],
    "01": [
      "global.tokens",
      "global.feed",
      "global.typo"
    ],
    "02": [
      "global.tokens",
      "global.nav"
    ],
    "05": [
      "global.feed",
      "global.list",
      "global.dialog"
    ],
    "03": [
      "global.list"
    ],
    "04": [
      "global.list"
    ],
    "08": [
      "offline.tokens",
      "offline.card-tokens",
      "offline.card-chrome",
      "offline.card-body"
    ],
    "06": [
      "offline.sidebar"
    ],
    "15.1": [
      "offline.sidebar"
    ],
    "15.2": [
      "offline.sidebar"
    ],
    "15.3": [
      "offline.sidebar",
      "offline.form"
    ],
    "15.4": [
      "offline.sidebar",
      "offline.form"
    ]
  };
  var SECTIONS = {
    "10": { title: "Chat Glass / Floating Preset / App 图标 / 头像隐藏", text: '.chat-glass-surface {\n    background: rgba(255, 255, 255, 0.95);\n    border-top: 1px solid #f3f4f6;\n}\n.floating-preset-button {\n  touch-action: none;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 52px;\n  padding: 10px 14px;\n  border: 1px solid rgba(228, 228, 231, 0.7);\n  border-radius: 9999px;\n  background: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(24px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.10);\n  transition: all 0.2s ease;\n}\n.floating-preset-button.is-open {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.14);\n}\n.floating-preset-button img {\n  max-width: 160px;\n  max-height: 92px;\n  object-fit: contain;\n  filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.22));\n}\n.square-app-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.app-icon-bg {\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s ease;\n}\n.app-label {\n  font-size: 10px;\n  font-weight: 600;\n  margin-top: 6px;\n  color: #888;\n  letter-spacing: 0.02em;\n}\n.dock-icon-btn {\n  width: 64px;\n  height: 64px;\n  background: #fff;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s ease;\n  flex-shrink: 0;\n}\n\nmain.chat-scroll-area .chat-message-row [class*="min-w-[220px]"][class*="border-black"][class*="text-white"] {\n  border-radius: 28px !important;\n  background: linear-gradient(180deg, #111111 0%, #000000 100%) !important;\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22) !important;\n}\n.app-label {\n    font-size: 10px;\n    font-weight: 600;\n    margin-top: 6px;\n    color: #888;\n    letter-spacing: 0.02em;\n}\n.offline-mode button[title="Re-roll"] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  border: 1px solid #e4e4e7;\n  background: #fff;\n  color: #a1a1aa;\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\n  transition: all .2s ease;\n}\n.offline-mode button[title="Re-roll"]:hover {\n  border-color: #d4d4d8;\n  background: #fafafa;\n  color: #000;\n}\n.offline-mode button[title="Re-roll"]:active {\n  transform: scale(.95);\n}\n.offline-mode button[title="Re-roll"] svg {\n  width: 20px;\n  height: 20px;\n}\n.bubble-sent {\n  background: #222 !important;\n  color: #fff !important;\n}\n.bubble-received {\n  background: #f3eee6 !important;\n  color: #2a2118 !important;\n}\n.bubble-tail-ios.bubble-sent::before {\n  border-left-color: #222 !important;\n}\n.bubble-tail-ios.bubble-received::before {\n  border-right-color: #f3eee6 !important;\n}' },
    "11": { title: "旧版兼容：功能卡通用覆盖 / 高风险结构选择器", text: 'main.chat-scroll-area .chat-message-row :is(\n  [class*="w-[240px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="w-[260px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="min-w-[220px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]\n) {\n  width: 320px !important;\n  min-width: 320px !important;\n  max-width: 320px !important;\n  border-radius: 28px !important;\n  padding: 18px !important;\n  background: linear-gradient(180deg, #ffffff 0%, #f7f7fa 100%) !important;\n  border: 1px solid #e9e9ef !important;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important;\n}\nmain.chat-scroll-area .chat-message-row :is(\n  [class*="w-[240px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="w-[260px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="min-w-[220px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]\n) .font-bold {\n  font-size: 14px !important;\n}\nmain.chat-scroll-area .chat-message-row [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"] {\n  width: 340px !important;\n  min-width: 340px !important;\n  max-width: 340px !important;\n  border-radius: 30px !important;\n}\nmain.chat-scroll-area .chat-message-row [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"] > div:first-child {\n  height: 170px !important;\n}\nmain.chat-scroll-area .chat-message-row [class*="w-[260px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"] {\n  width: 340px !important;\n  min-width: 340px !important;\n  max-width: 340px !important;\n}\nmain.chat-scroll-area .chat-message-row [class*="w-[240px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"] {\n  width: 300px !important;\n  min-width: 300px !important;\n  max-width: 300px !important;\n}\nmain.chat-scroll-area .chat-message-row [class*="w-[240px]"][class*="h-[320px]"][class*="rounded-[24px]"] {\n  width: 280px !important;\n  height: 380px !important;\n  border-radius: 32px !important;\n}\nmain.chat-scroll-area .chat-message-row [class*="w-[240px]"][class*="h-[320px]"][class*="rounded-[24px]"] .bokeh-effect {\n  filter: blur(14px) saturate(1.08) !important;\n}\nmain.chat-scroll-area .chat-message-row [class*="w-[200px]"][class*="h-[280px]"][class*="bg-zinc-50"][class*="rounded-2xl"] {\n  width: 260px !important;\n  height: 340px !important;\n  border-radius: 28px !important;\n}\nmain.chat-scroll-area .chat-message-row img[class*="object-cover"][class*="bg-zinc-50"] {\n  width: 280px !important;\n  max-width: 280px !important;\n  border-radius: 24px !important;\n}\nmain.chat-scroll-area .chat-message-row div:has(> .voice-transcript-area) {\n  min-width: 190px !important;\n  border-radius: 24px !important;\n}\nmain.chat-scroll-area .chat-message-row .voice-transcript-area {\n  padding-top: 10px !important;\n  padding-bottom: 12px !important;\n}\nmain.chat-scroll-area .chat-message-row .voice-transcript-area p {\n  font-size: 14px !important;\n  line-height: 1.7 !important;\n}\n.html-card-wrapper {\n  transform: scale(0.88) !important;\n  transform-origin: top left !important;\n}\n.html-content {\n  width: 320px !important;\n  max-width: 320px !important;\n  overflow: hidden !important;\n  border-radius: 24px !important;\n}\n.html-content img {\n  max-width: 100% !important;\n  height: auto !important;\n  display: block !important;\n}\nmain.chat-scroll-area .chat-message-row [style*="zoom: 0.7"] {\n  zoom: 1 !important;\n}' },
    "12": { title: "聊天输入按钮最终钩子 / 发送按钮状态", text: ".chat-input-inner-voice-button {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 9999px;\n  color: rgb(212 212 216);\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.chat-input-inner-voice-button:hover {\n  background-color: rgb(228 228 231 / 0.5);\n  color: rgb(113 113 122);\n}\n.chat-input-inner-voice-button:disabled {\n  cursor: not-allowed;\n  color: rgb(228 228 231);\n}\n.chat-input-inner-voice-button:disabled:hover {\n  background-color: transparent;\n}\n.chat-input-inner-voice-button svg {\n  width: 1.25rem;\n  height: 1.25rem;\n  fill: currentColor;\n}\n.chat-input-send-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.35;\n}\n.chat-input-send-button svg {\n  position: relative;\n  right: 0.125rem;\n  bottom: 0.125rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #000;\n}" },
    "13": { title: "补漏：卡片 / 转账模态窗 / 翻译面板", text: ':root {\n  --chat-ui-ink: #111113;\n  --chat-ui-muted: #8a8a93;\n  --chat-ui-line: rgba(17, 17, 19, 0.08);\n  --chat-ui-panel: rgba(255, 255, 255, 0.94);\n  --chat-ui-soft: rgba(244, 244, 245, 0.74);\n  --chat-ui-card-shadow: 0 18px 46px rgba(0, 0, 0, 0.10);\n}\n.chat-card--poll,\n.chat-card--vote,\n.poll-card,\n.vote-card,\n[data-card-type="poll"],\n[data-card-type="vote"] {\n  box-sizing: border-box !important;\n  width: 320px !important;\n  max-width: min(320px, calc(100vw - 92px)) !important;\n  padding: 16px !important;\n  border-radius: 28px !important;\n  background: linear-gradient(180deg, #ffffff 0%, #f8f8fa 100%) !important;\n  border: 1px solid var(--chat-ui-line) !important;\n  color: var(--chat-ui-ink) !important;\n  box-shadow: var(--chat-ui-card-shadow) !important;\n  overflow: hidden !important;\n}\n:is(.poll-card, .vote-card, .chat-card--poll, .chat-card--vote, [data-card-type="poll"], [data-card-type="vote"])\n  :is(.poll-card__title, .vote-card__title, .font-bold) {\n  font-size: 15px !important;\n  line-height: 1.35 !important;\n  letter-spacing: 0 !important;\n}\n:is(.poll-card, .vote-card, .chat-card--poll, .chat-card--vote, [data-card-type="poll"], [data-card-type="vote"])\n  :is(.poll-option, .vote-option, button, [role="button"]) {\n  min-height: 40px !important;\n  border-radius: 999px !important;\n  border: 1px solid rgba(17, 17, 19, 0.10) !important;\n  background: var(--chat-ui-soft) !important;\n  color: var(--chat-ui-ink) !important;\n  overflow: hidden !important;\n}\n:is(.poll-card, .vote-card, .chat-card--poll, .chat-card--vote, [data-card-type="poll"], [data-card-type="vote"])\n  :is(.poll-option.is-selected, .vote-option.is-selected, .poll-option--selected, .vote-option--selected, button[aria-pressed="true"]) {\n  background: #111113 !important;\n  border-color: #111113 !important;\n  color: #ffffff !important;\n}\n:is(.poll-card, .vote-card, .chat-card--poll, .chat-card--vote, [data-card-type="poll"], [data-card-type="vote"])\n  :is(.poll-result-bar, .vote-result-bar, .poll-option__bar, .vote-option__bar) {\n  border-radius: inherit !important;\n  background: rgba(17, 17, 19, 0.08) !important;\n}\n.chat-card--forward-bundle,\n[data-card-type="forward_bundle"] {\n  box-sizing: border-box !important;\n  width: 318px !important;\n  max-width: min(318px, calc(100vw - 92px)) !important;\n  padding: 16px !important;\n  border-radius: 28px !important;\n  background: linear-gradient(180deg, #ffffff 0%, #f8f8fa 100%) !important;\n  border: 1px solid var(--chat-ui-line) !important;\n  color: var(--chat-ui-ink) !important;\n  box-shadow: var(--chat-ui-card-shadow) !important;\n  overflow: hidden !important;\n}\n.forward-bundle-card__source {\n  display: inline-flex !important;\n  align-items: center !important;\n  max-width: 100% !important;\n  padding: 4px 10px !important;\n  border-radius: 999px !important;\n  background: rgba(17, 17, 19, 0.06) !important;\n  color: var(--chat-ui-muted) !important;\n  font-size: 11px !important;\n  font-weight: 700 !important;\n}\n.forward-bundle-card__preview-list {\n  display: grid !important;\n  gap: 8px !important;\n  margin-top: 12px !important;\n}\n.forward-bundle-card__preview-row {\n  padding: 10px 12px !important;\n  border-radius: 16px !important;\n  background: var(--chat-ui-soft) !important;\n}\n.forward-bundle-card__preview-name {\n  color: var(--chat-ui-muted) !important;\n  font-size: 11px !important;\n  font-weight: 700 !important;\n}\n.forward-bundle-card__preview-text {\n  margin-top: 3px !important;\n  color: var(--chat-ui-ink) !important;\n  font-size: 13px !important;\n  line-height: 1.45 !important;\n}\n.forward-bundle-card__footer {\n  margin-top: 12px !important;\n  padding-top: 12px !important;\n  border-top: 1px solid rgba(17, 17, 19, 0.07) !important;\n  color: var(--chat-ui-muted) !important;\n}\n.receipt-shell {\n  box-sizing: border-box !important;\n  width: min(420px, calc(100vw - 32px)) !important;\n  max-height: min(82vh, 720px) !important;\n  border-radius: 30px !important;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 249, 251, 0.98) 100%) !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18) !important;\n  overflow: hidden !important;\n}\n.receipt-shell--gift {\n  border-color: rgba(244, 114, 182, 0.20) !important;\n}\n.receipt-shell--peer-pay {\n  border-color: rgba(59, 130, 246, 0.18) !important;\n}\n.receipt-header {\n  padding: 22px 24px 16px !important;\n  border-bottom: 1px dashed rgba(17, 17, 19, 0.12) !important;\n  background: rgba(255, 255, 255, 0.72) !important;\n}\n.receipt-items {\n  padding: 16px 24px !important;\n}\n.receipt-items > * + * {\n  border-top: 1px solid rgba(17, 17, 19, 0.06) !important;\n}\n.receipt-totals {\n  padding: 14px 24px !important;\n  background: rgba(244, 244, 245, 0.55) !important;\n}\n.receipt-grand-total {\n  font-size: 24px !important;\n  font-weight: 900 !important;\n  letter-spacing: -0.02em !important;\n}\n.ticket-barcode {\n  height: 44px !important;\n  margin: 18px 24px 24px !important;\n  border-radius: 10px !important;\n  opacity: 0.72 !important;\n  background: repeating-linear-gradient(90deg, #111113 0 2px, transparent 2px 5px, #111113 5px 6px, transparent 6px 10px) !important;\n}\n.modal-overlay,\n.dialog-overlay,\n.modal-backdrop,\n.dialog-backdrop,\n[data-modal-overlay],\n[data-dialog-overlay] {\n  background: rgba(10, 10, 12, 0.34) !important;\n  backdrop-filter: blur(18px) saturate(1.08) !important;\n  -webkit-backdrop-filter: blur(18px) saturate(1.08) !important;\n}\n:is(.modal-shell, .modal-content, .modal-card, .dialog-content, .dialog-panel, [role="dialog"], [data-modal], [data-dialog]) {\n  border-radius: 30px !important;\n  background: var(--chat-ui-panel) !important;\n  border: 1px solid rgba(255, 255, 255, 0.72) !important;\n  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.22) !important;\n  backdrop-filter: blur(24px) saturate(1.08) !important;\n  -webkit-backdrop-filter: blur(24px) saturate(1.08) !important;\n  color: var(--chat-ui-ink) !important;\n  overflow: hidden !important;\n}\n:is(.modal-header, .dialog-header, .modal-content header, .dialog-content header) {\n  border-bottom: 1px solid rgba(17, 17, 19, 0.07) !important;\n  background: rgba(255, 255, 255, 0.52) !important;\n}\n:is(.modal-footer, .dialog-footer, .modal-content footer, .dialog-content footer) {\n  border-top: 1px solid rgba(17, 17, 19, 0.07) !important;\n  background: rgba(250, 250, 251, 0.76) !important;\n}\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel, [role="dialog"])\n  :is(input, textarea, select) {\n  border-radius: 18px !important;\n  border: 1px solid rgba(17, 17, 19, 0.09) !important;\n  background: rgba(244, 244, 245, 0.76) !important;\n  color: var(--chat-ui-ink) !important;\n  outline: none !important;\n}\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel, [role="dialog"])\n  :is(input, textarea, select):focus {\n  border-color: rgba(17, 17, 19, 0.28) !important;\n  box-shadow: 0 0 0 4px rgba(17, 17, 19, 0.06) !important;\n}\n.transfer-modal,\n.transfer-dialog,\n.transfer-sheet,\n[data-transfer-modal],\n[data-modal-type="transfer"],\n[data-dialog-type="transfer"],\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel):has([data-transfer-amount]),\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel):has(.transfer-amount) {\n  box-sizing: border-box !important;\n  width: min(390px, calc(100vw - 28px)) !important;\n  border-radius: 30px !important;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 250, 0.96) 100%) !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.22) !important;\n  overflow: hidden !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-modal__header, .transfer-header, header) {\n  padding: 18px 22px 14px !important;\n  border-bottom: 1px solid rgba(17, 17, 19, 0.07) !important;\n  background: rgba(255, 255, 255, 0.58) !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-recipient, .transfer-modal__recipient, [data-transfer-recipient]) {\n  display: flex !important;\n  align-items: center !important;\n  gap: 10px !important;\n  padding: 12px 14px !important;\n  margin: 14px 18px 0 !important;\n  border-radius: 20px !important;\n  background: rgba(244, 244, 245, 0.72) !important;\n  color: #3f3f46 !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-amount, .transfer-modal__amount, [data-transfer-amount]) {\n  padding: 24px 22px 18px !important;\n  text-align: center !important;\n  font-size: 40px !important;\n  font-weight: 900 !important;\n  line-height: 1.05 !important;\n  letter-spacing: -0.03em !important;\n  color: #111113 !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-currency, .transfer-modal__currency, [data-transfer-currency]) {\n  font-size: 18px !important;\n  font-weight: 800 !important;\n  color: #71717a !important;\n  vertical-align: 0.55em !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-note, .transfer-message, .transfer-modal__note, [data-transfer-note]) {\n  margin: 0 18px 14px !important;\n  padding: 12px 14px !important;\n  border-radius: 18px !important;\n  background: rgba(244, 244, 245, 0.72) !important;\n  border: 1px solid rgba(17, 17, 19, 0.07) !important;\n  color: #52525b !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-keypad, .transfer-modal__keypad, [data-transfer-keypad]) {\n  display: grid !important;\n  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;\n  gap: 8px !important;\n  padding: 0 18px 18px !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-keypad, .transfer-modal__keypad, [data-transfer-keypad]) button {\n  min-height: 48px !important;\n  border-radius: 18px !important;\n  background: #ffffff !important;\n  border: 1px solid rgba(17, 17, 19, 0.07) !important;\n  color: #111113 !important;\n  font-size: 18px !important;\n  font-weight: 800 !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04) !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-actions, .transfer-modal__actions, footer) {\n  display: flex !important;\n  gap: 10px !important;\n  padding: 14px 18px 18px !important;\n  border-top: 1px solid rgba(17, 17, 19, 0.07) !important;\n  background: rgba(250, 250, 251, 0.76) !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-cancel, .transfer-confirm, .transfer-modal__cancel, .transfer-modal__confirm, [data-transfer-cancel], [data-transfer-confirm]) {\n  flex: 1 1 0 !important;\n  min-height: 42px !important;\n  border-radius: 999px !important;\n  font-weight: 850 !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-cancel, .transfer-modal__cancel, [data-transfer-cancel]) {\n  background: rgba(244, 244, 245, 0.86) !important;\n  color: #52525b !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-confirm, .transfer-modal__confirm, [data-transfer-confirm]) {\n  background: #111113 !important;\n  color: #ffffff !important;\n  border: 1px solid #111113 !important;\n  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.20) !important;\n}\n.translation-card,\n.translation-panel,\n.translate-panel,\n.translate-popover,\n.message-translation,\n.chat-translation,\n.bubble-translation,\n[data-translation],\n[data-message-translation],\n[data-translate-panel],\nmain.chat-scroll-area .chat-message-row [class*="translation" i] {\n  box-sizing: border-box !important;\n  max-width: min(320px, calc(100vw - 96px)) !important;\n  margin-top: 8px !important;\n  padding: 10px 12px !important;\n  border-radius: 18px !important;\n  background: rgba(255, 255, 255, 0.86) !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n  color: #3f3f46 !important;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06) !important;\n  backdrop-filter: blur(14px) !important;\n  -webkit-backdrop-filter: blur(14px) !important;\n}\n.bubble-sent :is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation]),\n.chat-message--sent :is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation]) {\n  background: rgba(255, 255, 255, 0.12) !important;\n  border-color: rgba(255, 255, 255, 0.14) !important;\n  color: rgba(255, 255, 255, 0.88) !important;\n  box-shadow: none !important;\n}\n:is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation])\n  :is(.translation-card__header, .translation-header, .translate-header) {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: space-between !important;\n  gap: 10px !important;\n  margin-bottom: 6px !important;\n  color: var(--chat-ui-muted) !important;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n}\n:is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation])\n  :is(.translation-card__text, .translation-text, .translate-text, p) {\n  margin: 0 !important;\n  font-size: 13px !important;\n  line-height: 1.65 !important;\n  word-break: break-word !important;\n}\nbutton[title*="翻译"],\nbutton[aria-label*="翻译"],\nbutton[title*="Translate"],\nbutton[aria-label*="Translate"],\n.translate-button,\n.translation-button {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  border-radius: 999px !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n  background: rgba(255, 255, 255, 0.86) !important;\n  color: #52525b !important;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06) !important;\n  transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease !important;\n}\nbutton[title*="翻译"]:hover,\nbutton[aria-label*="翻译"]:hover,\nbutton[title*="Translate"]:hover,\nbutton[aria-label*="Translate"]:hover,\n.translate-button:hover,\n.translation-button:hover {\n  background: #ffffff !important;\n  color: #111113 !important;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.10) !important;\n}\n@media (max-width: 640px) {\n  .chat-card--poll,\n  .chat-card--vote,\n  .poll-card,\n  .vote-card,\n  [data-card-type="poll"],\n  [data-card-type="vote"],\n  .chat-card--forward-bundle,\n  [data-card-type="forward_bundle"] {\n    width: calc(100vw - 72px) !important;\n    max-width: calc(100vw - 72px) !important;\n  }\n  .receipt-shell,\n  .transfer-modal,\n  .transfer-dialog,\n  .transfer-sheet,\n  [data-transfer-modal],\n  [data-modal-type="transfer"],\n  [data-dialog-type="transfer"] {\n    width: calc(100vw - 24px) !important;\n    max-width: calc(100vw - 24px) !important;\n  }\n  :is(.modal-shell, .modal-content, .modal-card, .dialog-content, .dialog-panel, [role="dialog"]) {\n    max-width: calc(100vw - 24px) !important;\n    border-radius: 26px !important;\n  }\n}' },
    "14": { title: "线上补漏：当前 Chat / Inbox 实际存在的卡片、按钮、状态、头像间距", text: `.chat-header-button--stop {}
.chat-header-button--quick-action {}
.chat-header-button--audio_call {}
.chat-header-button--video_call {}
.chat-header-button--phone_inspect {}
[data-chat-header-button="stop"] {}
[data-chat-header-button="search"] {}
[data-chat-header-button="audio_call"] {}
[data-chat-header-button="video_call"] {}
[data-chat-header-button="phone_inspect"] {}
.chat-header-subtitle {}
.chat-header-inspection-badge {}
.chat-header-life-status {}
.chat-header-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  flex: 0 0 auto;
}
.chat-header-status-dot--idle {
  background: #34d399;
  box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.16), 0 0 10px rgba(52, 211, 153, 0.75);
}
.chat-header-status-dot--busy {
  background: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.18), 0 0 10px rgba(245, 158, 11, 0.75);
}
.chat-header-status-dot--focus {
  background: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.18), 0 0 10px rgba(56, 189, 248, 0.75);
}
.chat-header-status-dot--sleep,
.chat-header-status-dot--offline {
  background: #a1a1aa;
  box-shadow: 0 0 0 3px rgba(161, 161, 170, 0.18), 0 0 8px rgba(161, 161, 170, 0.55);
}
:root {
  --chat-avatar-size-found: 34px;
  --chat-avatar-bubble-gap-found: 8px;
  --chat-message-row-gap-found: 8px;
}
.chat-message-row {}
.chat-message--sent {}
.chat-message--received {}
.chat-message {
  column-gap: var(--chat-avatar-bubble-gap-found) !important;
  margin-bottom: var(--chat-message-row-gap-found) !important;
}
.chat-message-avatar,
.chat-message-avatar-placeholder {
  width: var(--chat-avatar-size-found) !important;
  height: var(--chat-avatar-size-found) !important;
  flex: 0 0 auto;
}
.chat-message-avatar-placeholder {}
.chat-message-avatar-placeholder--sent {}
.chat-message-avatar-placeholder--received {}
.chat-message-content {}
.chat-message-content--sent {}
.chat-message-content--received {}
.chat-message-body {}
.chat-message-body--sent {}
.chat-message-body--received {}
.chat-message-sender-name {}
.chat-message-time {}
.chat-message-time--above {}
.chat-message-time--beside {}
.chat-message-time--below {}
.chat-bubble {}
.chat-bubble--text {}
.chat-bubble--sent {}
.chat-bubble--received {}
.message-text {
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.5;
}
.typing-dot {
  animation: typing 1.4s infinite ease-in-out both;
}
.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes typing {
  0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}
.chat-scroll-area {
  overscroll-behavior-y: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: rgba(24, 24, 27, 0.24) transparent;
}
.chat-scroll-area::-webkit-scrollbar { width: 7px; }
.chat-scroll-area::-webkit-scrollbar-track { background: transparent; }
.chat-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(24, 24, 27, 0.18);
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}
.chat-scroll-area::-webkit-scrollbar-thumb:hover {
  background-color: rgba(24, 24, 27, 0.32);
}
.chat-card--offline-invite,
[data-card-type="offline_invite"] {}
[data-offline-invite-status="pending"] {}
[data-offline-invite-status="accepted"] {}
[data-offline-invite-status="rejected"] {}
.offline-invite__button {}
.offline-invite__button--reject {}
.offline-invite__button--accept {}
.chat-plus-action--poll .chat-plus-action__icon,
[data-chat-plus-action="poll"] .chat-plus-action__icon {
  background-image: url('替换为投票图标URL') !important;
}
.chat-plus-action--group-gift .chat-plus-action__icon,
[data-chat-plus-action="group_gift"] .chat-plus-action__icon {
  background-image: url('替换为群赠礼图标URL') !important;
}
.chat-plus-action--audio-call .chat-plus-action__icon,
[data-chat-plus-action="audio_call"] .chat-plus-action__icon {
  background-image: url('替换为电话图标URL') !important;
}
.bokeh-effect {
  background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.7) 0%, transparent 35%),
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.9) 0%, transparent 50%),
              radial-gradient(circle at 10% 80%, rgba(255,255,255,0.6) 0%, transparent 30%),
              radial-gradient(circle at 90% 90%, rgba(255,255,255,0.75) 0%, transparent 45%),
              radial-gradient(circle at 40% 85%, rgba(255,255,255,0.5) 0%, transparent 35%),
              radial-gradient(circle at 70% 60%, rgba(255,255,255,0.8) 0%, transparent 40%),
              #e2e2e2;
  filter: blur(8px);
  transform: scale(1.1);
}
.entry-preview * {
  max-width: 100%;
}
.translation-block {
  display: inline;
  margin-left: 4px;
}
.translation-toggle {
  display: inline-block;
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.35);
  background: rgba(0, 0, 0, 0.06);
  padding: 1px 6px;
  border-radius: 6px;
  vertical-align: middle;
  user-select: none;
  transition: all 0.15s ease;
  list-style: none;
}
.translation-toggle:hover {
  background: rgba(0, 0, 0, 0.10);
  color: rgba(0, 0, 0, 0.50);
}
.translation-toggle::-webkit-details-marker {
  display: none;
}
.translation-block[open] .translation-toggle {
  background: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.45);
}
.translation-content {
  display: block;
  margin-top: 8px;
  padding-top: 8px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.80);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  line-height: 1.5;
}
.inbox-current-list-avatar,
main.flex-1.overflow-y-auto > div.flex.items-center > div.relative.flex.items-center > div.absolute > div.size-14 {
  width: 3.5rem !important;
  height: 3.5rem !important;
  border-radius: 9999px !important;
  flex-shrink: 0 !important;
  overflow: hidden !important;
  border: 1px solid #f5f5f5 !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
  background-size: cover !important;
  background-position: center !important;
}
main.flex-1.overflow-y-auto > div.flex.items-center > div.relative.flex.items-center > div.absolute {
  transition: transform 0.3s ease, left 0.3s ease !important;
  transform-origin: left center !important;
}
.avatar-abstract {
  background: linear-gradient(45deg, #000 0%, #333 100%);
  position: relative;
  overflow: hidden;
}
.avatar-abstract::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -50%;
  width: 200%;
  height: 1px;
  background: rgba(255, 255, 255, 0.20);
  transform: rotate(45deg);
}
.pinned-indicator {
  transform: rotate(-35deg);
}` },
    "15": { title: "补漏：Offline 菜单栏 / 子栏 / 线上系统灰字 / 未读徽标", text: '.offline-mode {\n  --offline-menu-width: 256px;\n  --offline-menu-bg: #ffffff;\n  --offline-menu-border: #f4f4f5;\n  --offline-menu-shadow: -18px 0 48px rgba(0, 0, 0, 0.14);\n  --offline-menu-title-color: #18181b;\n  --offline-menu-text: #3f3f46;\n  --offline-menu-muted: #a1a1aa;\n  --offline-menu-hover-bg: #fafafa;\n  --offline-menu-active-bg: #f4f4f5;\n  --offline-menu-radius: 18px;\n  --offline-menu-icon-size: 20px;\n  --offline-menu-row-height: 46px;\n  --offline-menu-row-px: 16px;\n  --offline-menu-row-gap: 12px;\n  --offline-menu-divider: #f4f4f5;\n  --offline-menu-badge-bg: #f4f4f5;\n  --offline-menu-badge-text: #52525b;\n  --offline-menu-toggle-off: #e4e4e7;\n  --offline-menu-toggle-on: #18181b;\n  --offline-menu-input-bg: #ffffff;\n  --offline-menu-input-border: #e4e4e7;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end {\n  background: transparent !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .flex-1.bg-transparent {\n  background: rgba(0, 0, 0, 0) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full {\n  width: var(--offline-menu-width) !important;\n  background: var(--offline-menu-bg) !important;\n  border-left: 1px solid var(--offline-menu-border) !important;\n  box-shadow: var(--offline-menu-shadow) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 {\n  padding: calc(16px + env(safe-area-inset-top)) 24px 18px !important;\n  border-bottom: 1px solid var(--offline-menu-border) !important;\n  background: var(--offline-menu-bg) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 .font-serif {\n  color: var(--offline-menu-title-color) !important;\n  font-size: 18px !important;\n  font-weight: 700 !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 button {\n  width: 34px !important;\n  height: 34px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 999px !important;\n  color: var(--offline-menu-muted) !important;\n  transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 button:hover {\n  background: var(--offline-menu-hover-bg) !important;\n  color: var(--offline-menu-title-color) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto {\n  padding: 10px 14px 18px !important;\n  background: var(--offline-menu-bg) !important;\n  scrollbar-width: thin !important;\n  scrollbar-color: rgba(24, 24, 27, 0.18) transparent !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > button {\n  min-height: var(--offline-menu-row-height) !important;\n  padding: 11px var(--offline-menu-row-px) !important;\n  border-radius: var(--offline-menu-radius) !important;\n  color: var(--offline-menu-text) !important;\n  background: transparent !important;\n  gap: var(--offline-menu-row-gap) !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  line-height: 1.25 !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > button:hover {\n  background: var(--offline-menu-hover-bg) !important;\n  color: var(--offline-menu-title-color) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > button:active {\n  background: var(--offline-menu-active-bg) !important;\n  transform: scale(0.985) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > button svg {\n  width: var(--offline-menu-icon-size) !important;\n  height: var(--offline-menu-icon-size) !important;\n  color: var(--offline-menu-muted) !important;\n  stroke-width: 2 !important;\n  flex: 0 0 auto !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > button > .ml-auto {\n  background: var(--offline-menu-badge-bg) !important;\n  color: var(--offline-menu-badge-text) !important;\n  border-radius: 999px !important;\n  padding: 2px 8px !important;\n  font-size: 11px !important;\n  font-weight: 700 !important;\n  line-height: 1.2 !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > .border-t {\n  border-color: var(--offline-menu-divider) !important;\n  margin: 10px 2px !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > .px-4.py-2.text-xs {\n  color: var(--offline-menu-muted) !important;\n  padding: 10px 16px 6px !important;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 0.22em !important;\n  text-transform: uppercase !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div.px-4.py-3,\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div.px-4.pb-3 {\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n  color: var(--offline-menu-text) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div span,\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div .text-zinc-700 {\n  color: var(--offline-menu-text) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto .text-zinc-400 {\n  color: var(--offline-menu-muted) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full input[type="number"] {\n  min-height: 30px !important;\n  border: 1px solid var(--offline-menu-input-border) !important;\n  border-radius: 10px !important;\n  background: var(--offline-menu-input-bg) !important;\n  color: var(--offline-menu-title-color) !important;\n  box-shadow: none !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full input[type="number"]:focus {\n  border-color: var(--offline-menu-title-color) !important;\n  box-shadow: 0 0 0 3px rgba(24, 24, 27, 0.08) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full input[type="number"]:disabled {\n  opacity: 0.55 !important;\n  background: #f4f4f5 !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full input[type="checkbox"] + div {\n  width: 36px !important;\n  height: 20px !important;\n  border-radius: 999px !important;\n  background: var(--offline-menu-toggle-off) !important;\n  transition: background-color 0.18s ease, box-shadow 0.18s ease !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full input[type="checkbox"]:checked + div {\n  background: var(--offline-menu-toggle-on) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full input[type="checkbox"] + div::after {\n  width: 16px !important;\n  height: 16px !important;\n  top: 2px !important;\n  left: 2px !important;\n  background: #ffffff !important;\n  border-radius: 999px !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full input[type="checkbox"]:checked + div::after {\n  transform: translateX(16px) !important;\n}\n.offline-mode {\n  --offline-subpanel-backdrop: rgba(0, 0, 0, 0.20);\n  --offline-subpanel-bg: #ffffff;\n  --offline-subpanel-border: #f4f4f5;\n  --offline-subpanel-header-bg: rgba(250, 250, 250, 0.72);\n  --offline-subpanel-radius: 24px;\n  --offline-subpanel-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);\n  --offline-subpanel-title: #18181b;\n  --offline-subpanel-text: #3f3f46;\n  --offline-subpanel-muted: #a1a1aa;\n  --offline-subpanel-item-bg: #ffffff;\n  --offline-subpanel-item-hover: #fafafa;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .absolute.inset-0 {\n  background: var(--offline-subpanel-backdrop) !important;\n  backdrop-filter: blur(8px) !important;\n  -webkit-backdrop-filter: blur(8px) !important;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white,\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .relative.z-10.bg-white {\n  background: var(--offline-subpanel-bg) !important;\n  border: 1px solid var(--offline-subpanel-border) !important;\n  border-radius: var(--offline-subpanel-radius) !important;\n  box-shadow: var(--offline-subpanel-shadow) !important;\n  overflow: hidden !important;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white > .px-4.py-3,\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white > .px-5.py-4 {\n  background: var(--offline-subpanel-header-bg) !important;\n  border-bottom: 1px solid var(--offline-subpanel-border) !important;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white .font-serif,\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .relative.z-10.bg-white h3 {\n  color: var(--offline-subpanel-title) !important;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white > .flex-1.overflow-y-auto {\n  background: var(--offline-subpanel-bg) !important;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white .flex-1.overflow-y-auto > .p-4.rounded-xl,\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white .flex-1.overflow-y-auto.p-5.space-y-3 > button {\n  background: var(--offline-subpanel-item-bg) !important;\n  border-color: var(--offline-subpanel-border) !important;\n  color: var(--offline-subpanel-text) !important;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03) !important;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white .flex-1.overflow-y-auto > .p-4.rounded-xl:hover,\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white .flex-1.overflow-y-auto.p-5.space-y-3 > button:hover {\n  background: var(--offline-subpanel-item-hover) !important;\n  border-color: #e4e4e7 !important;\n}\n.offline-mode > .absolute.inset-0.flex.items-center.justify-center.p-4 > .w-full.bg-white .grid.grid-cols-3.gap-2 > .aspect-square {\n  border-radius: 12px !important;\n  background: #f4f4f5 !important;\n  overflow: hidden !important;\n}\n.offline-mode .bg-black\\/60.backdrop-blur-xl.rounded-full {\n  background: rgba(0, 0, 0, 0.62) !important;\n  border: 1px solid rgba(255, 255, 255, 0.12) !important;\n  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.30) !important;\n}\n.offline-mode > .absolute.inset-0.flex.flex-col.bg-white.animate-scale-in {\n  background: var(--offline-subpanel-bg) !important;\n}\n.offline-mode > .absolute.inset-0.flex.flex-col.bg-white.animate-scale-in > .px-6 {\n  background: var(--offline-subpanel-header-bg) !important;\n  border-bottom: 1px solid var(--offline-subpanel-border) !important;\n}\n.offline-mode > .absolute.inset-0.flex.flex-col.bg-white.animate-scale-in > .flex-1.overflow-y-auto {\n  background: rgba(250, 250, 250, 0.42) !important;\n}\n.chat-scroll-area {\n  --online-system-text-color: #a1a1aa;\n  --online-system-font-size: 11px;\n  --online-system-font-weight: 700;\n  --online-system-letter-spacing: 0.05em;\n  --online-system-bg: transparent;\n  --online-system-radius: 999px;\n}\n.chat-header-online {\n  color: var(--online-system-text-color) !important;\n  font-size: 9px !important;\n  letter-spacing: 0.15em !important;\n  font-weight: 600 !important;\n}\nmain.chat-scroll-area > .flex.justify-center.my-4 > span {\n  color: var(--online-system-text-color) !important;\n  font-size: 10px !important;\n  letter-spacing: 0.20em !important;\n  font-weight: 700 !important;\n}\nmain.chat-scroll-area .chat-message-row > .flex.justify-center.w-full > span {\n  color: var(--online-system-text-color) !important;\n  font-size: 10px !important;\n  letter-spacing: 0.10em !important;\n  font-weight: 700 !important;\n  opacity: 0.70 !important;\n}\nmain.chat-scroll-area .chat-message-row > .flex.flex-col.relative.select-none > .w-full.flex.items-center.my-2 span {\n  color: var(--online-system-text-color) !important;\n  background: var(--online-system-bg) !important;\n  border-radius: var(--online-system-radius) !important;\n  font-size: var(--online-system-font-size) !important;\n  font-weight: var(--online-system-font-weight) !important;\n  letter-spacing: var(--online-system-letter-spacing) !important;\n  line-height: 1.55 !important;\n}\nmain.chat-scroll-area .chat-message-row > .flex.flex-col.relative.select-none > .w-full.flex.items-center.my-1 span {\n  color: var(--online-system-text-color) !important;\n  background: var(--online-system-bg) !important;\n  border-radius: var(--online-system-radius) !important;\n}\n.chat-message-time {\n  color: var(--online-system-text-color) !important;\n}\n.chat-other-unread-badge {\n  --chat-other-unread-bg: #18181b;\n  --chat-other-unread-text: #ffffff;\n  --chat-other-unread-border: rgba(255, 255, 255, 0.92);\n  --chat-other-unread-shadow: 0 5px 14px rgba(24, 24, 27, 0.18);\n  display: inline-flex !important;\n  min-width: 22px !important;\n  height: 22px !important;\n  flex: 0 0 auto !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin-left: -6px !important;\n  padding: 0 6px !important;\n  border: 1px solid var(--chat-other-unread-border) !important;\n  border-radius: 9999px !important;\n  background: var(--chat-other-unread-bg) !important;\n  color: var(--chat-other-unread-text) !important;\n  box-shadow: var(--chat-other-unread-shadow) !important;\n  font-size: 10px !important;\n  font-weight: 800 !important;\n  line-height: 1 !important;\n  letter-spacing: 0 !important;\n  -webkit-tap-highlight-color: transparent !important;\n}\n.chat-other-unread-badge:active {\n  transform: scale(0.96) !important;\n}\n.chat-other-unread-badge-enter-active,\n.chat-other-unread-badge-leave-active {\n  transition: opacity 0.16s ease, transform 0.16s ease !important;\n}\n.chat-other-unread-badge-enter-from,\n.chat-other-unread-badge-leave-to {\n  opacity: 0 !important;\n  transform: scale(0.85) !important;\n}\n@media (max-width: 360px) {\n  .chat-other-unread-badge {\n    min-width: 20px !important;\n    height: 20px !important;\n    margin-left: -8px !important;\n    padding: 0 5px !important;\n    font-size: 9px !important;\n  }\n}' },
    "01": { title: "个人主页 / 帖子流 / 通用底部导航", text: ".profile-header {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    background-color: rgba(255, 255, 255, 0.95);\n    backdrop-filter: blur(20px);\n    width: 100%;\n}\n.profile-section {\n    padding: 0.5rem 1.25rem 1.5rem;\n}\n.profile-handle {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 1.2;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.profile-avatar {\n    width: 80px;\n    height: 80px;\n    border-radius: 9999px;\n    border: 1px solid #f4f4f5;\n    background-color: #fafafa;\n    background-size: cover;\n    background-position: center;\n}\n.profile-action-btn {\n    flex: 1 1 0%;\n    padding: 0.375rem 0;\n    background-color: #ffffff;\n    color: #000000;\n    font-size: 14px;\n    font-weight: 700;\n    border-radius: 8px;\n    border: 1px solid #e4e4e7;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n.profile-action-btn:hover {\n    background-color: #fafafa;\n}\n.profile-nav {\n    display: flex;\n    border-bottom: 1px solid #f4f4f5;\n    position: sticky;\n    top: 0;\n    background-color: #ffffff;\n    z-index: 10;\n}\n.tab-item {\n    flex: 1 1 0%;\n    padding: 0.75rem 0;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center;\n    border-bottom: 1.5px solid transparent;\n    transition: color 0.2s, border-color 0.2s;\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n.tab-item.active {\n    border-bottom-color: #000000;\n    color: #000000;\n}\n.tab-item.inactive {\n    color: #a1a1aa;\n}\n.post-item {\n    position: relative;\n    padding: 1rem 1.5rem;\n    border-bottom: 1px solid #f9f9f9;\n    display: flex;\n    gap: 1rem;\n    background-color: #ffffff;\n}\n.post-avatar-small {\n    width: 40px;\n    height: 40px;\n    border-radius: 9999px;\n    background-color: #f4f4f5;\n    border: 1px solid #e4e4e7;\n    overflow: hidden;\n}\n.post-author-name {\n    font-size: 15px;\n    font-weight: 700;\n    color: #000000;\n}\n.post-timestamp {\n    color: #a1a1aa;\n    font-size: 14px;\n    margin-left: 0.25rem;\n}\n.post-body {\n    font-size: 15px;\n    color: #000000;\n    line-height: 1.625;\n    word-break: break-all;\n    white-space: pre-wrap;\n    margin-top: 0.25rem;\n}\n.post-actions {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n    margin-top: 0.75rem;\n    color: #000000;\n}\n.post-action-unit {\n    display: flex;\n    align-items: center;\n    gap: 0.375rem;\n    font-size: 14px;\n    font-weight: 400;\n}\n.post-action-unit svg {\n    width: 20px;\n    height: 20px;\n    stroke-width: 1.1px;\n}" },
    "02": { title: "全局底部导航 / 浮动 API 按钮", text: ".bottom-nav {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    padding-bottom: env(safe-area-inset-bottom);\n    background-color: #ffffff;\n    border-top: 1px solid #f4f4f5;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    z-index: 50;\n}\n.floating-api-toggle {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 1rem;\n    background: #ffffff;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.08);\n    border-radius: 9999px;\n    position: absolute;\n    bottom: 80px;\n    left: 16px;\n    z-index: 60;\n}\n.api-icon-circle {\n    width: 32px;\n    height: 32px;\n    background: #18181b;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #ffffff;\n}\n.api-label {\n    font-size: 10px;\n    font-weight: 800;\n    text-transform: uppercase;\n    color: #a1a1aa;\n    letter-spacing: 0.1em;\n}\n.api-name {\n    font-size: 14px;\n    font-weight: 700;\n    color: #18181b;\n}" },
    "03": { title: "消息列表 / 会话列表 / Inbox", text: ".inbox-header {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    background-color: rgba(255, 255, 255, 0.9);\n    backdrop-filter: blur(20px);\n    border-bottom: 1px solid rgba(229, 231, 235, 0.5);\n    padding: 0.625rem 1.5rem 1rem;\n}\n.inbox-title {\n    font-size: 13px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.25em;\n    color: #000000;\n}\n.search-input {\n    width: 100%;\n    background-color: #f5f5f5;\n    border: none;\n    border-radius: 9999px;\n    padding: 0.5rem 1.25rem;\n    font-size: 14px;\n    outline: none;\n    transition: all 0.2s;\n}\n.search-input::placeholder {\n    color: #a3a3a3;\n}\n.search-input:focus {\n    box-shadow: 0 0 0 1px #000000;\n}\n.conversation-item {\n    display: flex;\n    align-items: center;\n    padding: 1.25rem 1.5rem;\n    background-color: #ffffff;\n    border-bottom: 1px solid #f9f9f9;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n.conversation-item:hover {\n    background-color: #fafafa;\n}\n.conversation-avatar {\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 9999px;\n    flex-shrink: 0;\n    margin-right: 1rem;\n    background-color: #171717;\n    border: 1px solid #f4f4f5;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n    background-size: cover;\n    background-position: center;\n}\n.conversation-info {\n    flex: 1 1 0%;\n    min-width: 0;\n}\n.conv-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 0.125rem;\n}\n.conv-name {\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: -0.025em;\n    color: #000000;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.conv-time {\n    font-size: 11px;\n    font-weight: 500;\n    color: #a3a3a3;\n}\n.conv-preview {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.25;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.conv-preview.unread {\n    color: #000000;\n}\n.conv-preview.read {\n    color: #737373;\n}\n.unread-badge {\n    min-width: 18px;\n    height: 18px;\n    background-color: #000000;\n    border-radius: 9999px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 0.25rem;\n    margin-left: 0.5rem;\n}\n.unread-count {\n    color: #ffffff;\n    font-size: 10px;\n    font-weight: 700;\n}\n.avatar-abstract {\n    background: linear-gradient(45deg, #000000 0%, #333333 100%);\n    position: relative;\n    overflow: hidden;\n}\n.avatar-abstract::before {\n    content: '';\n    position: absolute;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: 0.5px solid rgba(255, 255, 255, 0.3);\n    transform: rotate(45deg);\n    top: 50%;\n    left: 50%;\n    margin-top: -0.75rem;\n    margin-left: -0.75rem;\n}" },
    "04": { title: "新建消息 / 创建群聊 / 联系人抽屉", text: ".bottom-sheet {\n    position: fixed;\n    inset-inline: 0;\n    bottom: 0;\n    height: 92%;\n    z-index: 60;\n    background-color: #ffffff;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n}\n.sheet-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem;\n    border-bottom: 1px solid #f3f4f6;\n    flex-shrink: 0;\n}\n.sheet-title {\n    font-size: 16px;\n    font-weight: 700;\n    letter-spacing: -0.025em;\n}\n.search-bar-container {\n    padding: 0.5rem 1rem;\n    margin-top: 0.5rem;\n}\n.search-bar-inner {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    background-color: #f5f5f5;\n    padding: 0.5rem 0.75rem;\n    border-radius: 0.75rem;\n}\n.create-group-entry {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    transition: background-color 0.2s;\n    cursor: pointer;\n}\n.icon-circle-outline {\n    width: 3rem;\n    height: 3rem;\n    border-radius: 9999px;\n    border: 1px solid #e5e5e5;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.contact-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.75rem 1rem;\n    transition: background-color 0.2s;\n    cursor: pointer;\n}\n.contact-avatar {\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 9999px;\n    background-color: #171717;\n    overflow: hidden;\n    flex-shrink: 0;\n    border: 1px solid #f5f5f5;\n}\n.photo-upload-btn {\n    width: 6rem;\n    height: 6rem;\n    border-radius: 9999px;\n    border: 1px solid #d4d4d4;\n    border-style: dashed;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.25rem;\n    color: #a3a3a3;\n    transition: background-color 0.2s;\n    background: none;\n    cursor: pointer;\n}\n.group-name-input {\n    width: 100%;\n    background: transparent;\n    border: 0;\n    border-bottom: 1px solid #e5e5e5;\n    padding: 0.75rem 0;\n    font-size: 1.125rem;\n    outline: none;\n    transition: border-color 0.2s;\n}\n.group-name-input:focus {\n    border-bottom-color: #000000;\n}\n.round-checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 9999px;\n    border: 1px solid #d4d4d4;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s;\n}\n.round-checkbox.checked {\n    background-color: #000000;\n    border-color: #000000;\n}\n.selected-member-tag {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    width: 60px;\n}\n.mini-avatar-wrapper {\n    width: 3rem;\n    height: 3rem;\n    border-radius: 9999px;\n    background-color: #171717;\n    position: relative;\n}\n.remove-member-btn {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 1rem;\n    height: 1rem;\n    background-color: #ffffff;\n    border-radius: 9999px;\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #f3f4f6;\n}\n.sheet-section-title {\n    font-size: 11px;\n    font-weight: 700;\n    color: #a3a3a3;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    padding: 0.5rem 1rem;\n    margin-top: 0.5rem;\n}" },
    "05": { title: "Feed / 回复 / 收藏页 / 空状态", text: ".noir-header {\n    position: sticky;\n    top: 0;\n    z-index: 40;\n    background-color: rgba(255, 255, 255, 0.9);\n    backdrop-filter: blur(12px);\n    border-bottom: 1px solid #f4f4f5;\n    padding: 0.625rem 1.5rem 0.75rem;\n}\n.noir-logo {\n    text-align: center;\n    font-size: 1.25rem;\n    font-weight: 800;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: #000000;\n}\n.post-container {\n    position: relative;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.connect-top {\n    position: absolute;\n    left: 43px;\n    top: 0;\n    height: 18px;\n    width: 1px;\n    border-left: 2px dashed #e4e4e7;\n}\n.connect-bottom {\n    position: absolute;\n    left: 43px;\n    top: 56px;\n    bottom: 0;\n    width: 1px;\n    border-left: 2px dashed #e4e4e7;\n}\n.spoiler-card {\n    width: 200px;\n    aspect-ratio: 3/4;\n    border-radius: 0.75rem;\n    overflow: hidden;\n    position: relative;\n    background-color: #fafafa;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: transform 0.2s;\n}\n.spoiler-card:active {\n    transform: scale(0.95);\n}\n.spoiler-text-main {\n    font-family: ui-serif, Georgia, serif;\n    font-style: italic;\n    font-size: 1.25rem;\n    color: rgba(0, 0, 0, 0.8);\n    margin-bottom: 0.5rem;\n}\n.spoiler-text-sub {\n    font-size: 10px;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: rgba(0, 0, 0, 0.4);\n}\n.reply-footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #ffffff;\n    border-top: 1px solid #f4f4f5;\n    padding: 0.75rem 1rem;\n    padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    z-index:100;\n}\n.reply-input-wrapper {\n    flex: 1;\n    background-color: #f4f4f5;\n    border-radius: 9999px;\n    padding: 0.5rem 1.25rem;\n    display: flex;\n    align-items: center;\n}\n.reply-field {\n    width: 100%;\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 14px;\n    color: #000000;\n}\n.summon-btn {\n    padding: 0.5rem 1rem;\n    background-color: #ffffff;\n    border: 1px solid #e4e4e7;\n    border-radius: 9999px;\n    font-size: 14px;\n    font-weight: 700;\n    color: #000000;\n    transition: background-color 0.2s;\n    cursor: pointer;\n}\n.summon-btn:hover {\n    background-color: #fafafa;\n}\n.view-replies-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    padding: 0.375rem 1rem;\n    border-radius: 9999px;\n    border: 1px solid #e4e4e7;\n    background-color: #ffffff;\n    font-size: 12px;\n    font-weight: 700;\n    color: #000000;\n    margin-left: 70px;\n    margin-bottom: 0.5rem;\n    position: relative;\n    z-index: 10;\n}\n.favorites-header {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    background-color: rgba(255, 255, 255, 0.92);\n    backdrop-filter: blur(20px);\n    border-bottom: 1px solid rgba(229, 231, 235, 0.7);\n    padding: 0.625rem 1.25rem 0.75rem;\n}\n.favorites-header-title {\n    font-size: 17px;\n    font-weight: 600;\n    letter-spacing: -0.025em;\n    text-align: center;\n    color: #000000;\n}\n.empty-state-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 0 1.5rem;\n    text-align: center;\n    min-height: 55vh;\n}\n.empty-icon-wrapper {\n    width: 5rem;\n    height: 5rem;\n    border-radius: 9999px;\n    background-color: #f4f4f5;\n    color: #a1a1aa;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.empty-title {\n    margin-top: 1.25rem;\n    font-size: 24px;\n    font-weight: 900;\n    letter-spacing: -0.025em;\n    color: #000000;\n}\n.empty-description {\n    margin-top: 0.5rem;\n    max-width: 20rem;\n    font-size: 14px;\n    line-height: 1.5rem;\n    color: #71717a;\n}\n.favorite-card {\n    background-color: rgba(255, 255, 255, 0.96);\n    border-radius: 28px;\n    border: 1px solid rgba(0, 0, 0, 0.06);\n    padding: 1rem;\n    margin-bottom: 0.75rem;\n    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.05);\n}\n.favorite-user-name {\n    font-size: 15px;\n    font-weight: 700;\n    color: #000000;\n}\n.favorite-submeta {\n    margin-top: 0.25rem;\n    font-size: 12px;\n    color: #a1a1aa;\n}\n.favorite-content {\n    margin-top: 0.75rem;\n    font-size: 15px;\n    line-height: 1.5rem;\n    color: #27272a;\n    white-space: pre-wrap;\n    word-break: break-all;\n}\n.favorite-footer-hint {\n    margin-top: 0.75rem;\n    font-size: 12px;\n    font-weight: 600;\n    color: #71717a;\n}\n.unfavorite-btn {\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 9999px;\n    background-color: #ffffff;\n    border: 1px solid rgba(0, 0, 0, 0.06);\n    color: #a1a1aa;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s;\n    flex-shrink: 0;\n}\n.unfavorite-btn:hover {\n    border-color: #fecdd3;\n    color: #f43f5e;\n}" },
    "06": { title: "Offline 侧边栏间距", text: ".offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full {\n  --offline-sidebar-header-px: 24px;\n  --offline-sidebar-header-py: 24px;\n  --offline-sidebar-body-px: 16px;\n  --offline-sidebar-body-py: 8px;\n  --offline-sidebar-item-gap: 4px;\n  --offline-sidebar-row-px: 16px;\n  --offline-sidebar-row-py: 12px;\n  --offline-sidebar-section-gap: 8px;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 {\n  padding-left: var(--offline-sidebar-header-px) !important;\n  padding-right: var(--offline-sidebar-header-px) !important;\n  padding-bottom: var(--offline-sidebar-header-py) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto {\n  padding: var(--offline-sidebar-body-py) var(--offline-sidebar-body-px) !important;\n  display: flex;\n  flex-direction: column;\n  gap: var(--offline-sidebar-item-gap);\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > button,\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div.px-4.py-3,\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div.px-4.pb-3,\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div.px-4.py-2 {\n  padding-left: var(--offline-sidebar-row-px) !important;\n  padding-right: var(--offline-sidebar-row-px) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > button,\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > div.px-4.py-3 {\n  padding-top: var(--offline-sidebar-row-py) !important;\n  padding-bottom: var(--offline-sidebar-row-py) !important;\n}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto > .border-t {\n  margin: var(--offline-sidebar-section-gap) 0 !important;\n}" },
    "07": { title: "聊天页：背景、顶栏、气泡、功能卡、按钮", text: `main {
}
header.sticky.top-0 {
    background: rgba(255, 255, 255, 0.85) !important;
    backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
}
.chat-header-button--back {}
.chat-header-button--search {}
.chat-header-button--settings {}
.chat-header-avatar {}
.chat-header-title {}
.chat-header-online {}
.chat-header-button--back .chat-header-button__icon,
.chat-header-button--search .chat-header-button__icon,
.chat-header-button--settings .chat-header-button__icon {
  opacity: 0;
}
.chat-header-button--back {
  background-image: url("你的返回按钮图片.png") !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: 18px 18px !important;
}
.chat-header-title,
.chat-header-online {
  color: #000000 !important;
}
[data-chat-header-button="back"] {}
[data-chat-header-button="search"] {}
[data-chat-header-button="settings"] {}
[data-chat-header-button="video_call"] {}
[data-chat-header-button="phone_inspect"] {}
[data-chat-header-button] .chat-header-button__icon {
}
.fixed.bottom-0.bg-white {
    background-color: #FFFFFF !important;
    border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
}
.fixed.bottom-0 textarea {
    background-color: #F4F4F5 !important;
    color: #000000 !important;
    border: none !important;
}
.bubble-received {
    background-color: #FFFFFF !important;
    color: #111111 !important;
    border-radius: 18px 18px 18px 4px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02) !important;
}
.bubble-sent {
    background-color: #000000 !important;
    color: #FFFFFF !important;
    border-radius: 18px 18px 4px 18px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
}
.chat-message-avatar {}
.chat-message-avatar--sent {}
.chat-message-avatar--received {}
.chat-message-avatar--typing {}
.chat-message-avatar[data-sender-id="..."] {}
.chat-card {
}
.chat-card--sent {}
.chat-card--received {}
.chat-card--forward-bundle {}
.chat-card--location {}
.chat-card--image {}
.chat-card--sticker {}
.chat-card--spoiler {}
.chat-card--voice {}
.chat-card--transfer {}
.chat-card--payment-notice {}
.chat-card--peer-pay-notice {}
.chat-card--checkout {}
.chat-card--video-call-notice {}
.chat-card--listen-together {}
.chat-card--phone-inspect-notice {}
.chat-card--phone-inspect-invite {}
.chat-card--drip-notice {}
.chat-card--drip-invite {}
.chat-card--html {}
.chat-card--regex {}
.chat-card--family-card {}
[data-card-type="forward_bundle"] {}
[data-card-type="location"] {}
[data-card-type="image"] {}
[data-card-type="sticker"] {}
[data-card-type="voice"] {}
[data-card-type="checkout_gift"] {}
[data-card-type="checkout_peer_pay"] {}
[data-card-type="peer_pay_notice"] {}
[data-card-type="transfer"] {}
[data-card-type="payment_notice"] {}
[data-card-type="video_call_notice"] {}
[data-card-type="listen_together_invite"] {}
[data-card-type="phone_inspect_notice"] {}
[data-card-type="phone_inspect_invite"] {}
[data-card-type="drip_notice"] {}
[data-card-type="drip_invite"] {}
[data-card-type="html"] {}
[data-card-type="regex"] {}
[data-card-type="family_card"] {}
.forward-bundle-card__source {}
.forward-bundle-card__preview-list {}
.forward-bundle-card__preview-row {}
.forward-bundle-card__preview-name {}
.forward-bundle-card__preview-text {}
.forward-bundle-card__footer {}
.rounded-2xl.border.border-zinc-200, .rounded-2xl.p-4.min-w-\\[220px\\] {
    background-color: #FFFFFF !important;
    border: 1px solid rgba(0,0,0,0.06) !important;
    border-radius: 20px !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.03) !important;
    color: #000000 !important;
}
.checkout-card {
  width: 340px !important;
  max-width: 340px !important;
  border-radius: 28px !important;
  background: linear-gradient(180deg, #fff 0%, #f7f7fa 100%) !important;
  border: 1px solid #e9e9ef !important;
  box-shadow: 0 12px 32px rgba(0,0,0,.08) !important;
}
.checkout-card--gift {}
.checkout-card--peer-pay {}
.checkout-card--sent {}
.checkout-card--received {}
.checkout-card--paid {}
.checkout-card--rejected {}
.checkout-card--pending {}
.checkout-card__icon {}
.checkout-card__title {}
.checkout-card__subtitle {}
.checkout-card__money {}
.checkout-card__link {}
.checkout-card__action-button--reject {}
.checkout-card__action-button--pay {}
.chat-card--family-card,
[data-card-type="family_card"] {
  width: 244px !important;
  max-width: min(244px, calc(100vw - 92px)) !important;
  border-radius: 18px !important;
  background: #ffffff !important;
  border: 1px solid rgba(17, 17, 19, 0.10) !important;
  box-shadow: 0 6px 18px rgba(24, 24, 27, 0.06) !important;
  overflow: hidden !important;
}
.chat-card--family-card.chat-card--sent,
[data-card-type="family_card"][data-message-side="sent"] {}
.chat-card--family-card.chat-card--received,
[data-card-type="family_card"][data-message-side="received"] {}
[data-card-type="family_card"][data-family-card-status="pending"] {}
[data-card-type="family_card"][data-family-card-status="active"] {}
[data-card-type="family_card"][data-family-card-status="rejected"] {}
[data-card-type="family_card"][data-family-card-status="revoked"] {}
:is(.chat-card--family-card, [data-card-type="family_card"]) .material-symbols-outlined {
}
:is(.chat-card--family-card, [data-card-type="family_card"]) button:first-of-type {
}
:is(.chat-card--family-card, [data-card-type="family_card"]) button:last-of-type {
}
.phone-inspect-invite__button {}
.phone-inspect-invite__button--reject {}
.phone-inspect-invite__button--accept {}
.drip-invite__button {}
.drip-invite__button--reject {}
.drip-invite__button--accept {}
.peer-pay-notice {
  width: 300px !important;
  border-radius: 28px !important;
}
.peer-pay-notice--paid {}
.peer-pay-notice--rejected {}
.peer-pay-notice__icon {}
.peer-pay-notice__money {}
.rounded-\\[24px\\].border-zinc-100 {
    background-color: #FFFFFF !important;
    border-color: rgba(0,0,0,0.05) !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
}
.bg-white.text-black.rounded-\\[18px\\].rounded-bl-sm {
    background-color: #FFFFFF !important;
    color: #000000 !important;
}
.bg-black.text-white.rounded-\\[18px\\].rounded-br-sm {
    background-color: #000000 !important;
    color: #FFFFFF !important;
}
.rounded-t-\\[32px\\], .rounded-t-3xl {
    background-color: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(16px) !important;
    border-top: 1px solid rgba(0,0,0,0.05) !important;
}
.rounded-t-\\[32px\\] button, .rounded-t-3xl button {
    color: #333333 !important;
}
.entry-preview {
    background-color: transparent !important;
}
.text-\\[9px\\].text-zinc-400 {
    color: rgba(0,0,0,0.4) !important;
}
header.sticky.top-0 button:nth-of-type(1) span {
    display: none !important;
}
header.sticky.top-0 button:nth-of-type(1) {
    background-image: url('替换为您的返回图标URL') !important;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-color: transparent !important;
}
header.sticky.top-0 button:nth-of-type(2) {
    color: transparent !important;
    background-image: url('替换为您的搜索图标URL') !important;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    width: 24px !important;
    height: 24px !important;
    overflow: hidden !important;
}
header.sticky.top-0 button:nth-of-type(3) {
    color: transparent !important;
    background-image: url('替换为您的设置图标URL') !important;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    width: 24px !important;
    height: 24px !important;
}
footer button.size-10 {
    background-color: transparent !important;
    background-image: url('替换为您的加号图标URL') !important;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}
footer button.size-10 span {
    display: none !important;
}
footer button[click="handlePlaneClick"] svg,
footer button svg.w-6.h-6 {
    display: none !important;
}
footer button:last-child {
    background-image: url('替换为您的发送图标URL') !important;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    width: 28px !important;
    height: 28px !important;
}
footer .flex-col.-space-y-1 button {
    color: transparent !important;
}
footer .flex-col.-space-y-1 button:first-child {
    background-image: url('替换为您向上的箭头URL') !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
}
footer .flex-col.-space-y-1 button:last-child {
    background-image: url('替换为您向下的箭头URL') !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
}
.chat-plus-panel {}
.chat-plus-panel__grid {}
.chat-plus-action {}
.chat-plus-action__icon {
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}
.chat-plus-action__label {}
.chat-plus-action--search .chat-plus-action__icon,
[data-chat-plus-action="search"] .chat-plus-action__icon {
    background-image: url('替换为搜索图标URL') !important;
}
.chat-plus-action--sticker .chat-plus-action__icon,
[data-chat-plus-action="sticker"] .chat-plus-action__icon {
    background-image: url('替换为表情图标URL') !important;
}
.chat-plus-action--gallery .chat-plus-action__icon,
[data-chat-plus-action="gallery"] .chat-plus-action__icon {
    background-image: url('替换为相册图标URL') !important;
}
.chat-plus-action--camera .chat-plus-action__icon,
[data-chat-plus-action="camera"] .chat-plus-action__icon {
    background-image: url('替换为拍摄图标URL') !important;
}
.chat-plus-action--voice .chat-plus-action__icon,
[data-chat-plus-action="voice"] .chat-plus-action__icon {
    background-image: url('替换为语音图标URL') !important;
}
.chat-plus-action--action .chat-plus-action__icon,
[data-chat-plus-action="action"] .chat-plus-action__icon {
    background-image: url('替换为动作图标URL') !important;
}
.chat-plus-action--location .chat-plus-action__icon,
[data-chat-plus-action="location"] .chat-plus-action__icon {
    background-image: url('替换为位置图标URL') !important;
}
.chat-plus-action--video-call .chat-plus-action__icon,
[data-chat-plus-action="video_call"] .chat-plus-action__icon {
    background-image: url('替换为视频图标URL') !important;
}
.chat-plus-action--memory .chat-plus-action__icon,
[data-chat-plus-action="memory"] .chat-plus-action__icon {
    background-image: url('替换为记忆图标URL') !important;
}
.chat-plus-action--transfer .chat-plus-action__icon,
[data-chat-plus-action="transfer"] .chat-plus-action__icon {
    background-image: url('替换为转账图标URL') !important;
}
.chat-plus-action--listen-together .chat-plus-action__icon,
[data-chat-plus-action="listen_together"] .chat-plus-action__icon {
    background-image: url('替换为音乐图标URL') !important;
}
.chat-plus-action--offline-mode .chat-plus-action__icon,
[data-chat-plus-action="offline_mode"] .chat-plus-action__icon {
    background-image: url('替换为线下图标URL') !important;
}
.chat-plus-action--focus-mode .chat-plus-action__icon,
[data-chat-plus-action="focus_mode"] .chat-plus-action__icon {
    background-image: url('替换为番茄钟图标URL') !important;
}
.chat-plus-action--gift-bag .chat-plus-action__icon,
[data-chat-plus-action="gift_bag"] .chat-plus-action__icon {
    background-image: url('替换为礼物图标URL') !important;
}
.chat-plus-action--reroll .chat-plus-action__icon,
[data-chat-plus-action="reroll"] .chat-plus-action__icon {
    background-image: url('替换为重试图标URL') !important;
}
.chat-plus-action--novel-reader .chat-plus-action__icon,
[data-chat-plus-action="novel_reader"] .chat-plus-action__icon {
    background-image: url('替换为小说图标URL') !important;
}
.chat-plus-action--drip-invite .chat-plus-action__icon,
[data-chat-plus-action="drip_invite"] .chat-plus-action__icon {
    background-image: url('替换为羁绊图标URL') !important;
}
.chat-plus-action--phone-inspect .chat-plus-action__icon,
[data-chat-plus-action="phone_inspect"] .chat-plus-action__icon {
    background-image: url('替换为查看手机图标URL') !important;
}
main.flex-col.gap-4,
main > div.flex-col.gap-4 {
    gap: 8px !important;
}
div[id^="msg-"] .mb-2.w-full.transition-all {
    margin-bottom: 2px !important;
}
.bubble-received div[class*="border-l-[2px]"] {
    border-left-color: #3b82f6 !important;
    border-left-width: 3px !important;
    background-color: #f3f4f6;
    padding: 6px 8px;
    border-radius: 4px;
}
.bubble-sent div[class*="border-l-[2px]"] {
    border-left-color: #fbbf24 !important;
    border-left-width: 3px !important;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 6px 8px;
    border-radius: 4px;
}
.bubble-received div[class*="border-l-[2px]"] span:first-child {
    font-size: 10px !important;
    color: #3b82f6 !important;
    text-transform: none;
}
.bubble-sent div[class*="border-l-[2px]"] span:first-child {
    font-size: 10px !important;
    color: #fbbf24 !important;
}
.bubble-received div[class*="border-l-[2px]"] span:last-child,
.bubble-sent div[class*="border-l-[2px]"] span:last-child {
    font-size: 13px !important;
    font-style: italic;
    margin-top: 2px;
    opacity: 0.8;
}` },
    "08": { title: "Offline Mode / Offline Card 主题", text: `.offline-mode {
    background-size: cover !important;
    background-position: center !important;
    backdrop-filter: blur(10px);
}
.offline-mode .sticky.top-0 {
    background: rgba(255, 255, 255, 0.7) !important;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
}
.offline-mode .font-serif.italic {
    font-family: 'Georgia', serif !important;
    font-size: 22px !important;
    letter-spacing: 1px;
    color: #333;
}
.offline-card {
  --card-surface: #fffdf9;
  --card-surface-2: #f8f4ee;
  --card-border: #ece4d8;
  --card-shadow: rgba(116, 92, 66, 0.08);
  --card-shadow-hover: rgba(116, 92, 66, 0.14);
  --card-title-font: "STSong", "Songti SC", "Noto Serif SC", serif;
  --card-title-size: 18px;
  --card-title-weight: 700;
  --card-title-color: #2c241d;
  --card-meta-font: "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  --card-meta-size: 11px;
  --card-meta-weight: 600;
  --card-meta-color: #9d8e7e;
  --card-quote-font: "STSong", "Songti SC", "Noto Serif SC", serif;
  --card-quote-size: 12px;
  --card-quote-color: #c3b5a6;
  --card-body-font: "STKaiti", "KaiTi", "Kaiti SC", "Noto Serif SC", serif;
  --card-body-size: 17px;
  --card-body-weight: 400;
  --card-body-line-height: 2.1;
  --card-body-letter-spacing: 0.015em;
  --card-body-color: #443a31;
  --card-floor-font: "SFMono-Regular", Consolas, monospace;
  --card-floor-size: 11px;
  --card-floor-color: rgba(166, 147, 127, 0.7);
  --card-footer-font: "SFMono-Regular", Consolas, monospace;
  --card-footer-size: 10px;
  --card-footer-color: #b7a896;
  --card-footer-metric-size: 9px;
  --card-action-icon-size: 15px;
  --card-action-color: #a39384;
  --card-action-hover: #6f5b49;
  --card-danger-hover: #b94d42;
  background:
    linear-gradient(180deg, rgba(255,253,249,0.98) 0%, rgba(249,244,236,0.98) 100%);
  border: 1px solid var(--card-border);
  border-radius: 26px;
  box-shadow:
    0 2px 10px var(--card-shadow),
    0 18px 40px rgba(88, 68, 46, 0.05);
  backdrop-filter: blur(6px);
  overflow: hidden;
}
.offline-card:hover {
  box-shadow:
    0 6px 18px var(--card-shadow-hover),
    0 24px 48px rgba(88, 68, 46, 0.08);
  transform: translateY(-3px);
}
.offline-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at top left, rgba(255,255,255,0.85), transparent 24%),
    radial-gradient(circle at bottom right, rgba(234,224,209,0.35), transparent 20%);
}
.offline-card__header {
  padding: 28px 30px 20px;
  background:
    linear-gradient(180deg, rgba(255,251,246,0.95) 0%, rgba(255,253,249,0.78) 100%);
  border-bottom: 1px solid rgba(232, 222, 209, 0.78);
}
.offline-card__floor {
  font-family: var(--card-floor-font);
  font-size: var(--card-floor-size);
  letter-spacing: 0.22em;
  color: var(--card-floor-color);
}
.offline-card__header-main {
  display: flex;
  align-items: center;
  gap: 16px;
}
.offline-card__avatar-shell {
  width: 48px;
  height: 48px;
  padding: 3px;
  border-radius: 999px;
  background:
    linear-gradient(180deg, #fffdfb 0%, #f2ebe2 100%);
  border: 1px solid rgba(228, 216, 200, 0.9);
  box-shadow:
    0 4px 12px rgba(90, 69, 45, 0.10),
    inset 0 1px 0 rgba(255,255,255,0.95);
}
.offline-card__avatar-frame {
  border-radius: 999px;
  overflow: hidden;
  background: #efe7de;
}
.offline-card__avatar-image,
.offline-card__avatar-fallback {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.offline-card__title-row {
  margin-bottom: 6px;
}
.offline-card__sender {
  font-family: var(--card-title-font);
  font-size: var(--card-title-size);
  font-weight: var(--card-title-weight);
  color: var(--card-title-color);
  letter-spacing: -0.01em;
  text-shadow: 0 1px 0 rgba(255,255,255,0.7);
}
.offline-card__meta-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.offline-card__time {
  font-family: var(--card-meta-font);
  font-size: var(--card-meta-size);
  font-weight: var(--card-meta-weight);
  color: var(--card-meta-color);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.offline-card__meta-dot {
  width: 3px;
  height: 3px;
  border-radius: 999px;
  background: #d6c7b7;
}
.offline-card__quote {
  font-family: var(--card-quote-font);
  font-size: var(--card-quote-size);
  color: var(--card-quote-color);
  font-style: italic;
}
.offline-card__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.offline-card__action-btn {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(225, 214, 200, 0.7);
  border-radius: 10px;
  background: rgba(255, 251, 246, 0.88);
  color: var(--card-action-color);
  box-shadow: 0 4px 10px rgba(88, 68, 46, 0.05);
  transition: all 0.2s ease;
}
.offline-card__action-btn:hover {
  transform: translateY(-1px);
  background: #fffdf9;
}
.offline-card__action-btn--edit:hover {
  color: var(--card-action-hover);
  border-color: rgba(181, 162, 141, 0.7);
}
.offline-card__action-btn--delete:hover {
  color: var(--card-danger-hover);
  border-color: rgba(212, 140, 130, 0.6);
  background: #fff7f5;
}
.offline-card__action-icon {
  width: var(--card-action-icon-size);
  height: var(--card-action-icon-size);
  stroke-width: 1.7;
}
.offline-card__body {
  padding: 22px 30px 24px;
  background:
    linear-gradient(180deg, rgba(255,253,250,0.82) 0%, rgba(250,246,240,0.58) 100%);
}
.offline-card__content {
  color: var(--card-body-color);
}
.offline-card__content-text {
  font-family: var(--card-body-font);
  font-size: var(--card-body-size);
  font-weight: var(--card-body-weight);
  line-height: var(--card-body-line-height);
  letter-spacing: var(--card-body-letter-spacing);
  color: var(--card-body-color);
  text-shadow: 0 1px 0 rgba(255,255,255,0.35);
}
.offline-card__content-text p {
  margin: 0 0 1em;
}
.offline-card__content-text strong,
.offline-card__content-text b {
  color: #2f241c;
  font-weight: 700;
}
.offline-card__content-text em,
.offline-card__content-text i {
  color: #7a6450;
}
.offline-card__content-text code {
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 0.92em;
  color: #8a4e3a;
  background: rgba(152, 107, 73, 0.08);
  border-radius: 6px;
  padding: 2px 6px;
}
.offline-card :deep(u) {
  text-decoration: none;
  border-bottom: 1px solid rgba(132, 111, 90, 0.5);
  padding-bottom: 1px;
}
.offline-card__textarea {
  font-family: var(--card-body-font);
  font-size: calc(var(--card-body-size) + 1px);
  line-height: var(--card-body-line-height);
  letter-spacing: var(--card-body-letter-spacing);
  color: var(--card-body-color);
}
.offline-card__editor-actions {
  border-top: 1px solid rgba(230, 220, 207, 0.75);
  margin-top: 18px;
  padding-top: 16px;
}
.offline-card__editor-btn {
  border-radius: 999px;
  transition: all 0.2s ease;
}
.offline-card__editor-btn--cancel {
  background: transparent;
  color: #9d8e7e;
}
.offline-card__editor-btn--cancel:hover {
  color: #5c4a3c;
}
.offline-card__editor-btn--save {
  background: linear-gradient(180deg, #4d3d31 0%, #2f241d 100%);
  color: #fdf9f2;
  box-shadow: 0 10px 20px rgba(56, 40, 27, 0.18);
}
.offline-card__editor-btn--save:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 24px rgba(56, 40, 27, 0.22);
}
\r.offline-card__continue-btn {\r  position: absolute;\r  top: 50%;\r  right: 28px;\r  width: 28px;\r  height: 28px;\r  border: 0;\r  border-radius: 8px;\r  background: transparent;\r  color: var(--card-action-color);\r  opacity: 0;\r  pointer-events: none;\r  transform: translateY(-50%);\r  transition: color .2s ease, background-color .2s ease, opacity .2s ease;\r}\r\r.offline-card:hover .offline-card__continue-btn {\r  opacity: 1;\r  pointer-events: auto;\r}\r\r.offline-card:hover .offline-card__footer-right {\r  opacity: 0;\r}\r\r.offline-card__continue-btn:hover {\r  color: var(--card-action-hover);\r  background: #f4f4f5;\r}
.offline-card__footer {
  padding: 14px 28px 16px;
  background:
    linear-gradient(180deg, rgba(248,243,236,0.72) 0%, rgba(245,239,232,0.96) 100%);
  border-top: 1px solid rgba(232, 222, 209, 0.82);
}
.offline-card__footer-line {
  width: 42px;
  height: 1px;
  background: linear-gradient(90deg, rgba(210,194,176,0.15), rgba(210,194,176,0.9));
}
.offline-card__footer-label {
  font-family: var(--card-footer-font);
  font-size: var(--card-footer-size);
  color: var(--card-footer-color);
  letter-spacing: 0.3em;
  text-transform: uppercase;
}
.offline-card__footer-right {
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255,255,255,0.36);
}
.offline-card__footer-status-dot {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: #98d8a7;
  box-shadow: 0 0 10px rgba(152, 216, 167, 0.55);
}
.offline-card__footer-metric {
  font-family: var(--card-footer-font);
  font-size: var(--card-footer-metric-size);
  color: var(--card-footer-color);
  letter-spacing: 0.12em;
}
@media (max-width: 640px) {
  .offline-card {
    border-radius: 24px;
  }
  .offline-card__header {
    padding: 24px 20px 18px;
  }
  .offline-card__body {
    padding: 18px 20px 20px;
  }
  .offline-card__footer {
    padding: 12px 20px 14px;
  }
  .offline-card__sender {
    font-size: 17px;
  }
  .offline-card__content-text {
    font-size: 16px;
    line-height: 2;
  }
}` },
    "09": { title: "Offline 底栏 / Chat Input 稳定钩子", text: '.offline-mode .border-t.border-zinc-100 {\n    background: rgba(255, 255, 255, 0.8) !important;\n    backdrop-filter: blur(20px);\n}\n.offline-mode textarea {\n    background: #f8f9fa !important;\n    border-radius: 24px !important;\n    border: 1px solid #eee !important;\n    font-size: 15px !important;\n    padding-left: 20px !important;\n}\n.offline-mode .bg-black {\n    background: #111 !important;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;\n}\n.offline-card__time {\n  flex-shrink: 0 !important;\n  font-family: "Inter", "Helvetica Neue", Arial, sans-serif !important;\n  font-size: 11px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.08em !important;\n  color: #a1a1aa !important;\n  text-transform: uppercase !important;\n}\n.offline-card__floor {\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace !important;\n  font-size: 11px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.22em !important;\n  color: rgba(212, 212, 216, 0.58) !important;\n}\n.offline-card__footer {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: space-between !important;\n  padding: 16px 28px !important;\n}\n.offline-card__footer-left,\n.offline-card__footer-right {\n  display: flex !important;\n  align-items: center !important;\n}\n.offline-card__footer-right {\n  gap: 8px !important;\n  padding: 2px 8px !important;\n  border-radius: 999px !important;\n}\n.offline-card__footer-line {\n  width: 40px !important;\n  height: 1px !important;\n  background: #e4e4e7 !important;\n}\n.offline-card__footer-label {\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace !important;\n  font-size: 10px !important;\n  letter-spacing: 0.28em !important;\n  color: #d4d4d8 !important;\n  text-transform: uppercase !important;\n}\n.offline-card__footer-status-dot {\n  width: 4px !important;\n  height: 4px !important;\n  border-radius: 999px !important;\n  background: rgba(74, 222, 128, 0.55) !important;\n  box-shadow: 0 0 10px rgba(74, 222, 128, 0.32) !important;\n}\n.offline-card__footer-metric {\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace !important;\n  font-size: 9px !important;\n  letter-spacing: 0.12em !important;\n  color: #d4d4d8 !important;\n}\ntextarea[placeholder="Type your thought..."] + button[title="Re-roll"] {\n  position: absolute !important;\n  right: 56px !important;\n  bottom: 12px !important;\n  padding: 8px !important;\n  color: #a1a1aa !important;\n  background: transparent !important;\n  border-radius: 999px !important;\n  transition: all 0.2s ease !important;\n}\ntextarea[placeholder="Type your thought..."] + button[title="Re-roll"]:hover {\n  color: #000000 !important;\n  background: #f4f4f5 !important;\n}\ntextarea[placeholder="Type your thought..."] + button[title="Re-roll"] svg {\n  width: 20px !important;\n  height: 20px !important;\n}\n.chat-input-bar {\n    padding: 12px 16px;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n.chat-input-plus {\n    width: 40px;\n    height: 40px;\n    border: none;\n    border-radius: 999px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #f4f4f5;\n    color: #71717a;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n    transition: all 0.2s ease;\n}\n.chat-input-plus:hover {\n    background: #e4e4e7;\n    color: #000;\n}\n.chat-input-field {\n    position: relative;\n    flex: 1;\n}\n.chat-input-textarea {\n    width: 100%;\n    height: 44px;\n    padding: 12px 48px 12px 20px;\n    border: none;\n    outline: none;\n    resize: none;\n    border-radius: 26px;\n    background: rgba(244, 244, 245, 0.6);\n    color: #18181b;\n    font-size: 15px;\n    line-height: 1.4;\n    transition: background 0.2s ease;\n    scrollbar-width: none;\n}\n.chat-input-textarea::placeholder {\n    color: #a1a1aa;\n}\n.chat-input-textarea:focus {\n    background: #f4f4f5;\n}\n.chat-input-textarea::-webkit-scrollbar {\n    display: none;\n}\n.chat-input-heart {\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 28px;\n    height: 28px;\n    border: none;\n    border-radius: 999px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    color: #d4d4d8;\n    transition: all 0.2s ease;\n}\n.chat-input-heart:hover {\n    background: rgba(228, 228, 231, 0.6);\n    color: #71717a;\n}\n.chat-input-send {\n    border: none;\n    background: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 1;\n    transition: opacity 0.2s ease;\n}\n.chat-input-send:disabled {\n    opacity: 0.35;\n    cursor: not-allowed;\n}\n.chat-input-send-icon {\n    width: 24px;\n    height: 24px;\n    color: #000;\n    transform: translate(-2px, -2px);\n}\n.chat-glass-surface {\n    position: sticky;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 50;\n    background: rgba(255, 255, 255, 0.95);\n    border-top: 1px solid #f3f4f6;\n    backdrop-filter: blur(12px);\n    -webkit-backdrop-filter: blur(12px);\n}' }
  };
  var CONDENSED = {
    "online.tokens": { sample: `:root{--chat-ui-ink: #111113;
  --chat-ui-muted: #8a8a93;
  --chat-ui-line: rgba(17, 17, 19, 0.08);
  --chat-ui-panel: rgba(255, 255, 255, 0.94);
  --chat-ui-soft: rgba(244, 244, 245, 0.74);
  --chat-ui-card-shadow: 0 18px 46px rgba(0, 0, 0, 0.10);}
:root{--chat-avatar-size-found: 34px;
  --chat-avatar-bubble-gap-found: 8px;
  --chat-message-row-gap-found: 8px;}
.chat-plus-action--offline-mode .chat-plus-action__icon,
[data-chat-plus-action="offline_mode"] .chat-plus-action__icon{background-image: url('替换为线下图标URL') !important;}` },
    "online.bg": { sample: 'main.chat-scroll-area .chat-message-row [class*="min-w-[220px]"][class*="border-black"][class*="text-white"]{border-radius: 28px !important;\n  background: linear-gradient(180deg, #111111 0%, #000000 100%) !important;\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22) !important;}\nmain.chat-scroll-area .chat-message-row :is(\n  [class*="w-[240px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="w-[260px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="min-w-[220px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]\n){width: 320px !important;\n  min-width: 320px !important;\n  max-width: 320px !important;\n  border-radius: 28px !important;\n  padding: 18px !important;\n  background: linear-gradient(180deg, #ffffff 0%, #f7f7fa 100%) !important;\n  border: 1px solid #e9e9ef !important;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important;}\nmain.chat-scroll-area .chat-message-row :is(\n  [class*="w-[240px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="w-[260px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="min-w-[220px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]\n) .font-bold{font-size: 14px !important;}\nmain.chat-scroll-area .chat-message-row [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]{width: 340px !important;\n  min-width: 340px !important;\n  max-width: 340px !important;\n  border-radius: 30px !important;}' },
    "online.header": { sample: ".chat-header-status-dot{width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  flex: 0 0 auto;}\n.chat-header-status-dot--idle{background: #34d399;\n  box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.16), 0 0 10px rgba(52, 211, 153, 0.75);}\n.chat-header-status-dot--busy{background: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.18), 0 0 10px rgba(245, 158, 11, 0.75);}\n.chat-header-status-dot--focus{background: #38bdf8;\n  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.18), 0 0 10px rgba(56, 189, 248, 0.75);}\n.chat-header-status-dot--sleep,\n.chat-header-status-dot--offline{background: #a1a1aa;\n  box-shadow: 0 0 0 3px rgba(161, 161, 170, 0.18), 0 0 8px rgba(161, 161, 170, 0.55);}\n.chat-header-online{color: var(--online-system-text-color) !important;\n  font-size: 9px !important;\n  letter-spacing: 0.15em !important;\n  font-weight: 600 !important;}\nheader.sticky.top-0{background: rgba(255, 255, 255, 0.85) !important;\n    backdrop-filter: blur(12px) !important;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;}\n.chat-header-button--back .chat-header-button__icon,\n.chat-header-button--search .chat-header-button__icon,\n.chat-header-button--settings .chat-header-button__icon{opacity: 0;}" },
    "online.msgrow": { sample: 'main.chat-scroll-area .chat-message-row [class*="min-w-[220px]"][class*="border-black"][class*="text-white"]{border-radius: 28px !important;\n  background: linear-gradient(180deg, #111111 0%, #000000 100%) !important;\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22) !important;}\nmain.chat-scroll-area .chat-message-row :is(\n  [class*="w-[240px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="w-[260px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="min-w-[220px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]\n){width: 320px !important;\n  min-width: 320px !important;\n  max-width: 320px !important;\n  border-radius: 28px !important;\n  padding: 18px !important;\n  background: linear-gradient(180deg, #ffffff 0%, #f7f7fa 100%) !important;\n  border: 1px solid #e9e9ef !important;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important;}\nmain.chat-scroll-area .chat-message-row :is(\n  [class*="w-[240px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="w-[260px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [class*="min-w-[220px]"][class*="bg-white"][class*="rounded-2xl"][class*="border"],\n  [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]\n) .font-bold{font-size: 14px !important;}\nmain.chat-scroll-area .chat-message-row [style*="width: 260px"][class*="rounded-[24px]"][class*="bg-white"]{width: 340px !important;\n  min-width: 340px !important;\n  max-width: 340px !important;\n  border-radius: 30px !important;}' },
    "online.bubble-me": { sample: '.bubble-sent{background: #222 !important;\n  color: #fff !important;}\n.bubble-tail-ios.bubble-sent::before{border-left-color: #222 !important;}\n.bubble-sent :is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation]),\n.chat-message--sent :is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation]){background: rgba(255, 255, 255, 0.12) !important;\n  border-color: rgba(255, 255, 255, 0.14) !important;\n  color: rgba(255, 255, 255, 0.88) !important;\n  box-shadow: none !important;}\n.bubble-sent{background-color: #000000 !important;\n    color: #FFFFFF !important;\n    border-radius: 18px 18px 4px 18px !important;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;}\n.bubble-sent div[class*="border-l-[2px]"]{border-left-color: #fbbf24 !important;\n    border-left-width: 3px !important;\n    background-color: rgba(255, 255, 255, 0.1);\n    padding: 6px 8px;\n    border-radius: 4px;}\n.bubble-sent div[class*="border-l-[2px]"] span:first-child{font-size: 10px !important;\n    color: #fbbf24 !important;}\n.bubble-received div[class*="border-l-[2px]"] span:last-child,\n.bubble-sent div[class*="border-l-[2px]"] span:last-child{font-size: 13px !important;\n    font-style: italic;\n    margin-top: 2px;\n    opacity: 0.8;}' },
    "online.bubble-you": { sample: '.bubble-received{background: #f3eee6 !important;\n  color: #2a2118 !important;}\n.bubble-tail-ios.bubble-received::before{border-right-color: #f3eee6 !important;}\n.bubble-received{background-color: #FFFFFF !important;\n    color: #111111 !important;\n    border-radius: 18px 18px 18px 4px !important;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.02) !important;}\n.bubble-received div[class*="border-l-[2px]"]{border-left-color: #3b82f6 !important;\n    border-left-width: 3px !important;\n    background-color: #f3f4f6;\n    padding: 6px 8px;\n    border-radius: 4px;}\n.bubble-received div[class*="border-l-[2px]"] span:first-child{font-size: 10px !important;\n    color: #3b82f6 !important;\n    text-transform: none;}\n.bubble-received div[class*="border-l-[2px]"] span:last-child,\n.bubble-sent div[class*="border-l-[2px]"] span:last-child{font-size: 13px !important;\n    font-style: italic;\n    margin-top: 2px;\n    opacity: 0.8;}' },
    "online.bubble-tail": { sample: ".bubble-tail-ios.bubble-sent::before{border-left-color: #222 !important;}\n.bubble-tail-ios.bubble-received::before{border-right-color: #f3eee6 !important;}" },
    "online.quote": { sample: '.reply-footer{position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #ffffff;\n    border-top: 1px solid #f4f4f5;\n    padding: 0.75rem 1rem;\n    padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    z-index:100;}\n.reply-input-wrapper{flex: 1;\n    background-color: #f4f4f5;\n    border-radius: 9999px;\n    padding: 0.5rem 1.25rem;\n    display: flex;\n    align-items: center;}\n.reply-field{width: 100%;\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 14px;\n    color: #000000;}\n.bubble-received div[class*="border-l-[2px]"]{border-left-color: #3b82f6 !important;\n    border-left-width: 3px !important;\n    background-color: #f3f4f6;\n    padding: 6px 8px;\n    border-radius: 4px;}\n.bubble-sent div[class*="border-l-[2px]"]{border-left-color: #fbbf24 !important;\n    border-left-width: 3px !important;\n    background-color: rgba(255, 255, 255, 0.1);\n    padding: 6px 8px;\n    border-radius: 4px;}\n.bubble-received div[class*="border-l-[2px]"] span:first-child{font-size: 10px !important;\n    color: #3b82f6 !important;\n    text-transform: none;}\n.bubble-sent div[class*="border-l-[2px]"] span:first-child{font-size: 10px !important;\n    color: #fbbf24 !important;}\n.bubble-received div[class*="border-l-[2px]"] span:last-child,\n.bubble-sent div[class*="border-l-[2px]"] span:last-child{font-size: 13px !important;\n    font-style: italic;\n    margin-top: 2px;\n    opacity: 0.8;}' },
    "online.time": { sample: ".offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .flex-1.overflow-y-auto .text-zinc-400{color: var(--offline-menu-muted) !important;}\n.chat-message-time{color: var(--online-system-text-color) !important;}\n.text-\\[9px\\].text-zinc-400{color: rgba(0,0,0,0.4) !important;}" },
    "online.input": { sample: ".chat-input-inner-voice-button{position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 9999px;\n  color: rgb(212 212 216);\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);}\n.chat-input-inner-voice-button:hover{background-color: rgb(228 228 231 / 0.5);\n  color: rgb(113 113 122);}\n.chat-input-inner-voice-button:disabled{cursor: not-allowed;\n  color: rgb(228 228 231);}\n.chat-input-inner-voice-button:disabled:hover{background-color: transparent;}\n.chat-input-inner-voice-button svg{width: 1.25rem;\n  height: 1.25rem;\n  fill: currentColor;}\n.chat-input-send-button:disabled{cursor: not-allowed;\n  opacity: 0.35;}\n.chat-input-send-button svg{position: relative;\n  right: 0.125rem;\n  bottom: 0.125rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #000;}\n.chat-input-bar{padding: 12px 16px;\n    display: flex;\n    align-items: center;\n    gap: 8px;}" },
    "online.plus": { sample: `.chat-plus-action--poll .chat-plus-action__icon,
[data-chat-plus-action="poll"] .chat-plus-action__icon{background-image: url('替换为投票图标URL') !important;}
.chat-plus-action--group-gift .chat-plus-action__icon,
[data-chat-plus-action="group_gift"] .chat-plus-action__icon{background-image: url('替换为群赠礼图标URL') !important;}
.chat-plus-action--audio-call .chat-plus-action__icon,
[data-chat-plus-action="audio_call"] .chat-plus-action__icon{background-image: url('替换为电话图标URL') !important;}
.chat-plus-action__icon{background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;}
.chat-plus-action--search .chat-plus-action__icon,
[data-chat-plus-action="search"] .chat-plus-action__icon{background-image: url('替换为搜索图标URL') !important;}
.chat-plus-action--sticker .chat-plus-action__icon,
[data-chat-plus-action="sticker"] .chat-plus-action__icon{background-image: url('替换为表情图标URL') !important;}
.chat-plus-action--gallery .chat-plus-action__icon,
[data-chat-plus-action="gallery"] .chat-plus-action__icon{background-image: url('替换为相册图标URL') !important;}
.chat-plus-action--camera .chat-plus-action__icon,
[data-chat-plus-action="camera"] .chat-plus-action__icon{background-image: url('替换为拍摄图标URL') !important;}` },
    "online.card-transfer": { sample: '.transfer-modal,\n.transfer-dialog,\n.transfer-sheet,\n[data-transfer-modal],\n[data-modal-type="transfer"],\n[data-dialog-type="transfer"],\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel):has([data-transfer-amount]),\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel):has(.transfer-amount){box-sizing: border-box !important;\n  width: min(390px, calc(100vw - 28px)) !important;\n  border-radius: 30px !important;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 250, 0.96) 100%) !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.22) !important;\n  overflow: hidden !important;}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-modal__header, .transfer-header, header){padding: 18px 22px 14px !important;\n  border-bottom: 1px solid rgba(17, 17, 19, 0.07) !important;\n  background: rgba(255, 255, 255, 0.58) !important;}\n:is(.transfer-modal, .transfer-dialog, .transfer-sheet, [data-transfer-modal], [data-modal-type="transfer"], [data-dialog-type="transfer"])\n  :is(.transfer-recipient, .transfer-modal__recipient, [data-transfer-recipient]){display: flex !important;\n  align-items: center !important;\n  gap: 10px !important;\n  padding: 12px 14px !important;\n  margin: 14px 18px 0 !important;\n  border-radius: 20px !important;\n  background: rgba(244, 244, 245, 0.72) !important;\n  color: #3f3f46 !important;}' },
    "online.card-media": { sample: `.chat-plus-action--location .chat-plus-action__icon,
[data-chat-plus-action="location"] .chat-plus-action__icon{background-image: url('替换为位置图标URL') !important;}` },
    "online.card-voice": { sample: "main.chat-scroll-area .chat-message-row div:has(> .voice-transcript-area){min-width: 190px !important;\n  border-radius: 24px !important;}\nmain.chat-scroll-area .chat-message-row .voice-transcript-area{padding-top: 10px !important;\n  padding-bottom: 12px !important;}\nmain.chat-scroll-area .chat-message-row .voice-transcript-area p{font-size: 14px !important;\n  line-height: 1.7 !important;}\n.chat-input-inner-voice-button{position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 9999px;\n  color: rgb(212 212 216);\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);}\n.chat-input-inner-voice-button:hover{background-color: rgb(228 228 231 / 0.5);\n  color: rgb(113 113 122);}\n.chat-input-inner-voice-button:disabled{cursor: not-allowed;\n  color: rgb(228 228 231);}\n.chat-input-inner-voice-button:disabled:hover{background-color: transparent;}\n.chat-input-inner-voice-button svg{width: 1.25rem;\n  height: 1.25rem;\n  fill: currentColor;}" },
    "online.card-sticker": { sample: `.chat-plus-action--sticker .chat-plus-action__icon,
[data-chat-plus-action="sticker"] .chat-plus-action__icon{background-image: url('替换为表情图标URL') !important;}` },
    "online.card-forward": { sample: ".forward-bundle-card__source{display: inline-flex !important;\n  align-items: center !important;\n  max-width: 100% !important;\n  padding: 4px 10px !important;\n  border-radius: 999px !important;\n  background: rgba(17, 17, 19, 0.06) !important;\n  color: var(--chat-ui-muted) !important;\n  font-size: 11px !important;\n  font-weight: 700 !important;}\n.forward-bundle-card__preview-list{display: grid !important;\n  gap: 8px !important;\n  margin-top: 12px !important;}\n.forward-bundle-card__preview-row{padding: 10px 12px !important;\n  border-radius: 16px !important;\n  background: var(--chat-ui-soft) !important;}\n.forward-bundle-card__preview-name{color: var(--chat-ui-muted) !important;\n  font-size: 11px !important;\n  font-weight: 700 !important;}\n.forward-bundle-card__preview-text{margin-top: 3px !important;\n  color: var(--chat-ui-ink) !important;\n  font-size: 13px !important;\n  line-height: 1.45 !important;}\n.forward-bundle-card__footer{margin-top: 12px !important;\n  padding-top: 12px !important;\n  border-top: 1px solid rgba(17, 17, 19, 0.07) !important;\n  color: var(--chat-ui-muted) !important;}" },
    "online.card-invite": { sample: `.chat-plus-action--listen-together .chat-plus-action__icon,
[data-chat-plus-action="listen_together"] .chat-plus-action__icon{background-image: url('替换为音乐图标URL') !important;}
.chat-plus-action--drip-invite .chat-plus-action__icon,
[data-chat-plus-action="drip_invite"] .chat-plus-action__icon{background-image: url('替换为羁绊图标URL') !important;}` },
    "online.card-notice": { sample: `.peer-pay-notice{width: 300px !important;
  border-radius: 28px !important;}
.chat-plus-action--video-call .chat-plus-action__icon,
[data-chat-plus-action="video_call"] .chat-plus-action__icon{background-image: url('替换为视频图标URL') !important;}` },
    "online.card-money": { sample: '.receipt-shell--peer-pay{border-color: rgba(59, 130, 246, 0.18) !important;}\n.checkout-card{width: 340px !important;\n  max-width: 340px !important;\n  border-radius: 28px !important;\n  background: linear-gradient(180deg, #fff 0%, #f7f7fa 100%) !important;\n  border: 1px solid #e9e9ef !important;\n  box-shadow: 0 12px 32px rgba(0,0,0,.08) !important;}\n.chat-card--family-card,\n[data-card-type="family_card"]{width: 244px !important;\n  max-width: min(244px, calc(100vw - 92px)) !important;\n  border-radius: 18px !important;\n  background: #ffffff !important;\n  border: 1px solid rgba(17, 17, 19, 0.10) !important;\n  box-shadow: 0 6px 18px rgba(24, 24, 27, 0.06) !important;\n  overflow: hidden !important;}\n.peer-pay-notice{width: 300px !important;\n  border-radius: 28px !important;}' },
    "online.receipt": { sample: ".receipt-shell{box-sizing: border-box !important;\n  width: min(420px, calc(100vw - 32px)) !important;\n  max-height: min(82vh, 720px) !important;\n  border-radius: 30px !important;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 249, 251, 0.98) 100%) !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18) !important;\n  overflow: hidden !important;}\n.receipt-shell--gift{border-color: rgba(244, 114, 182, 0.20) !important;}\n.receipt-shell--peer-pay{border-color: rgba(59, 130, 246, 0.18) !important;}\n.receipt-header{padding: 22px 24px 16px !important;\n  border-bottom: 1px dashed rgba(17, 17, 19, 0.12) !important;\n  background: rgba(255, 255, 255, 0.72) !important;}\n.receipt-items{padding: 16px 24px !important;}\n.receipt-items > * + *{border-top: 1px solid rgba(17, 17, 19, 0.06) !important;}\n.receipt-totals{padding: 14px 24px !important;\n  background: rgba(244, 244, 245, 0.55) !important;}\n.receipt-grand-total{font-size: 24px !important;\n  font-weight: 900 !important;\n  letter-spacing: -0.02em !important;}" },
    "online.translation": { sample: '.bubble-sent :is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation]),\n.chat-message--sent :is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation]){background: rgba(255, 255, 255, 0.12) !important;\n  border-color: rgba(255, 255, 255, 0.14) !important;\n  color: rgba(255, 255, 255, 0.88) !important;\n  box-shadow: none !important;}\n:is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation])\n  :is(.translation-card__header, .translation-header, .translate-header){display: flex !important;\n  align-items: center !important;\n  justify-content: space-between !important;\n  gap: 10px !important;\n  margin-bottom: 6px !important;\n  color: var(--chat-ui-muted) !important;\n  font-size: 11px !important;\n  font-weight: 800 !important;}\n:is(.translation-card, .translation-panel, .translate-panel, .message-translation, .chat-translation, .bubble-translation, [data-translation], [data-message-translation])\n  :is(.translation-card__text, .translation-text, .translate-text, p){margin: 0 !important;\n  font-size: 13px !important;\n  line-height: 1.65 !important;\n  word-break: break-word !important;}\nbutton[title*="翻译"],\nbutton[aria-label*="翻译"],\nbutton[title*="Translate"],\nbutton[aria-label*="Translate"],\n.translate-button,\n.translation-button{min-width: 32px !important;\n  min-height: 32px !important;\n  border-radius: 999px !important;\n  border: 1px solid rgba(17, 17, 19, 0.08) !important;\n  background: rgba(255, 255, 255, 0.86) !important;\n  color: #52525b !important;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06) !important;\n  transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease !important;}' },
    "online.overlay": { sample: ".typing-dot{animation: typing 1.4s infinite ease-in-out both;}\n.typing-dot:nth-child(1){animation-delay: -0.32s;}\n.typing-dot:nth-child(2){animation-delay: -0.16s;}\n.chat-other-unread-badge:active{transform: scale(0.96) !important;}\n.chat-other-unread-badge-enter-active,\n.chat-other-unread-badge-leave-active{transition: opacity 0.16s ease, transform 0.16s ease !important;}\n.chat-other-unread-badge-enter-from,\n.chat-other-unread-badge-leave-to{opacity: 0 !important;\n  transform: scale(0.85) !important;}\n.conv-preview.unread{color: #000000;}\n.unread-badge{min-width: 18px;\n    height: 18px;\n    background-color: #000000;\n    border-radius: 9999px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 0.25rem;\n    margin-left: 0.5rem;}" },
    "global.tokens": { sample: ":root{--chat-ui-ink: #111113;\n  --chat-ui-muted: #8a8a93;\n  --chat-ui-line: rgba(17, 17, 19, 0.08);\n  --chat-ui-panel: rgba(255, 255, 255, 0.94);\n  --chat-ui-soft: rgba(244, 244, 245, 0.74);\n  --chat-ui-card-shadow: 0 18px 46px rgba(0, 0, 0, 0.10);}\n:root{--chat-avatar-size-found: 34px;\n  --chat-avatar-bubble-gap-found: 8px;\n  --chat-message-row-gap-found: 8px;}" },
    "global.desktop": { sample: ".square-app-btn{display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;}\n.app-icon-bg{width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s ease;}\n.app-label{font-size: 10px;\n  font-weight: 600;\n  margin-top: 6px;\n  color: #888;\n  letter-spacing: 0.02em;}\n.dock-icon-btn{width: 64px;\n  height: 64px;\n  background: #fff;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);\n  transition: transform 0.2s ease;\n  flex-shrink: 0;}\n.app-label{font-size: 10px;\n    font-weight: 600;\n    margin-top: 6px;\n    color: #888;\n    letter-spacing: 0.02em;}" },
    "global.feed": { sample: ".post-item{position: relative;\n    padding: 1rem 1.5rem;\n    border-bottom: 1px solid #f9f9f9;\n    display: flex;\n    gap: 1rem;\n    background-color: #ffffff;}\n.post-avatar-small{width: 40px;\n    height: 40px;\n    border-radius: 9999px;\n    background-color: #f4f4f5;\n    border: 1px solid #e4e4e7;\n    overflow: hidden;}\n.post-author-name{font-size: 15px;\n    font-weight: 700;\n    color: #000000;}\n.post-timestamp{color: #a1a1aa;\n    font-size: 14px;\n    margin-left: 0.25rem;}\n.post-body{font-size: 15px;\n    color: #000000;\n    line-height: 1.625;\n    word-break: break-all;\n    white-space: pre-wrap;\n    margin-top: 0.25rem;}\n.post-actions{display: flex;\n    align-items: center;\n    gap: 1.5rem;\n    margin-top: 0.75rem;\n    color: #000000;}\n.post-action-unit{display: flex;\n    align-items: center;\n    gap: 0.375rem;\n    font-size: 14px;\n    font-weight: 400;}\n.post-action-unit svg{width: 20px;\n    height: 20px;\n    stroke-width: 1.1px;}" },
    "global.list": { sample: ".inbox-current-list-avatar,\nmain.flex-1.overflow-y-auto > div.flex.items-center > div.relative.flex.items-center > div.absolute > div.size-14{width: 3.5rem !important;\n  height: 3.5rem !important;\n  border-radius: 9999px !important;\n  flex-shrink: 0 !important;\n  overflow: hidden !important;\n  border: 1px solid #f5f5f5 !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;\n  background-size: cover !important;\n  background-position: center !important;}\n.avatar-abstract{background: linear-gradient(45deg, #000 0%, #333 100%);\n  position: relative;\n  overflow: hidden;}\n.avatar-abstract::after{content: '';\n  position: absolute;\n  top: 50%;\n  left: -50%;\n  width: 200%;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.20);\n  transform: rotate(45deg);}\n.inbox-header{position: sticky;\n    top: 0;\n    z-index: 50;\n    background-color: rgba(255, 255, 255, 0.9);\n    backdrop-filter: blur(20px);\n    border-bottom: 1px solid rgba(229, 231, 235, 0.5);\n    padding: 0.625rem 1.5rem 1rem;}\n.inbox-title{font-size: 13px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.25em;\n    color: #000000;}\n.conversation-item{display: flex;\n    align-items: center;\n    padding: 1.25rem 1.5rem;\n    background-color: #ffffff;\n    border-bottom: 1px solid #f9f9f9;\n    cursor: pointer;\n    transition: background-color 0.2s;}\n.conversation-item:hover{background-color: #fafafa;}\n.conversation-avatar{width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 9999px;\n    flex-shrink: 0;\n    margin-right: 1rem;\n    background-color: #171717;\n    border: 1px solid #f4f4f5;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n    background-size: cover;\n    background-position: center;}" },
    "global.nav": { sample: ".tab-item{flex: 1 1 0%;\n    padding: 0.75rem 0;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center;\n    border-bottom: 1.5px solid transparent;\n    transition: color 0.2s, border-color 0.2s;\n    background: none;\n    border: none;\n    cursor: pointer;}\n.tab-item.active{border-bottom-color: #000000;\n    color: #000000;}\n.tab-item.inactive{color: #a1a1aa;}\n.bottom-nav{position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    padding-bottom: env(safe-area-inset-bottom);\n    background-color: #ffffff;\n    border-top: 1px solid #f4f4f5;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    z-index: 50;}\n.floating-api-toggle{display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 1rem;\n    background: #ffffff;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.08);\n    border-radius: 9999px;\n    position: absolute;\n    bottom: 80px;\n    left: 16px;\n    z-index: 60;}" },
    "global.dialog": { sample: '.modal-overlay,\n.dialog-overlay,\n.modal-backdrop,\n.dialog-backdrop,\n[data-modal-overlay],\n[data-dialog-overlay]{background: rgba(10, 10, 12, 0.34) !important;\n  backdrop-filter: blur(18px) saturate(1.08) !important;\n  -webkit-backdrop-filter: blur(18px) saturate(1.08) !important;}\n:is(.modal-shell, .modal-content, .modal-card, .dialog-content, .dialog-panel, [role="dialog"], [data-modal], [data-dialog]){border-radius: 30px !important;\n  background: var(--chat-ui-panel) !important;\n  border: 1px solid rgba(255, 255, 255, 0.72) !important;\n  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.22) !important;\n  backdrop-filter: blur(24px) saturate(1.08) !important;\n  -webkit-backdrop-filter: blur(24px) saturate(1.08) !important;\n  color: var(--chat-ui-ink) !important;\n  overflow: hidden !important;}\n:is(.modal-header, .dialog-header, .modal-content header, .dialog-content header){border-bottom: 1px solid rgba(17, 17, 19, 0.07) !important;\n  background: rgba(255, 255, 255, 0.52) !important;}\n:is(.modal-footer, .dialog-footer, .modal-content footer, .dialog-content footer){border-top: 1px solid rgba(17, 17, 19, 0.07) !important;\n  background: rgba(250, 250, 251, 0.76) !important;}\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel, [role="dialog"])\n  :is(input, textarea, select){border-radius: 18px !important;\n  border: 1px solid rgba(17, 17, 19, 0.09) !important;\n  background: rgba(244, 244, 245, 0.76) !important;\n  color: var(--chat-ui-ink) !important;\n  outline: none !important;}' },
    "global.typo": { sample: ".chat-scroll-area::-webkit-scrollbar{width: 7px;}\n.chat-scroll-area::-webkit-scrollbar-track{background: transparent;}\n.chat-scroll-area::-webkit-scrollbar-thumb{background-color: rgba(24, 24, 27, 0.18);\n  border-radius: 999px;\n  border: 2px solid transparent;\n  background-clip: padding-box;}\n.chat-scroll-area::-webkit-scrollbar-thumb:hover{background-color: rgba(24, 24, 27, 0.32);}\n.chat-input-textarea::-webkit-scrollbar{display: none;}" },
    "offline.tokens": { sample: "" },
    "offline.card-tokens": { sample: "" },
    "offline.card-chrome": { sample: '.offline-card:hover{box-shadow:\n    0 6px 18px var(--card-shadow-hover),\n    0 24px 48px rgba(88, 68, 46, 0.08);\n  transform: translateY(-3px);}\n.offline-card::before{content: "";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background:\n    radial-gradient(circle at top left, rgba(255,255,255,0.85), transparent 24%),\n    radial-gradient(circle at bottom right, rgba(234,224,209,0.35), transparent 20%);}\n.offline-card__header{padding: 28px 30px 20px;\n  background:\n    linear-gradient(180deg, rgba(255,251,246,0.95) 0%, rgba(255,253,249,0.78) 100%);\n  border-bottom: 1px solid rgba(232, 222, 209, 0.78);}\n.offline-card__floor{font-family: var(--card-floor-font);\n  font-size: var(--card-floor-size);\n  letter-spacing: 0.22em;\n  color: var(--card-floor-color);}\n.offline-card__header-main{display: flex;\n  align-items: center;\n  gap: 16px;}\n.offline-card__avatar-shell{width: 48px;\n  height: 48px;\n  padding: 3px;\n  border-radius: 999px;\n  background:\n    linear-gradient(180deg, #fffdfb 0%, #f2ebe2 100%);\n  border: 1px solid rgba(228, 216, 200, 0.9);\n  box-shadow:\n    0 4px 12px rgba(90, 69, 45, 0.10),\n    inset 0 1px 0 rgba(255,255,255,0.95);}\n.offline-card__avatar-frame{border-radius: 999px;\n  overflow: hidden;\n  background: #efe7de;}\n.offline-card__avatar-image,\n.offline-card__avatar-fallback{width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;}' },
    "offline.card-body": { sample: '.offline-card__floor{font-family: var(--card-floor-font);\n  font-size: var(--card-floor-size);\n  letter-spacing: 0.22em;\n  color: var(--card-floor-color);}\n.offline-card__quote{font-family: var(--card-quote-font);\n  font-size: var(--card-quote-size);\n  color: var(--card-quote-color);\n  font-style: italic;}\n.offline-card__content{color: var(--card-body-color);}\n.offline-card__content-text{font-family: var(--card-body-font);\n  font-size: var(--card-body-size);\n  font-weight: var(--card-body-weight);\n  line-height: var(--card-body-line-height);\n  letter-spacing: var(--card-body-letter-spacing);\n  color: var(--card-body-color);\n  text-shadow: 0 1px 0 rgba(255,255,255,0.35);}\n.offline-card__content-text p{margin: 0 0 1em;}\n.offline-card__content-text strong,\n.offline-card__content-text b{color: #2f241c;\n  font-weight: 700;}\n.offline-card__content-text em,\n.offline-card__content-text i{color: #7a6450;}\n.offline-card__content-text code{font-family: "SFMono-Regular", Consolas, monospace;\n  font-size: 0.92em;\n  color: #8a4e3a;\n  background: rgba(152, 107, 73, 0.08);\n  border-radius: 6px;\n  padding: 2px 6px;}' },
    "offline.sidebar": { sample: ".offline-mode .absolute.inset-0.z-50.flex.justify-end{background: transparent !important;}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .flex-1.bg-transparent{background: rgba(0, 0, 0, 0) !important;}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full{width: var(--offline-menu-width) !important;\n  background: var(--offline-menu-bg) !important;\n  border-left: 1px solid var(--offline-menu-border) !important;\n  box-shadow: var(--offline-menu-shadow) !important;}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6{padding: calc(16px + env(safe-area-inset-top)) 24px 18px !important;\n  border-bottom: 1px solid var(--offline-menu-border) !important;\n  background: var(--offline-menu-bg) !important;}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 .font-serif{color: var(--offline-menu-title-color) !important;\n  font-size: 18px !important;\n  font-weight: 700 !important;}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 button{width: 34px !important;\n  height: 34px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 999px !important;\n  color: var(--offline-menu-muted) !important;\n  transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease !important;}\n.offline-mode .absolute.inset-0.z-50.flex.justify-end > .w-64.h-full > .p-6 button:hover{background: var(--offline-menu-hover-bg) !important;\n  color: var(--offline-menu-title-color) !important;}" },
    "offline.form": { sample: '.chat-input-inner-voice-button{position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 9999px;\n  color: rgb(212 212 216);\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);}\n.chat-input-inner-voice-button:hover{background-color: rgb(228 228 231 / 0.5);\n  color: rgb(113 113 122);}\n.chat-input-inner-voice-button:disabled{cursor: not-allowed;\n  color: rgb(228 228 231);}\n.chat-input-inner-voice-button:disabled:hover{background-color: transparent;}\n.chat-input-inner-voice-button svg{width: 1.25rem;\n  height: 1.25rem;\n  fill: currentColor;}\n.chat-input-send-button:disabled{cursor: not-allowed;\n  opacity: 0.35;}\n.chat-input-send-button svg{position: relative;\n  right: 0.125rem;\n  bottom: 0.125rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #000;}\n:is(.modal-shell, .modal-content, .dialog-content, .dialog-panel, [role="dialog"])\n  :is(input, textarea, select){border-radius: 18px !important;\n  border: 1px solid rgba(17, 17, 19, 0.09) !important;\n  background: rgba(244, 244, 245, 0.76) !important;\n  color: var(--chat-ui-ink) !important;\n  outline: none !important;}' }
  };

  // src/core/prompts.js
  var HARD_RULES = [
    "只改视觉，不改 DOM 结构与交互；不新增 class，只覆盖宿主已有选择器。",
    "气泡（.bubble-sent / .bubble-received）禁止写 border-radius / width / max-width / padding / margin / gap —— 这些是「聊天外观」设置里的内联值。",
    "尾巴只能改三角颜色（.bubble-tail-ios 的 ::before 的 border-*-color），形状、尺寸、位置不动。",
    "改了气泡底色，必须同时给出尾巴三角颜色，否则 iOS 尾巴会脱色。",
    "图片只能用素材库登记的外链，写成 var(--ss-img-<名字>)；禁止 base64 内嵌。",
    "禁止 backdrop-filter；filter 尽量不用；禁止 * 通配选择器、nth-child、[class*=]。",
    "变量统一 --ss- 前缀；引用前必须在同一作用域的令牌分支里定义。"
  ];
  var FULL_FALLBACK = "(该部位暂无对应参考小节，请只依据硬规则作答)";
  var DEFAULT_CFG = {
    injectHooks: false,
    injectExisting: false,
    refMode: "condensed",
    presetId: ""
  };
  function cfgOf2(ctx) {
    if (ctx && ctx.cfg) return Object.assign({}, DEFAULT_CFG, ctx.cfg);
    return Object.assign({}, DEFAULT_CFG, {
      refMode: ctx && ctx.mode ? ctx.mode : "condensed"
    });
  }
  function cssLineCount(css) {
    if (!css || !css.trim()) return 0;
    return css.split("\n").filter(function(l) {
      return l.trim();
    }).length;
  }
  function fullReference(branchIds) {
    const hit = Object.keys(SECTION_BRANCHES).filter(function(sec) {
      return SECTION_BRANCHES[sec].some(function(id) {
        return branchIds.indexOf(id) > -1;
      });
    });
    if (!hit.length) return FULL_FALLBACK;
    hit.sort();
    const parts = [];
    let budget = 26e3;
    hit.forEach(function(sec) {
      const s = SECTIONS[sec];
      if (!s) return;
      const chunk = "/* ── 整理版 " + sec + " " + s.title + " ── */\n" + s.text;
      if (budget - chunk.length < 0) return;
      budget -= chunk.length;
      parts.push(chunk);
    });
    return parts.join("\n\n") || FULL_FALLBACK;
  }
  function condensedOf(branchId, limit) {
    const item = CONDENSED[branchId];
    if (!item || !item.sample) return "";
    const max = limit || 900;
    return item.sample.length > max ? item.sample.slice(0, max) + "\n/* …省略… */" : item.sample;
  }
  function branchLine(id, branches) {
    const def = getBranch(id) || {};
    const data = branches[id] || {};
    const lines = cssLineCount(data.css);
    return "- " + id + "（" + labelOf(id) + "，" + (lines ? lines + " 行" : "空") + "）" + (def.locked ? "［只读，不要输出此分支］" : "") + (data.enabled === false ? "［当前已关闭］" : "");
  }
  function referenceBlock(branchIds, refMode) {
    if (refMode === "off" || !refMode) return "";
    const out = [];
    if (refMode === "full") {
      out.push("【参考 · 完整小节（来自《全部 css 整理版》，可对照写法，但要按硬规则筛掉旧版/高风险选择器）】");
      out.push(fullReference(branchIds));
      return out.join("\n");
    }
    out.push("【参考 · 各部位典型写法（摘自《全部 css 整理版》，仅作风格参照，不要照抄旧版结构）】");
    branchIds.forEach(function(id) {
      const sample = condensedOf(id, branchIds.length > 6 ? 600 : 1100);
      if (!sample) return;
      out.push("/* " + id + " · " + labelOf(id) + " */");
      out.push(sample);
    });
    return out.join("\n");
  }
  function estimateTokens(text) {
    const s = String(text || "");
    let cjk = 0;
    for (let i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) > 255) cjk += 1;
    }
    const ascii = s.length - cjk;
    return Math.round(cjk + ascii / 4);
  }
  function presetBlock(presets, presetId) {
    if (!presetId || !presets) return "";
    const hit = presets.find(function(p) {
      return p.id === presetId;
    });
    if (!hit || !hit.text || !hit.text.trim()) return "";
    return "【自定义要求 · " + hit.name + "】\n" + hit.text.trim();
  }
  function buildPrompt(nodeId, ctx) {
    const branches = ctx && ctx.branches || {};
    const cfg = cfgOf2(ctx);
    const presets = ctx && ctx.presets || [];
    const node = getNode(nodeId) || getNode("plan");
    const scope = scopeOf(node.id);
    const targets = branchIdsOf(node.id);
    const parts = [];
    if (node.type === "plan") {
      parts.push("你是 Roche（小手机）的外观设计总监。这是「风格规划」对话，不直接产出部位 CSS。");
      parts.push([
        "你的任务是和用户把整套美化的设计语言定下来，并输出可执行的规范：",
        "1. 设计语言三句话：材质、排版、留白。",
        "2. 令牌规范：列出建议的 --ss-* 变量（纸面/墨色/强调色/线/圆角），并给日夜两套值。",
        "3. 命名与边界：哪些部位归线上 / 线下 / 全局，哪些碰不得（气泡圆角、尾巴形状、头像间距）。",
        "4. 验收清单：3–6 条能一眼判断对错的检查项。",
        "5. 落地顺序：先写令牌，再写气泡与顶栏，最后写卡片与线下。"
      ].join("\n"));
      parts.push("需要给令牌代码时，按【分支】online.tokens 输出 CSS；其余情况用自然语言回答，不要输出 CSS 代码块。");
      parts.push("【输出格式】给代码时：\n【判断】…\n【分支】online.tokens\n【模式】REPLACE\n【CSS】\n```css\n…\n```\n【说明】…");
      const pre = presetBlock(presets, cfg.presetId);
      if (pre) parts.push(pre);
      return parts.join("\n\n");
    }
    parts.push("你是 Roche（小手机）的外观皮肤工程师。Roche 是纯前端移动应用，用户把 CSS 粘贴进「美化」面板生效。只输出 CSS，不写 JS/HTML。");
    parts.push("【当前对话】" + breadcrumb(node.id) + "（" + SCOPE_LABEL[scope] + "）\n" + (node.type === "branch" ? "这是一个「单个部位」对话：只改这一个分支。" : "这是一个「" + node.label + "」对话，覆盖 " + targets.length + " 个分支，可以一次写多个部位。"));
    parts.push("【目标分支】\n" + targets.map(function(id) {
      return branchLine(id, branches);
    }).join("\n"));
    if (cfg.injectHooks) {
      parts.push("【可用钩子 · " + SCOPE_LABEL[scope] + "】\n" + hooksForScope(scope) + "\n\n【宿主 CSS 变量（可直接赋值）】\n" + HOST_VARS.join(", "));
    }
    parts.push("【硬规则】\n" + HARD_RULES.map(function(r, i) {
      return i + 1 + ". " + r;
    }).join("\n"));
    const ref = referenceBlock(targets, cfg.refMode);
    if (ref) parts.push(ref);
    if (cfg.injectExisting) {
      const existing = targets.filter(function(id) {
        const b = branches[id];
        return b && b.css && b.css.trim();
      });
      if (existing.length) {
        const blocks = existing.slice(0, 4).map(function(id) {
          return "/* " + id + " */\n" + branches[id].css.trim();
        });
        parts.push("【目标分支现有 CSS（在此基础上改）】\n" + blocks.join("\n\n"));
        if (existing.length > 4) parts.push("（其余 " + (existing.length - 4) + " 个分支已有内容，未全部展开）");
      }
    }
    const preset = presetBlock(presets, cfg.presetId);
    if (preset) parts.push(preset);
    const isMulti = targets.length > 1;
    parts.push([
      "【输出协议 · 必须严格遵守】",
      isMulti ? "可以一次输出多个部位：每个部位用一组【分支】+【CSS】，连续写多组；最后统一给【说明】。" : "只输出当前这一个部位的一段 CSS。",
      "",
      "【判断】一句话",
      "【分支】" + (targets[0] || "online.bubble-me"),
      "【模式】REPLACE",
      "【CSS】",
      "```css",
      "…",
      "```",
      isMulti ? "【分支】" + (targets[1] || "online.bubble-tail") + "\n【CSS】\n```css\n…\n```" : "",
      "【说明】不超过 3 行",
      "【下一步】可选",
      "",
      "要求：",
      "- 每个【分支】后紧跟且只跟一个 ```css 代码块；",
      "- 【分支】只能填上面列出的目标分支 id；",
      "- 不需要改的分支就不要输出；",
      "- 用户只是聊天、不需要改样式时，不要输出 CSS 代码块。"
    ].filter(function(l) {
      return l !== "";
    }).join("\n"));
    return parts.join("\n\n");
  }
  function targetSummary(nodeId, branches) {
    const ids = branchIdsOf(nodeId);
    return ids.map(function(id) {
      return {
        id,
        label: labelOf(id),
        lines: cssLineCount((branches[id] || {}).css),
        disabled: (branches[id] || {}).enabled === false
      };
    });
  }

  // src/core/aiProtocol.js
  var BRANCH_TAG = /【分支】\s*([^\n\r【]+)/g;
  var MODE_TAG = /【模式】\s*([^\n\r【]+)/;
  var NOTE_TAG = /【说明】\s*([\s\S]*?)(?=【|$)/;
  var NEXT_TAG = /【下一步】\s*([\s\S]*?)(?=【|$)/;
  var JUDGE_TAG = /【判断】\s*([\s\S]*?)(?=【|$)/;
  function pickCodeBlock(text) {
    const re = /```(?:css|CSS|scss)?\s*\n([\s\S]*?)```/g;
    let m;
    let best = "";
    while (m = re.exec(text)) {
      if (m[1].length > best.length) best = m[1];
    }
    return best.trim();
  }
  function pickFirstCodeBlock(text) {
    const re = /```(?:css|CSS|scss)?\s*\n([\s\S]*?)```/;
    const m = re.exec(text);
    return m ? m[1].trim() : "";
  }
  function resolveBranch(raw, fallbackId) {
    const s = String(raw || "").trim().replace(/[。，,.\s]+$/, "");
    if (!s) return fallbackId || "";
    if (getBranch(s)) return s;
    const lower = s.toLowerCase();
    for (let i = 0; i < BRANCHES.length; i++) {
      if (BRANCHES[i].id.toLowerCase() === lower) return BRANCHES[i].id;
      if (BRANCHES[i].name === s) return BRANCHES[i].id;
    }
    if (ALIASES[s]) return ALIASES[s];
    if (ALIASES[lower]) return ALIASES[lower];
    const parts = s.split(/[\/／|·]/);
    const tail = parts[parts.length - 1].trim();
    if (ALIASES[tail]) return ALIASES[tail];
    if (getBranch(tail)) return tail;
    return fallbackId || "";
  }
  function normalizeMode(raw, fallback) {
    const s = String(raw || fallback || "REPLACE").toUpperCase();
    return s.indexOf("APPEND") > -1 || s.indexOf("追加") > -1 ? "APPEND" : "REPLACE";
  }
  function stripProtocol(text) {
    return String(text || "").replace(/【分支】[^\n\r]*/g, "").replace(/【模式】[^\n\r]*/g, "").replace(/【CSS】/g, "").replace(/```[\s\S]*?```/g, "").replace(/【说明】[\s\S]*?(?=【|$)/g, "").replace(/【下一步】[\s\S]*?(?=【|$)/g, "").replace(/【判断】/g, "").replace(/\n{3,}/g, "\n\n").trim();
  }
  function parseReply(text, fallbackBranchId) {
    const raw = String(text || "");
    const marks = [];
    BRANCH_TAG.lastIndex = 0;
    let m;
    while (m = BRANCH_TAG.exec(raw)) {
      marks.push({ index: m.index, end: m.index + m[0].length, raw: m[1].trim() });
    }
    const noteM = NOTE_TAG.exec(raw);
    const nextM = NEXT_TAG.exec(raw);
    const judgeM = JUDGE_TAG.exec(raw);
    const globalMode = MODE_TAG.exec(raw);
    const parts = [];
    if (!marks.length) {
      const css = pickCodeBlock(raw);
      if (css) {
        parts.push({
          branchId: resolveBranch("", fallbackBranchId),
          mode: normalizeMode(globalMode && globalMode[1], "REPLACE"),
          css
        });
      }
    } else {
      for (let i = 0; i < marks.length; i++) {
        const seqStart = marks[i].end;
        const seqEnd = i + 1 < marks.length ? marks[i + 1].index : raw.length;
        const slice = raw.slice(seqStart, seqEnd);
        const css = pickFirstCodeBlock(slice) || pickCodeBlock(slice);
        const localMode = MODE_TAG.exec(slice);
        parts.push({
          branchId: resolveBranch(marks[i].raw, fallbackBranchId),
          // 每段的模式只看自己那一段；没写就是 REPLACE（避免前面某段的模式污染后面）
          mode: normalizeMode(localMode && localMode[1], "REPLACE"),
          css
        });
      }
    }
    const valid = parts.filter(function(p) {
      return p.branchId && p.css;
    });
    const head = judgeM ? judgeM[1].trim() : "";
    const body = stripProtocol(raw);
    const chat = [head, body].filter(Boolean).join("\n\n").trim();
    return {
      chat: chat || (valid.length ? "已生成 CSS，见下方代码卡。" : raw.trim()),
      parts: valid,
      allParts: parts,
      note: noteM ? noteM[1].trim() : "",
      next: nextM ? nextM[1].trim() : "",
      complete: valid.length > 0
    };
  }

  // src/core/lint.js
  var BUBBLE_RE = /\.bubble-(sent|received)/;
  var BANNED_ON_BUBBLE = ["border-radius", "width", "max-width", "padding", "margin", "gap"];
  var LAYOUT_PROPS = ["width", "height", "padding", "margin", "gap", "position", "top", "left", "right", "bottom"];
  function stripComments(css) {
    return String(css || "").replace(/\/\*[\s\S]*?\*\//g, "");
  }
  function splitRules(css) {
    const clean = stripComments(css);
    const rules = [];
    let i = 0;
    let depth = 0;
    let start = 0;
    let selectorStart = 0;
    while (i < clean.length) {
      const ch = clean[i];
      if (ch === "{") {
        if (depth === 0) {
          const selector = clean.slice(selectorStart, i).trim();
          const bodyStart = i + 1;
          let d = 1;
          let j = bodyStart;
          while (j < clean.length && d > 0) {
            if (clean[j] === "{") d += 1;
            else if (clean[j] === "}") d -= 1;
            j += 1;
          }
          const body = clean.slice(bodyStart, j - 1);
          rules.push({ selector, body });
          i = j;
          selectorStart = i;
          continue;
        }
      }
      i += 1;
    }
    return rules;
  }
  function declsOf(body) {
    return String(body || "").split(";").map(function(d) {
      return d.trim();
    }).filter(Boolean).map(function(d) {
      const idx = d.indexOf(":");
      if (idx < 0) return null;
      return {
        prop: d.slice(0, idx).trim().toLowerCase(),
        value: d.slice(idx + 1).replace(/!important/g, "").trim()
      };
    }).filter(Boolean);
  }
  function cssClasses(selector) {
    const out = [];
    const re = /\.([A-Za-z_][\w-]*)/g;
    let m;
    while (m = re.exec(selector)) out.push(m[1]);
    return out;
  }
  function lint(css, opts) {
    const options = opts || {};
    const text = stripComments(css);
    const errors = [];
    const warnings = [];
    const stats = { rules: 0, important: 0, urls: 0, classes: 0 };
    if (!text.trim()) {
      return { errors, warnings, stats, ok: true };
    }
    const open = (text.match(/\{/g) || []).length;
    const close = (text.match(/\}/g) || []).length;
    if (open !== close) {
      errors.push("大括号不配对（" + open + " 个 { / " + close + " 个 }），粘贴到美化面板会整段失效");
    }
    const dq = (text.match(/"/g) || []).length;
    if (dq % 2 !== 0) warnings.push("双引号数量为奇数，可能有未闭合的字符串");
    stats.important = (text.match(/!important/g) || []).length;
    if (stats.important > 40) warnings.push("!important 用了 " + stats.important + " 次，过多会拖累覆盖顺序");
    const rules = splitRules(text);
    stats.rules = rules.length;
    const def = options.branchId ? getBranch(options.branchId) : null;
    const bubbleHit = [];
    let touchedBubbleBg = false;
    rules.forEach(function(rule) {
      const sel = rule.selector;
      const decls = declsOf(rule.body);
      const classes = cssClasses(sel);
      stats.classes += classes.length;
      if (BUBBLE_RE.test(sel) || def && def.id === "online.bubble-me" && /\.bubble-sent/.test(sel)) {
        decls.forEach(function(d) {
          if (BANNED_ON_BUBBLE.indexOf(d.prop) > -1) {
            errors.push("气泡上禁止写 " + d.prop + "（圆角/尺寸/间距归「聊天外观」设置）：" + sel);
          }
          if (d.prop === "background" || d.prop === "background-color") touchedBubbleBg = true;
        });
      }
      if (def && def.locked) {
        const hasDecl = decls.length > 0;
        if (hasDecl) errors.push("该分支是只读说明位，不能写规则");
      }
      decls.forEach(function(d) {
        if (d.prop === "backdrop-filter" || d.prop === "-webkit-backdrop-filter") {
          if (d.value !== "none") errors.push("禁用 backdrop-filter（移动端掉帧）：" + sel);
        }
        if (d.prop === "filter" && d.value !== "none") {
          warnings.push("filter 在低端机可能掉帧：" + sel);
        }
        if (d.prop === "background-image" || d.prop === "background") {
          if (/data:image\//.test(d.value)) {
            errors.push("本版不内嵌 base64 图片，请改用素材库外链变量 --ss-img-*");
          }
          const urls = d.value.match(/url\(/g);
          if (urls) stats.urls += urls.length;
          if (/url\(\s*['"]?http:\/\//.test(d.value)) {
            warnings.push("http:// 外链可能被 iOS 拦截，建议用 https：" + sel);
          }
          const raw = d.value.match(/url\(\s*['"]?(https?:\/\/[^'")\s]+)/);
          if (raw && options.assetUrls && options.assetUrls.indexOf(raw[1]) < 0) {
            warnings.push("这个图片链接还没收录进素材库：" + raw[1].slice(0, 48) + "…");
          }
        }
      });
      if (def && def.id === "online.bg") {
        decls.forEach(function(d) {
          if (LAYOUT_PROPS.indexOf(d.prop) > -1) {
            errors.push("聊天背景分支禁止改布局尺寸（" + d.prop + "）");
          }
        });
      }
      classes.forEach(function(cls) {
        if (!isKnownHook(cls)) {
          const near = closestHook(cls);
          bubbleHit.push("." + cls + (near ? "（是不是 " + near + "？）" : ""));
        }
      });
    });
    const tailRules = rules.filter(function(r) {
      return /\.bubble-tail-/.test(r.selector);
    });
    if (touchedBubbleBg && !tailRules.length) {
      warnings.push("改了气泡底色但没写 online.bubble-tail 的三角色，iOS 尾巴会「脱色」");
    }
    if (def && def.id === "online.bubble-tail" && !tailRules.length) {
      warnings.push("这个分支只放尾巴三角颜色，当前没有 .bubble-tail-* 规则");
    }
    if (bubbleHit.length) {
      const uniq = bubbleHit.filter(function(v, i, arr) {
        return arr.indexOf(v) === i;
      });
      warnings.push("未命中已知钩子：" + uniq.slice(0, 6).join("、") + (uniq.length > 6 ? " 等 " + uniq.length + " 个" : ""));
    }
    if (def && def.id === "online.bg") {
      warnings.push("聊天背景会覆盖 Roche 原生背景上传，确认没传过背景图再启用");
    }
    const usedVars = [];
    const varRe = /var\(\s*(--[\w-]+)/g;
    let vm;
    while (vm = varRe.exec(text)) usedVars.push(vm[1]);
    const defined = [];
    const defRe = /(--[\w-]+)\s*:/g;
    let dm;
    while (dm = defRe.exec(text)) defined.push(dm[1]);
    const pool = defined.concat(options.varsDefined || []);
    const missing = usedVars.filter(function(v) {
      return v.indexOf("--ss") === 0 && pool.indexOf(v) < 0;
    });
    if (missing.length) {
      const uniqMissing = missing.filter(function(v, i, arr) {
        return arr.indexOf(v) === i;
      });
      warnings.push("用到了未定义的变量：" + uniqMissing.slice(0, 5).join("、"));
    }
    return {
      errors,
      warnings: warnings.filter(function(v, i, arr) {
        return arr.indexOf(v) === i;
      }),
      stats,
      ok: errors.length === 0
    };
  }

  // src/core/exportCss.js
  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }
  function timestamp(d) {
    const t = d || /* @__PURE__ */ new Date();
    return t.getFullYear() + pad(t.getMonth() + 1) + pad(t.getDate()) + "-" + pad(t.getHours()) + pad(t.getMinutes());
  }
  function fileName(scope, d) {
    return (scope || "online") + "-" + timestamp(d) + ".css";
  }
  function orderIndex(id) {
    if (/\.(tokens|card-tokens)$/.test(id)) return -1;
    return 0;
  }
  function collectScope(scope, branches) {
    return activeOfScope(branches, scope).filter(function(item) {
      return item.data.css && item.data.css.trim();
    }).sort(function(a, b) {
      const ai = orderIndex(a.id);
      const bi = orderIndex(b.id);
      if (ai !== bi) return ai - bi;
      return a.node.order - b.node.order;
    });
  }
  function usedAssets(branches, assets, scope) {
    const list = scope ? collectScope(scope, branches) : [];
    const all = list.map(function(i) {
      return i.data.css;
    }).join("\n");
    return (assets || []).filter(function(a) {
      const varName2 = "--ss-img-" + a.slug;
      return all.indexOf(varName2) > -1 || a.url && all.indexOf(a.url) > -1;
    });
  }
  function buildScopeCss(scope, branches, assets) {
    const items = collectScope(scope, branches);
    const all = branchNodesOfScope(scope);
    const used = usedAssets(branches, assets, scope);
    const errors = [];
    const warnings = [];
    const stats = { rules: 0, important: 0, branches: items.length, empty: all.length - items.length };
    items.forEach(function(item) {
      const r = lint(item.data.css, {
        branchId: item.id,
        assetUrls: (assets || []).map(function(a) {
          return a.url;
        })
      });
      r.errors.forEach(function(e) {
        errors.push(item.node.label + "：" + e);
      });
      r.warnings.forEach(function(w) {
        warnings.push(item.node.label + "：" + w);
      });
      stats.rules += r.stats.rules;
      stats.important += r.stats.important;
    });
    const now = /* @__PURE__ */ new Date();
    const lines = [];
    lines.push("/* ==========================================================");
    lines.push("   Roche 美化 · " + SCOPE_LABEL[scope] + "皮肤");
    lines.push("   生成：" + now.toLocaleString("zh-CN") + " · Skin Studio");
    lines.push("   分支：" + items.length + " 个有内容" + (stats.empty ? "，" + stats.empty + " 个为空已跳过" : ""));
    lines.push("   体检：" + errors.length + " 个错误 / " + warnings.length + " 个提醒 / " + stats.rules + " 条规则");
    if (errors.length) {
      lines.push("");
      lines.push("   ⚠ 错误（可能导致整段失效）");
      errors.slice(0, 10).forEach(function(e) {
        lines.push("     · " + e);
      });
    }
    if (warnings.length) {
      lines.push("");
      lines.push("   · 提醒");
      warnings.slice(0, 10).forEach(function(w) {
        lines.push("     · " + w);
      });
    }
    lines.push("   ========================================================== */");
    lines.push("");
    items.forEach(function(item) {
      lines.push("/* ---- " + SCOPE_LABEL[scope] + " / " + item.node.label + " · " + item.id + " ---- */");
      lines.push(item.data.css.trim());
      lines.push("");
    });
    if (used.length) {
      lines.push("/* ---- 资源清单 ----");
      used.forEach(function(a) {
        lines.push("   var(--ss-img-" + a.slug + ")  →  " + a.url);
      });
      lines.push("   ---- */");
    }
    return {
      css: lines.join("\n"),
      name: fileName(scope, now),
      scope,
      report: { errors, warnings, stats }
    };
  }
  function buildAll(branches, assets) {
    return ["online", "offline", "global"].map(function(scope) {
      return buildScopeCss(scope, branches, assets);
    });
  }
  function buildLiveCss(scope, branches) {
    const items = collectScope(scope, branches);
    return items.map(function(item) {
      return "/* " + item.node.label + " */\n" + item.data.css.trim();
    }).join("\n\n");
  }

  // src/core/assets.js
  function uid2(prefix) {
    const rnd = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID().slice(0, 8) : Math.random().toString(36).slice(2, 10);
    return (prefix || "id") + "_" + rnd;
  }
  function slugify(name) {
    const s = String(name || "").trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-+|-+$/g, "");
    if (!s) return "img-" + Math.random().toString(36).slice(2, 6);
    if (/[\u4e00-\u9fa5]/.test(s)) {
      let hash = 0;
      for (let i = 0; i < s.length; i++) hash = (hash * 31 + s.charCodeAt(i)) % 1e5;
      return "img-" + hash;
    }
    return s;
  }
  function validateUrl(url) {
    const s = String(url || "").trim();
    if (!s) return { ok: false, reason: "空的链接" };
    if (!/^https?:\/\//i.test(s)) return { ok: false, reason: "只能是 http(s) 外链" };
    if (/^http:\/\//i.test(s)) return { ok: true, warn: "http:// 可能被 iOS 拦截，建议换 https" };
    return { ok: true };
  }
  function createAsset(name, url, extra) {
    const v = validateUrl(url);
    if (!v.ok) return null;
    let slug = slugify(name);
    const asset = {
      id: uid2("a"),
      name: (name || "").trim() || "未命名素材",
      url: url.trim(),
      slug,
      width: 0,
      height: 0,
      note: "",
      source: "paste",
      createdAt: Date.now()
    };
    if (extra) Object.keys(extra).forEach(function(k) {
      asset[k] = extra[k];
    });
    return asset;
  }
  function ensureUniqueSlug(asset, assets) {
    let slug = asset.slug || slugify(asset.name);
    let n = 2;
    const taken = assets.filter(function(a) {
      return a.id !== asset.id;
    }).map(function(a) {
      return a.slug;
    });
    while (taken.indexOf(slug) > -1) {
      slug = (asset.slug || slugify(asset.name)) + "-" + n;
      n += 1;
    }
    asset.slug = slug;
    return asset;
  }
  function varName(asset) {
    return "--ss-img-" + (asset.slug || slugify(asset.name));
  }
  function tokenLine(asset) {
    return varName(asset) + ': url("' + asset.url + '");';
  }
  function extractAssetUrls(text) {
    const out = [];
    const re = /url\(\s*['"]?(https?:\/\/[^'")\s]+)['"]?\s*\)/g;
    let m;
    while (m = re.exec(String(text || ""))) {
      if (out.indexOf(m[1]) < 0) out.push(m[1]);
    }
    return out;
  }
  function ensureToken(branches, asset, targetBranchId) {
    const scope = String(targetBranchId || "online").split(".")[0];
    const tokenId = scope + ".tokens";
    const branch = branches && branches[tokenId];
    if (!branch) return false;
    const v = varName(asset);
    if (branch.css.indexOf(v + ":") > -1) return false;
    const line = tokenLine(asset);
    if (branch.css && branch.css.trim()) {
      branch.css = branch.css.indexOf(":root") > -1 ? branch.css.replace(/\}\s*$/, "  " + line + "\n}\n") : ":root{\n  " + line + "\n}\n\n" + branch.css;
    } else {
      branch.css = ":root{\n  " + line + "\n}\n";
    }
    branch.updatedAt = Date.now();
    return true;
  }

  // src/app/container.js
  var SCHEMA = 3;
  var LIVE_ID = "skin-studio-live";
  var DEFAULT_SETTINGS = {
    activeNodeId: "plan",
    temperature: 0.4,
    live: false,
    imageEnabled: true
  };
  async function createApp(options) {
    const roche = options.roche;
    const storage = createStorage(roche);
    const listeners = [];
    const state = {
      /* 方案 */
      projects: [],
      activeProjectId: "",
      project: null,
      /* 当前方案的内容 */
      branches: emptyBranches(),
      nodes: {},
      chats: {},
      activeNodeId: "plan",
      /* 全局 */
      presets: [],
      exports: [],
      assets: [],
      settings: Object.assign({}, DEFAULT_SETTINGS),
      loading: true,
      busy: false,
      draft: { text: "", images: [] }
    };
    let chatTimer = null;
    function notify(scope) {
      listeners.forEach(function(fn) {
        try {
          fn(scope || "all");
        } catch (err) {
          console.warn("[skin-studio] 渲染失败", err);
        }
      });
    }
    function onChange(fn) {
      listeners.push(fn);
      return function() {
        const i = listeners.indexOf(fn);
        if (i > -1) listeners.splice(i, 1);
      };
    }
    function toast(message) {
      if (roche.ui && roche.ui.toast) {
        try {
          roche.ui.toast(message);
          return;
        } catch (err) {
        }
      }
      notify({ toast: message });
    }
    function confirm(options2) {
      if (roche.ui && roche.ui.confirm) {
        try {
          return Promise.resolve(roche.ui.confirm(options2));
        } catch (err) {
        }
      }
      return Promise.resolve(window.confirm((options2.title || "") + "\n" + (options2.message || "")));
    }
    function projectKey(pid) {
      return "ss.project." + pid;
    }
    function upsertMeta() {
      if (!state.project) return;
      state.project.updatedAt = Date.now();
      const meta = projectMeta(state.project);
      const idx = state.projects.findIndex(function(p) {
        return p.id === meta.id;
      });
      if (idx > -1) state.projects[idx] = meta;
      else state.projects.unshift(meta);
    }
    function persistProject(immediate) {
      if (!state.project) return;
      upsertMeta();
      if (immediate) {
        storage.set(projectKey(state.project.id), state.project);
        storage.set("ss.projects", state.projects);
      } else {
        storage.schedule(projectKey(state.project.id), state.project);
        storage.schedule("ss.projects", state.projects);
      }
    }
    function persistSettings() {
      storage.schedule("ss.settings", state.settings);
    }
    function persistAssets() {
      storage.schedule("ss.assets", state.assets);
    }
    function persistPresets() {
      storage.schedule("ss.presets", state.presets);
    }
    function persistExports() {
      storage.schedule("ss.exports", state.exports);
    }
    function messages() {
      return state.chats[state.activeNodeId] || [];
    }
    function setMessages(list) {
      state.chats[state.activeNodeId] = list;
    }
    function persistChat() {
      if (chatTimer) clearTimeout(chatTimer);
      const pid = state.activeProjectId;
      const nodeId = state.activeNodeId;
      const list = state.chats[nodeId] || [];
      chatTimer = setTimeout(function() {
        chatTimer = null;
        storage.saveChat(pid, nodeId, list).catch(function(err) {
          console.warn("[skin-studio] 保存对话失败", err);
        });
      }, 400);
    }
    async function flushChats() {
      if (chatTimer) {
        clearTimeout(chatTimer);
        chatTimer = null;
      }
      const pid = state.activeProjectId;
      const jobs = Object.keys(state.chats).map(function(nodeId) {
        return storage.saveChat(pid, nodeId, state.chats[nodeId] || []);
      });
      await Promise.all(jobs).catch(function(err) {
        console.warn("[skin-studio] 保存对话失败", err);
      });
    }
    async function flushAll() {
      await flushChats();
      if (state.project) {
        upsertMeta();
        await Promise.all([
          storage.set(projectKey(state.project.id), state.project),
          storage.set("ss.projects", state.projects),
          storage.set("ss.activeProjectId", state.activeProjectId),
          storage.set("ss.settings", state.settings),
          storage.set("ss.assets", state.assets),
          storage.set("ss.presets", state.presets),
          storage.set("ss.exports", state.exports),
          storage.set("ss.schema", SCHEMA)
        ]).catch(function(err) {
          console.warn("[skin-studio] 落盘失败", err);
        });
      }
    }
    async function migrate() {
      const v = await storage.get("ss.schema", 0);
      if (v === SCHEMA) return { migrated: false };
      const oldBranches = await storage.get("ss.branches", null);
      if (!oldBranches || typeof oldBranches !== "object") {
        await storage.set("ss.schema", SCHEMA);
        return { migrated: false };
      }
      const oldNodes = await storage.get("ss.nodes", {}) || {};
      const oldSettings = await storage.get("ss.settings", {}) || {};
      const project = newProject(oldSettings.projectName || DEFAULT_PROJECT_NAME, { id: DEFAULT_PROJECT_ID });
      project.branches = normalize(oldBranches);
      project.nodes = oldNodes && typeof oldNodes === "object" ? oldNodes : {};
      project.activeNodeId = getNode(oldSettings.activeNodeId || "") ? oldSettings.activeNodeId : "plan";
      await storage.set(projectKey(project.id), project);
      await storage.set("ss.projects", [projectMeta(project)]);
      await storage.set("ss.activeProjectId", project.id);
      let movedChats = 0;
      for (let i = 0; i < NODES.length; i++) {
        const nodeId = NODES[i].id;
        const msgs = await storage.loadChunked("ss.chat.", nodeId);
        if (msgs && msgs.length) {
          await storage.saveChat(project.id, nodeId, msgs);
          movedChats += 1;
        }
        await storage.dropChunked("ss.chat.", nodeId);
      }
      await storage.remove("ss.branches");
      await storage.remove("ss.nodes");
      await storage.set("ss.schema", SCHEMA);
      console.log("[skin-studio] 已迁移 v2 → v3，保留分支与 " + movedChats + " 份对话");
      return { migrated: true, movedChats };
    }
    async function loadProject(pid) {
      const raw = await storage.get(projectKey(pid), null);
      const project = normalizeProject(raw) || newProject(DEFAULT_PROJECT_NAME, { id: pid });
      state.project = project;
      state.activeProjectId = project.id;
      state.branches = project.branches;
      state.nodes = project.nodes;
      state.chats = {};
      state.activeNodeId = getNode(project.activeNodeId || "") ? project.activeNodeId : "plan";
      state.draft = { text: "", images: [] };
      await ensureChat(state.activeNodeId);
      return project;
    }
    async function switchProject(pid) {
      if (!pid || pid === state.activeProjectId) return;
      await flushAll();
      await loadProject(pid);
      state.settings.activeProjectId = pid;
      persistSettings();
      notify("all");
    }
    async function createProject(name) {
      await flushAll();
      const project = newProject(name || "美化 " + (state.projects.length + 1));
      await storage.set(projectKey(project.id), project);
      state.projects.unshift(projectMeta(project));
      await storage.set("ss.projects", state.projects);
      await storage.set("ss.activeProjectId", project.id);
      await loadProject(project.id);
      notify("all");
      toast("已新建方案「" + project.name + "」");
      return project;
    }
    function renameProject(name, pid) {
      const target = pid || state.activeProjectId;
      const title = String(name || "").trim();
      if (!title) return false;
      if (target === state.activeProjectId && state.project) {
        state.project.name = title;
        persistProject();
      } else {
        const meta = state.projects.find(function(p) {
          return p.id === target;
        });
        if (!meta) return false;
        meta.name = title;
        storage.get(projectKey(target), null).then(function(raw) {
          const p = normalizeProject(raw);
          if (p) {
            p.name = title;
            storage.set(projectKey(target), p);
          }
        });
        storage.set("ss.projects", state.projects);
      }
      notify("project");
      return true;
    }
    async function duplicateProject2(pid) {
      await flushChats();
      const target = pid || state.activeProjectId;
      let source = state.project;
      if (target !== state.activeProjectId) source = normalizeProject(await storage.get(projectKey(target), null));
      if (!source) return null;
      const copy = duplicateProject(source);
      await storage.set(projectKey(copy.id), copy);
      const srcChats = target === state.activeProjectId ? state.chats : null;
      for (let i = 0; i < NODES.length; i++) {
        const nodeId = NODES[i].id;
        const msgs = srcChats ? srcChats[nodeId] || [] : await storage.loadChat(target, nodeId);
        if (msgs && msgs.length) await storage.saveChat(copy.id, nodeId, msgs);
      }
      state.projects.unshift(projectMeta(copy));
      await storage.set("ss.projects", state.projects);
      notify("project");
      toast("已复制为「" + copy.name + "」");
      return copy;
    }
    async function deleteProject(pid) {
      const target = pid || state.activeProjectId;
      if (state.projects.length <= 1) {
        toast("至少保留一个方案");
        return false;
      }
      for (let i = 0; i < NODES.length; i++) {
        await storage.dropChat(target, NODES[i].id);
      }
      await storage.remove(projectKey(target));
      state.projects = state.projects.filter(function(p) {
        return p.id !== target;
      });
      await storage.set("ss.projects", state.projects);
      if (target === state.activeProjectId) {
        await loadProject(state.projects[0].id);
        await storage.set("ss.activeProjectId", state.activeProjectId);
      }
      notify("all");
      toast("已删除方案");
      return true;
    }
    async function ensureChat(nodeId) {
      if (state.chats[nodeId]) return state.chats[nodeId];
      const list = await storage.loadChat(state.activeProjectId, nodeId);
      state.chats[nodeId] = Array.isArray(list) ? list : [];
      return state.chats[nodeId];
    }
    async function persistActiveChat() {
      if (chatTimer) {
        clearTimeout(chatTimer);
        chatTimer = null;
      }
      if (state.chats[state.activeNodeId]) {
        await storage.saveChat(state.activeProjectId, state.activeNodeId, state.chats[state.activeNodeId]);
      }
    }
    async function switchNode(nodeId) {
      if (!getNode(nodeId)) return;
      if (nodeId === state.activeNodeId) return;
      await persistActiveChat();
      state.activeNodeId = nodeId;
      state.settings.activeNodeId = nodeId;
      if (state.project) {
        state.project.activeNodeId = nodeId;
        persistProject();
      }
      state.draft = { text: "", images: [] };
      await ensureChat(nodeId);
      state.nodes[nodeId] = state.nodes[nodeId] || { collapsed: false, lastAt: 0 };
      state.nodes[nodeId].lastAt = Date.now();
      persistSettings();
      notify("node");
    }
    function nodeState(nodeId) {
      return state.nodes[nodeId] || { collapsed: false, lastAt: 0 };
    }
    function toggleCollapse(nodeId) {
      const cur = nodeState(nodeId);
      state.nodes[nodeId] = Object.assign({}, cur, { collapsed: !cur.collapsed });
      persistProject();
      notify("sidebar");
    }
    function promptCfg(nodeId) {
      return cfgOf(state.project, nodeId || state.activeNodeId);
    }
    function setPromptCfg(nodeId, patch) {
      if (!state.project) return null;
      const next = setCfg(state.project, nodeId || state.activeNodeId, patch);
      persistProject();
      return next;
    }
    function promptMode(nodeId) {
      return promptCfg(nodeId).refMode;
    }
    function setPromptMode(nodeId, mode) {
      setPromptCfg(nodeId, { refMode: mode });
    }
    function promptText(nodeId, overrideCfg) {
      const id = nodeId || state.activeNodeId;
      const cfg = overrideCfg ? normalizePromptCfg(overrideCfg) : promptCfg(id);
      return buildPrompt(id, {
        branches: state.branches,
        cfg,
        presets: allPresets(state.presets)
      });
    }
    function targets(nodeId) {
      return targetSummary(nodeId || state.activeNodeId, state.branches);
    }
    function listPresets(scope) {
      return scope ? presetsForScope(state.presets, scope) : allPresets(state.presets);
    }
    function savePreset(preset) {
      if (preset.id && isBuiltin(preset.id)) {
        const copy = clonePreset(preset);
        state.presets.push(copy);
        persistPresets();
        notify("presets");
        return copy;
      }
      if (preset.id) {
        updatePreset(state.presets, preset.id, preset);
        persistPresets();
        notify("presets");
        return preset;
      }
      const created = createPreset(preset.name, preset.text, preset.scope);
      state.presets.push(created);
      persistPresets();
      notify("presets");
      return created;
    }
    function clonePreset2(preset) {
      const copy = clonePreset(preset);
      state.presets.push(copy);
      persistPresets();
      notify("presets");
      return copy;
    }
    function deletePreset(id) {
      if (isBuiltin(id)) {
        toast("内置预设不能删除，可以复制后修改");
        return false;
      }
      const ok = removePreset(state.presets, id);
      if (ok) {
        Object.keys(state.project && state.project.promptCfg || {}).forEach(function(nodeId) {
          if (state.project.promptCfg[nodeId].presetId === id) state.project.promptCfg[nodeId].presetId = "";
        });
        persistPresets();
        persistProject();
        notify("presets");
      }
      return ok;
    }
    function lintFor(branchId, css) {
      return lint(css, {
        branchId,
        assetUrls: state.assets.map(function(a) {
          return a.url;
        })
      });
    }
    function writeToBranch(branchId, css, mode, source) {
      const r = lintFor(branchId, css);
      const ok = write(state.branches, branchId, css, mode, source);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return { ok, lint: r };
    }
    function writePart(msgId, index) {
      const msg = messages().find(function(m) {
        return m.id === msgId;
      });
      if (!msg || !msg.parts || !msg.parts[index]) return { ok: false };
      const part = msg.parts[index];
      const r = writeToBranch(part.branchId, part.css, part.mode, "ai");
      if (r.ok) {
        part.written = true;
        persistChat();
        notify("chat");
      }
      return r;
    }
    function writeAllParts(msgId) {
      const msg = messages().find(function(m) {
        return m.id === msgId;
      });
      if (!msg || !msg.parts) return { ok: 0, failed: [] };
      const failed = [];
      let ok = 0;
      msg.parts.forEach(function(part) {
        const result = writeToBranch(part.branchId, part.css, part.mode, "ai");
        if (result.ok) {
          part.written = true;
          ok += 1;
          if (result.lint && result.lint.errors.length) {
            failed.push(part.branchId + "：" + result.lint.errors[0]);
          }
        } else {
          failed.push(part.branchId + "：分支被锁或不存在");
        }
      });
      persistChat();
      notify("chat");
      return { ok, failed };
    }
    function undoBranch(branchId) {
      const ok = undo(state.branches, branchId);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return ok;
    }
    function resetBranch(branchId) {
      const ok = reset(state.branches, branchId);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return ok;
    }
    function toggleBranch(branchId, enabled) {
      const ok = toggle(state.branches, branchId, enabled);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return ok;
    }
    function addMessage(msg) {
      const list = messages();
      list.push(msg);
      setMessages(list);
      persistChat();
      notify("chat");
      return msg;
    }
    function editMessage(id, text) {
      const msg = messages().find(function(m) {
        return m.id === id;
      });
      if (!msg) return false;
      msg.text = text;
      msg.editedAt = Date.now();
      persistChat();
      notify("chat");
      return true;
    }
    function deleteMessage(id) {
      const list = messages().filter(function(m) {
        return m.id !== id;
      });
      setMessages(list);
      persistChat();
      notify("chat");
      return true;
    }
    async function callAI(prompt, userText, images, history) {
      const msgs = [{ role: "system", content: prompt }];
      (history || []).forEach(function(m) {
        msgs.push({ role: m.role === "ai" ? "assistant" : "user", content: m.text || "" });
      });
      let content = userText;
      if (images && images.length) {
        content = [{ type: "text", text: userText || "参考这些截图。" }];
        images.forEach(function(url) {
          content.push({ type: "image_url", image_url: { url } });
        });
      }
      msgs.push({ role: "user", content });
      try {
        const result = await roche.ai.chat({ messages: msgs, temperature: state.settings.temperature });
        return { text: result && result.text || "", error: "" };
      } catch (err) {
        return { text: "", error: err && err.message || "调用失败" };
      }
    }
    async function send(text, images) {
      if (state.busy) return;
      const content = String(text || "").trim();
      const imgs = (images || []).slice();
      if (!content && !imgs.length) return;
      const nodeId = state.activeNodeId;
      const prompt = promptText(nodeId);
      const history = messages().slice(-6).map(function(m) {
        return { role: m.role, text: m.text };
      });
      addMessage({
        id: uid("m"),
        role: "user",
        text: content,
        images: imgs.map(function(i) {
          return i.dataUrl;
        }),
        createdAt: Date.now()
      });
      state.busy = true;
      notify("chat");
      let res = await callAI(prompt, content, imgs.map(function(i) {
        return i.dataUrl;
      }), history);
      if (res.error && imgs.length) {
        const retry = await callAI(prompt, content + "\n\n（图片未能传入，请仅依据文字判断）", [], history);
        if (!retry.error) {
          res = retry;
          toast("宿主 AI 不支持图片，已改用纯文字重试");
        }
      }
      state.busy = false;
      if (res.error) {
        addMessage({
          id: uid("m"),
          role: "ai",
          createdAt: Date.now(),
          parts: [],
          text: "调用失败：" + res.error + "\n\n检查 Roche 的 AI 设置，或稍后重试。",
          failed: true
        });
        return;
      }
      const parsed = parseReply(res.text, branchIdsOf(nodeId)[0] || "");
      addMessage({
        id: uid("m"),
        role: "ai",
        createdAt: Date.now(),
        text: parsed.chat,
        parts: parsed.parts,
        note: parsed.note,
        next: parsed.next,
        complete: parsed.complete,
        raw: res.text,
        scopeLabel: SCOPE_LABEL[scopeOf(nodeId)] || ""
      });
      if (!parsed.complete) toast("回复里没有可用的 CSS 代码块");
    }
    async function regenerate(msgId) {
      const list = messages();
      const idx = list.findIndex(function(m) {
        return m.id === msgId;
      });
      if (idx < 0) return;
      let userIdx = -1;
      for (let i = idx - 1; i >= 0; i--) {
        if (list[i].role === "user") {
          userIdx = i;
          break;
        }
      }
      if (userIdx < 0) return;
      const userMsg = list[userIdx];
      const images = (userMsg.images || []).map(function(url) {
        return { dataUrl: url };
      });
      deleteMessage(msgId);
      await send(userMsg.text, images);
    }
    function recordExport(scope, built) {
      state.exports = pushExportRecord(state.exports, {
        id: uid("exp"),
        projectId: state.activeProjectId,
        projectName: state.project ? state.project.name : "",
        scope,
        name: built.name,
        css: built.css,
        at: Date.now()
      });
      persistExports();
    }
    function buildScope(scope) {
      return buildScopeCss(scope, state.branches, state.assets);
    }
    function exportScope(scope) {
      const built = buildScope(scope);
      if (!built.report.stats.branches) {
        toast(SCOPE_LABEL[scope] + "还没有任何内容");
        return null;
      }
      recordExport(scope, built);
      return built;
    }
    function exportAll() {
      const list = buildAll(state.branches, state.assets).filter(function(i) {
        return i.report.stats.branches > 0;
      });
      if (!list.length) {
        toast("三个作用域都还没有内容");
        return [];
      }
      list.forEach(function(item) {
        recordExport(item.scope, item);
      });
      return list;
    }
    function exportRecords() {
      return state.exports.slice();
    }
    function deleteExportRecord(id) {
      state.exports = state.exports.filter(function(r) {
        return r.id !== id;
      });
      persistExports();
      notify("exports");
    }
    function preview(scope, extraCss) {
      return buildLiveCss(scope, state.branches) + (extraCss ? "\n\n/* 本次回复预览 */\n" + extraCss : "");
    }
    function applyLive(scope) {
      const css = buildLiveCss(scope, state.branches);
      const old = document.getElementById(LIVE_ID);
      if (old && old.parentNode) old.parentNode.removeChild(old);
      const style = document.createElement("style");
      style.id = LIVE_ID;
      style.textContent = css;
      document.head.appendChild(style);
      return css.length;
    }
    function clearLive() {
      const old = document.getElementById(LIVE_ID);
      if (old && old.parentNode) old.parentNode.removeChild(old);
    }
    function liveApplied() {
      return !!document.getElementById(LIVE_ID);
    }
    function addAsset(name, url, extra) {
      const asset = createAsset(name, url, extra);
      if (!asset) return null;
      ensureUniqueSlug(asset, state.assets);
      state.assets.unshift(asset);
      persistAssets();
      notify("assets");
      return asset;
    }
    function removeAsset(id) {
      state.assets = state.assets.filter(function(a) {
        return a.id !== id;
      });
      persistAssets();
      notify("assets");
    }
    function updateAsset(id, patch) {
      const asset = state.assets.find(function(a) {
        return a.id === id;
      });
      if (!asset) return;
      Object.keys(patch).forEach(function(k) {
        asset[k] = patch[k];
      });
      ensureUniqueSlug(asset, state.assets);
      persistAssets();
      notify("assets");
    }
    function assetRefs(asset) {
      const out = [];
      Object.keys(state.branches).forEach(function(id) {
        const css = (state.branches[id] || {}).css || "";
        if (css.indexOf("--ss-img-" + asset.slug) > -1 || asset.url && css.indexOf(asset.url) > -1) {
          out.push({ id, name: labelOf(id) });
        }
      });
      return out;
    }
    function insertAsset(asset, generator, targetBranchId) {
      const branchId = targetBranchId || branchIdsOf(state.activeNodeId)[0];
      if (!branchId) {
        toast("当前对话没有可写入的分支");
        return null;
      }
      const tokenWritten = ensureToken(state.branches, asset, branchId);
      if (tokenWritten) persistProject();
      const r = writeToBranch(branchId, generator.css, "APPEND", "generator");
      return { tokenWritten, lint: r.lint, branchId };
    }
    function setSetting(key, value) {
      state.settings[key] = value;
      persistSettings();
      notify("settings");
    }
    async function clearAll() {
      for (let i = 0; i < state.projects.length; i++) {
        const pid = state.projects[i].id;
        for (let j = 0; j < NODES.length; j++) {
          await storage.dropChat(pid, NODES[j].id);
        }
        await storage.remove(projectKey(pid));
      }
      await storage.remove("ss.projects");
      await storage.remove("ss.activeProjectId");
      await storage.remove("ss.assets");
      await storage.remove("ss.settings");
      await storage.remove("ss.exports");
      await storage.remove("ss.presets");
      state.projects = [];
      state.presets = [];
      state.exports = [];
      state.assets = [];
      state.settings = Object.assign({}, DEFAULT_SETTINGS);
      state.chats = {};
      clearLive();
      const project = newProject(DEFAULT_PROJECT_NAME);
      await storage.set(projectKey(project.id), project);
      state.projects = [projectMeta(project)];
      await storage.set("ss.projects", state.projects);
      await storage.set("ss.activeProjectId", project.id);
      await loadProject(project.id);
      notify("all");
      toast("已清空全部数据");
    }
    async function boot() {
      const mig = await migrate();
      state.presets = await storage.get("ss.presets", []) || [];
      state.exports = await storage.get("ss.exports", []) || [];
      state.assets = await storage.get("ss.assets", []) || [];
      state.settings = Object.assign({}, DEFAULT_SETTINGS, await storage.get("ss.settings", {}) || {});
      let projects = await storage.get("ss.projects", []);
      if (!Array.isArray(projects) || !projects.length) {
        const project = newProject(DEFAULT_PROJECT_NAME);
        await storage.set(projectKey(project.id), project);
        projects = [projectMeta(project)];
        await storage.set("ss.projects", projects);
        await storage.set("ss.activeProjectId", project.id);
      }
      state.projects = projects;
      const wantedPid = await storage.get("ss.activeProjectId", "") || projects[0].id;
      const pid = projects.some(function(p) {
        return p.id === wantedPid;
      }) ? wantedPid : projects[0].id;
      await loadProject(pid);
      state.loading = false;
      notify("all");
      if (mig.migrated) {
        setTimeout(function() {
          toast("已升级到 v0.3：内容已归入「" + (state.project ? state.project.name : "我的美化") + "」");
        }, 400);
      }
    }
    return {
      state,
      roche,
      version: options.version,
      onChange,
      notify,
      toast,
      confirm,
      boot,
      flushAll,
      /* 方案 */
      switchProject,
      createProject,
      renameProject,
      duplicateProject: duplicateProject2,
      deleteProject,
      /* 节点 */
      switchNode,
      ensureChat,
      messages,
      toggleCollapse,
      nodeState,
      /* 提示词 */
      promptCfg,
      setPromptCfg,
      promptMode,
      setPromptMode,
      promptText,
      targets,
      listPresets,
      savePreset,
      clonePreset: clonePreset2,
      deletePreset,
      /* 分支 */
      writeToBranch,
      writePart,
      writeAllParts,
      undoBranch,
      resetBranch,
      toggleBranch,
      lintFor,
      /* 消息 */
      send,
      editMessage,
      deleteMessage,
      regenerate,
      /* 导出 */
      buildScope,
      recordExport,
      exportScope,
      exportAll,
      exportRecords,
      deleteExportRecord,
      /* 预览 / 应用 */
      preview,
      applyLive,
      clearLive,
      liveApplied,
      /* 素材 */
      addAsset,
      removeAsset,
      updateAsset,
      assetRefs,
      insertAsset,
      setSetting,
      clearAll,
      breadcrumb,
      scopeOf,
      branchIdsOf
    };
  }

  // src/ui/dom.js
  function el(tag, props, children) {
    const node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function(k) {
        const v = props[k];
        if (v === null || v === void 0 || v === false) return;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else if (k === "html") node.innerHTML = v;
        else if (k === "style" && typeof v === "object") {
          Object.keys(v).forEach(function(p) {
            node.style[p] = v[p];
          });
        } else if (k.indexOf("on") === 0 && typeof v === "function") {
          node.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k === "dataset" && typeof v === "object") {
          Object.keys(v).forEach(function(d) {
            node.dataset[d] = v[d];
          });
        } else {
          node.setAttribute(k, v === true ? "" : v);
        }
      });
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function(c) {
        if (c === null || c === void 0 || c === false) return;
        node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
    }
    return node;
  }
  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
    return node;
  }
  var PATH = {
    menu: "M3 6h18M3 12h18M3 18h18",
    plus: "M12 5v14M5 12h14",
    send: "M4.5 12.5 20 4l-5.5 16-3.2-6.3L4.5 12.5Z",
    eye: "M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z",
    close: "M6 6l12 12M18 6L6 18",
    more: "M6 12h.01M12 12h.01M18 12h.01",
    image: "M4 5h16v14H4zM4 15l4-4 3 3 3-3 6 6",
    trash: "M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13",
    edit: "M4 20h4L20 8l-4-4L4 16v4Z",
    copy: "M9 9h10v12H9zM5 15V3h10",
    refresh: "M20 12a8 8 0 1 1-3-6.2M20 4v5h-5",
    check: "M4 12.5 9.5 18 20 6.5",
    chevron: "M6 9l6 6 6-6",
    back: "M15 5l-7 7 7 7",
    layers: "M12 3 3 8l9 5 9-5-9-5ZM3 14l9 5 9-5",
    palette: "M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h4a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z",
    dots: "M5 12h.01M12 12h.01M19 12h.01",
    undo: "M8 5 3 10l5 5M3 10h10a6 6 0 0 1 0 12H9",
    warn: "M12 4 2.5 20h19L12 4Zm0 5v6m0 3h.01",
    down: "M12 4v12m0 0 5-5m-5 5-5-5"
  };
  function svgIcon(name, size) {
    const d = PATH[name] || PATH.dots;
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", String(size || 18));
    svg.setAttribute("height", String(size || 18));
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.7");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    const p = document.createElementNS(ns, "path");
    p.setAttribute("d", d);
    svg.appendChild(p);
    return svg;
  }
  function fmtClock(ts) {
    const d = new Date(ts);
    const p = function(n) {
      return n < 10 ? "0" + n : String(n);
    };
    return p(d.getHours()) + ":" + p(d.getMinutes());
  }

  // src/ui/sidebar.js
  function renderSidebar(ctx, actions) {
    const state = ctx.state;
    const side = el("div", { class: "ss-side" });
    const project = state.project || { name: "我的美化" };
    const projectBtn = el("button", {
      class: "ss-proj-btn",
      title: "切换美化方案",
      onclick: function() {
        actions.openProjects();
      }
    }, [
      el("div", { class: "ss-proj-btn__main" }, [
        el("div", { class: "ss-proj-btn__name", text: project.name }),
        el("div", {
          class: "ss-proj-btn__meta",
          text: (state.projects.length || 1) + " 个方案 · " + writtenCount2(state.branches) + " 个分支有内容"
        })
      ]),
      el("span", { class: "ss-proj-btn__chev" }, [svgIcon("chevron", 16)])
    ]);
    side.appendChild(el("div", { class: "ss-side__head" }, [
      projectBtn,
      el("button", {
        class: "ss-icon-btn ss-side__close",
        title: "收起",
        onclick: function() {
          actions.closeSide();
        }
      }, [svgIcon("close", 18)])
    ]));
    const tree = el("div", { class: "ss-side__tree" });
    function badgeFor(node) {
      if (node.type === "branch") {
        const lines = lineCount((state.branches[node.id] || {}).css);
        if (!lines) return null;
        return el("span", { class: "ss-tree__badge", text: String(lines) });
      }
      if (node.type === "scope" || node.type === "group") {
        const ids = branchIdsOf(node.id);
        let done = 0;
        ids.forEach(function(id) {
          if (lineCount((state.branches[id] || {}).css)) done += 1;
        });
        return el("span", { class: "ss-tree__badge", text: done + "/" + ids.length });
      }
      return null;
    }
    function buildRow(node, depth) {
      const kids = childrenOf(node.id);
      const hasKids = kids.length > 0;
      const nodeState = state.nodes[node.id] || {};
      const collapsed = !!nodeState.collapsed;
      const active = state.activeNodeId === node.id;
      const row2 = el("div", {
        class: "ss-tree__row" + (active ? " ss-tree__row--on" : "") + (node.type === "scope" ? " ss-tree__row--scope" : "") + (node.type === "plan" ? " ss-tree__row--plan" : ""),
        style: { paddingLeft: 8 + depth * 14 + "px" }
      });
      if (hasKids) {
        const chev = el("button", {
          class: "ss-tree__chev" + (collapsed ? "" : " ss-tree__chev--open"),
          title: collapsed ? "展开" : "收起"
        }, [svgIcon("chevron", 14)]);
        chev.addEventListener("click", function(ev) {
          ev.stopPropagation();
          ctx.toggleCollapse(node.id);
        });
        row2.appendChild(chev);
      } else {
        row2.appendChild(el("span", { class: "ss-tree__spacer" }));
      }
      row2.appendChild(el("span", { class: "ss-tree__label", text: node.label }));
      const badge = badgeFor(node);
      if (badge) row2.appendChild(badge);
      const branch = node.type === "branch" ? state.branches[node.id] || {} : null;
      if (branch && branch.enabled === false) {
        row2.appendChild(el("span", {
          class: "ss-tree__dot",
          title: "已关闭（不参与导出）",
          style: { background: "var(--ss-line-2)" }
        }));
      }
      row2.addEventListener("click", function() {
        if (hasKids && collapsed) ctx.toggleCollapse(node.id);
        ctx.switchNode(node.id);
        actions.closeSide();
      });
      const frag = el("div");
      frag.appendChild(row2);
      if (hasKids && !collapsed) {
        kids.forEach(function(kid) {
          frag.appendChild(buildRow(kid, depth + 1));
        });
      }
      return frag;
    }
    childrenOf("root").forEach(function(node) {
      tree.appendChild(buildRow(node, 0));
    });
    side.appendChild(tree);
    side.appendChild(el("div", { class: "ss-side__foot" }, [
      el("button", {
        class: "ss-btn ss-btn--ghost",
        style: { flex: "1 1 0" },
        text: "素材库",
        onclick: function() {
          actions.openAssets();
        }
      }),
      el("button", {
        class: "ss-btn ss-btn--ghost",
        style: { flex: "1 1 0" },
        text: "设置",
        onclick: function() {
          actions.openSettings();
        }
      })
    ]));
    return side;
  }
  function writtenCount2(branches) {
    let n = 0;
    Object.keys(branches || {}).forEach(function(id) {
      const b = branches[id];
      if (b && b.css && b.css.trim()) n += 1;
    });
    return n;
  }

  // src/core/image.js
  var MAX_EDGE = 1024;
  var MAX_BYTES = 300 * 1024;
  var QUALITY = 0.8;
  function readAsDataUrl(file) {
    return new Promise(function(resolve, reject) {
      const reader = new FileReader();
      reader.onload = function() {
        resolve(String(reader.result || ""));
      };
      reader.onerror = function() {
        reject(new Error("读取图片失败"));
      };
      reader.readAsDataURL(file);
    });
  }
  function loadImage(src) {
    return new Promise(function(resolve, reject) {
      const img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function() {
        reject(new Error("图片解码失败"));
      };
      img.src = src;
    });
  }
  async function compressImage(file) {
    const raw = await readAsDataUrl(file);
    const img = await loadImage(raw);
    let w = img.naturalWidth || img.width;
    let h = img.naturalHeight || img.height;
    const scale = Math.min(1, MAX_EDGE / Math.max(w, h));
    w = Math.round(w * scale);
    h = Math.round(h * scale);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, w, h);
    let dataUrl = canvas.toDataURL("image/jpeg", QUALITY);
    let bytes = Math.round((dataUrl.length - dataUrl.indexOf(",") - 1) * 0.75);
    if (bytes > MAX_BYTES) {
      dataUrl = canvas.toDataURL("image/jpeg", 0.55);
      bytes = Math.round((dataUrl.length - dataUrl.indexOf(",") - 1) * 0.75);
    }
    return { dataUrl, width: w, height: h, bytes };
  }

  // src/core/clipboard.js
  async function copyText(text) {
    const value = String(text == null ? "" : text);
    if (!value) return { ok: false, reason: "empty" };
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(value);
        return { ok: true, mode: "clipboard" };
      } catch (err) {
      }
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "readonly");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      ta.style.left = "0";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, value.length);
      const ok = document.execCommand && document.execCommand("copy");
      document.body.removeChild(ta);
      return ok ? { ok: true, mode: "execCommand" } : { ok: false, reason: "execCommand-failed" };
    } catch (err) {
      return { ok: false, reason: err && err.message || "unknown" };
    }
  }
  function formatSize(chars) {
    if (chars < 1024) return chars + " 字符";
    return (chars / 1024).toFixed(1) + " KB";
  }

  // src/core/markdown.js
  function escapeHtml(text) {
    return String(text == null ? "" : text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  var INLINE_RE = /(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`|\[[^\]\n]+\]\(https?:\/\/[^)\s]+\))/g;
  function inlineNodes(text) {
    const frag = document.createDocumentFragment();
    const src = String(text || "");
    let last = 0;
    let m;
    INLINE_RE.lastIndex = 0;
    while (m = INLINE_RE.exec(src)) {
      if (m.index > last) frag.appendChild(document.createTextNode(src.slice(last, m.index)));
      const token = m[0];
      if (token.indexOf("**") === 0) {
        const b = document.createElement("strong");
        b.textContent = token.slice(2, -2);
        frag.appendChild(b);
      } else if (token.indexOf("`") === 0) {
        const c = document.createElement("code");
        c.className = "ss-md__inline";
        c.textContent = token.slice(1, -1);
        frag.appendChild(c);
      } else if (token.indexOf("[") === 0) {
        const mm = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/.exec(token);
        const a = document.createElement("span");
        a.className = "ss-md__link";
        a.textContent = mm ? mm[1] : token;
        a.title = mm ? mm[2] : "";
        frag.appendChild(a);
      } else {
        const i = document.createElement("em");
        i.textContent = token.slice(1, -1);
        frag.appendChild(i);
      }
      last = m.index + token.length;
    }
    if (last < src.length) frag.appendChild(document.createTextNode(src.slice(last)));
    return frag;
  }
  function renderMarkdown(raw) {
    const frag = document.createDocumentFragment();
    const lines = String(raw || "").replace(/\r\n?/g, "\n").split("\n");
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^\s*```/.test(line)) {
        const lang = line.replace(/^\s*```/, "").trim();
        const buf2 = [];
        i += 1;
        while (i < lines.length && !/^\s*```/.test(lines[i])) {
          buf2.push(lines[i]);
          i += 1;
        }
        i += 1;
        const pre = document.createElement("pre");
        pre.className = "ss-md__code";
        if (lang) pre.dataset.lang = lang;
        pre.textContent = buf2.join("\n");
        frag.appendChild(pre);
        continue;
      }
      if (/^\s*(---+|\*\*\*+)\s*$/.test(line)) {
        const hr = document.createElement("div");
        hr.className = "ss-md__hr";
        frag.appendChild(hr);
        i += 1;
        continue;
      }
      const h = /^(#{1,4})\s+(.*)$/.exec(line);
      if (h) {
        const level = Math.min(4, h[1].length + 1);
        const node = document.createElement("h" + level);
        node.className = "ss-md__h";
        node.appendChild(inlineNodes(escapeHtml(h[2])));
        frag.appendChild(node);
        i += 1;
        continue;
      }
      if (/^\s*>\s?/.test(line)) {
        const buf2 = [];
        while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
          buf2.push(escapeHtml(lines[i].replace(/^\s*>\s?/, "")));
          i += 1;
        }
        const quote = document.createElement("blockquote");
        quote.className = "ss-md__quote";
        quote.appendChild(inlineNodes(buf2.join("\n")));
        frag.appendChild(quote);
        continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
        const ordered = /^\s*\d+\./.test(line);
        const list = document.createElement(ordered ? "ol" : "ul");
        list.className = "ss-md__list";
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          const indent = /^\s*/.exec(lines[i])[0].replace(/\t/g, "  ").length;
          const content = lines[i].replace(/^\s*([-*]|\d+\.)\s+/, "");
          const li = document.createElement("li");
          if (indent >= 2) li.className = "ss-md__li--sub";
          li.appendChild(inlineNodes(escapeHtml(content)));
          list.appendChild(li);
          i += 1;
        }
        frag.appendChild(list);
        continue;
      }
      if (!line.trim()) {
        i += 1;
        continue;
      }
      const buf = [];
      while (i < lines.length && lines[i].trim() && !/^\s*```/.test(lines[i]) && !/^(#{1,4})\s+/.test(lines[i]) && !/^\s*>\s?/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i]) && !/^\s*(---+)+\s*$/.test(lines[i])) {
        buf.push(escapeHtml(lines[i]));
        i += 1;
      }
      const p = document.createElement("p");
      p.className = "ss-md__p";
      p.appendChild(inlineNodes(buf.join("\n")));
      frag.appendChild(p);
    }
    return frag;
  }

  // src/ui/chat.js
  function copyWithToast(ctx, text, okText) {
    copyText(text).then(function(r) {
      ctx.toast(r.ok ? okText || "已复制" : "复制失败，请长按选择复制");
    });
  }
  function markdownNode(text) {
    const box = el("div", { class: "ss-msg__plain" });
    box.appendChild(renderMarkdown(text));
    return box;
  }
  function suggestionsFor(nodeId) {
    const node = getNode(nodeId);
    if (!node) return [];
    if (node.type === "plan") {
      return [
        { label: "定一套设计语言", text: "帮我定一套整体设计语言：材质、排版、留白各一句话，再给令牌规范。" },
        { label: "米灰纸感令牌", text: "给我米灰纸感的日夜双色令牌，只要 online.tokens 这一段的 CSS。" },
        { label: "先定验收清单", text: "先给我这套美化的验收清单，再决定从哪个部位开始。" }
      ];
    }
    const ids = branchIdsOf(nodeId);
    const first = ids[0] || "";
    return [
      { label: "按默认风格改", text: "按当前设计方向，把「" + node.label + "」改成纸感风格。" },
      { label: "只调一处", text: "只改 " + first + "，其他部位先不动。" },
      { label: "给点思路", text: "先说说「" + node.label + "」这块有哪些常见坑，再动手。" }
    ];
  }
  function buildCard(ctx, actions, msg) {
    const parts = msg.parts || [];
    const totalLines = parts.reduce(function(n, p) {
      return n + lineCount(p.css);
    }, 0);
    const head = el("div", { class: "ss-card__head" }, [
      el("span", { class: "ss-card__tag", text: "CSS" }),
      el("span", {
        class: "ss-card__meta",
        text: parts.length + " 段 · 共 " + totalLines + " 行"
      }),
      el("span", { class: "ss-card__chev" }, [svgIcon("chevron", 16)])
    ]);
    const rows = el("div", { class: "ss-card__rows" });
    parts.forEach(function(part, index) {
      const isDone = !!part.written;
      const btn = el("button", {
        class: "ss-card__write" + (isDone ? " ss-card__write--done" : ""),
        text: isDone ? "已写入" : "写入"
      });
      btn.addEventListener("click", function(ev) {
        ev.stopPropagation();
        if (isDone) {
          ctx.undoBranch(part.branchId);
          part.written = false;
          ctx.notify("chat");
          ctx.toast("已撤销「" + labelOf(part.branchId) + "」");
          return;
        }
        const r = ctx.writePart(msg.id, index);
        if (!r.ok) {
          ctx.toast("写入失败：分支被锁或不存在");
          return;
        }
        const errs = r.lint ? r.lint.errors.length : 0;
        ctx.toast(errs ? "已写入，但有 " + errs + " 个错误" : "已写入「" + labelOf(part.branchId) + "」");
      });
      rows.appendChild(el("div", { class: "ss-card__row" }, [
        el("span", { class: "ss-card__id", text: part.branchId }),
        el("span", { class: "ss-card__lines", text: lineCount(part.css) + " 行" }),
        btn
      ]));
    });
    const code = el("pre", { class: "ss-card__code" });
    code.textContent = parts.map(function(p) {
      return "/* ---- " + p.branchId + " ---- */\n" + p.css;
    }).join("\n\n");
    const previewBtn = el("button", {
      class: "ss-btn ss-btn--ghost",
      text: "预览本次",
      onclick: function(ev) {
        ev.stopPropagation();
        const extra = parts.map(function(p) {
          return "/* " + p.branchId + " */\n" + p.css;
        }).join("\n\n");
        actions.openPreview(extra, "本次回复");
      }
    });
    const allBtn = el("button", {
      class: "ss-btn ss-btn--primary",
      text: "全部写入（" + parts.length + "）",
      onclick: function(ev) {
        ev.stopPropagation();
        const r = ctx.writeAllParts(msg.id);
        ctx.toast(r.failed.length ? "写入 " + r.ok + " 段，" + r.failed.length + " 段有问题：" + r.failed[0] : "已写入 " + r.ok + " 段");
      }
    });
    const lintHint = el("span", { class: "ss-card__lint" });
    const firstLint = parts.length ? lint(parts[0].css, { branchId: parts[0].branchId }) : null;
    if (firstLint) {
      lintHint.textContent = firstLint.errors.length ? firstLint.errors.length + " 个错误" : firstLint.warnings.length ? firstLint.warnings.length + " 个提醒" : "体检通过";
    }
    const foot = el("div", { class: "ss-card__foot" }, [
      previewBtn,
      parts.length > 1 ? allBtn : el("button", {
        class: "ss-btn ss-btn--primary",
        text: "写入",
        onclick: function(ev) {
          ev.stopPropagation();
          if (!parts.length) return;
          const r = ctx.writePart(msg.id, 0);
          ctx.toast(r.ok ? "已写入「" + labelOf(parts[0].branchId) + "」" : "写入失败");
        }
      }),
      lintHint
    ]);
    const card2 = el("div", { class: "ss-card" }, [head, rows, code, foot]);
    head.addEventListener("click", function() {
      card2.classList.toggle("ss-card--open");
    });
    return card2;
  }
  function actionRow(items) {
    const row2 = el("div", { class: "ss-msg__actions" });
    items.forEach(function(item) {
      if (!item) return;
      row2.appendChild(el("button", {
        class: "ss-mini-btn",
        onclick: item.onClick
      }, [item.icon ? svgIcon(item.icon, 14) : null, el("span", { text: item.label })]));
    });
    return row2;
  }
  function buildMessage(ctx, actions, msg) {
    const wrap = el("div", { class: "ss-msg" + (msg.role === "user" ? " ss-msg--me" : "") });
    if (msg.role === "user") {
      if (msg.editing) {
        const ta = el("textarea", { class: "ss-editor", text: msg.text || "" });
        wrap.appendChild(ta);
        wrap.appendChild(el("div", { class: "ss-msg__meta" }, [
          el("button", {
            class: "ss-btn ss-btn--primary",
            text: "保存",
            onclick: function() {
              ctx.editMessage(msg.id, ta.value);
              ctx.notify("chat");
            }
          }),
          el("button", {
            class: "ss-btn ss-btn--ghost",
            text: "取消",
            onclick: function() {
              ctx.notify("chat");
            }
          })
        ]));
        return wrap;
      }
      wrap.appendChild(el("div", { class: "ss-msg__bubble", text: msg.text || "" }));
      if (msg.images && msg.images.length) {
        const row2 = el("div", { class: "ss-msg__images" });
        msg.images.forEach(function(url) {
          const img = el("img", { class: "ss-msg__img", src: url, alt: "图片" });
          img.addEventListener("click", function() {
            actions.lightbox(url);
          });
          img.addEventListener("error", function() {
            img.style.opacity = "0.3";
          });
          row2.appendChild(img);
        });
        wrap.appendChild(row2);
      }
      wrap.appendChild(el("div", { class: "ss-msg__meta" }, [
        el("span", { text: fmtClock(msg.createdAt) }),
        msg.editedAt ? el("span", { text: "已编辑" }) : null
      ]));
      wrap.appendChild(actionRow([
        { label: "编辑", icon: "edit", onClick: function() {
          msg.editing = true;
          ctx.notify("chat");
        } },
        { label: "复制", icon: "copy", onClick: function() {
          copyWithToast(ctx, msg.text || "");
        } },
        {
          label: "删除",
          icon: "trash",
          onClick: function() {
            ctx.confirm({ title: "删除这条消息？", message: "只删对话记录，不影响分支里的 CSS。" }).then(function(ok) {
              if (ok) ctx.deleteMessage(msg.id);
            });
          }
        }
      ]));
      return wrap;
    }
    wrap.appendChild(markdownNode(msg.text || ""));
    if (msg.parts && msg.parts.length) wrap.appendChild(buildCard(ctx, actions, msg));
    if (msg.note) wrap.appendChild(el("div", { class: "ss-msg__meta", text: msg.note }));
    wrap.appendChild(actionRow([
      { label: "复制", icon: "copy", onClick: function() {
        copyWithToast(ctx, msg.raw || msg.text || "");
      } },
      { label: "重生成", icon: "refresh", onClick: function() {
        ctx.regenerate(msg.id);
      } },
      {
        label: "删除",
        icon: "trash",
        onClick: function() {
          ctx.confirm({ title: "删除这条回复？", message: "" }).then(function(ok) {
            if (ok) ctx.deleteMessage(msg.id);
          });
        }
      }
    ]));
    return wrap;
  }
  function renderThread(ctx, actions) {
    const thread = el("div", { class: "ss-thread" });
    if (ctx.state.loading) {
      thread.appendChild(el("div", { class: "ss-empty" }, [el("p", { text: "正在读取本地数据…" })]));
      return thread;
    }
    const nodeId = ctx.state.activeNodeId;
    const list = ctx.messages();
    if (!list.length) {
      thread.appendChild(el("div", { class: "ss-empty" }, [
        el("h2", { text: nodeId === "plan" ? "先把方向定下来" : labelOf(nodeId) }),
        el("p", { text: nodeHint(nodeId) }),
        el("div", { class: "ss-suggest" }, suggestionsFor(nodeId).map(function(s) {
          return el("button", {
            class: "ss-chip",
            text: s.label,
            onclick: function() {
              actions.fillInput(s.text);
            }
          });
        }))
      ]));
      return thread;
    }
    list.forEach(function(msg) {
      thread.appendChild(buildMessage(ctx, actions, msg));
    });
    if (ctx.state.busy) {
      thread.appendChild(el("div", { class: "ss-msg__meta", text: "正在生成…" }));
    }
    return thread;
  }
  function nodeHint(nodeId) {
    const node = getNode(nodeId);
    if (!node) return "";
    if (node.type === "plan") return "先把设计语言、令牌与验收标准定下来，后面每个部位都按它走。";
    if (node.type === "branch") return "这个对话只影响「" + node.label + "」，注入的参考提示词也只包含这一个部位。";
    const ids = branchIdsOf(nodeId);
    return "这个对话覆盖 " + ids.length + " 个部位，可以一次写多段，插件会按段写入各自的分支。";
  }
  function createComposer(ctx, actions) {
    const scopeBadge = el("button", { class: "ss-scope-badge" });
    const ta = el("textarea", {
      class: "ss-textarea",
      rows: "1",
      placeholder: "描述你想改的地方…"
    });
    const sendBtn = el("button", { class: "ss-send" }, [svgIcon("send", 16)]);
    const attachRow = el("div", { class: "ss-attach-row", style: { display: "none" } });
    const fileInput = el("input", { type: "file", accept: "image/*", multiple: "multiple", style: { display: "none" } });
    const eyeBtn = el("button", {
      class: "ss-icon-btn",
      style: { width: "28px", height: "28px" },
      title: "预览当前作用域",
      onclick: function() {
        const scope = scopeOf(ctx.state.activeNodeId) || "online";
        actions.openPreview("", "", scope);
      }
    }, [svgIcon("eye", 17)]);
    const imgBtn = el("button", {
      class: "ss-icon-btn",
      style: { width: "28px", height: "28px" },
      title: "发送图片",
      onclick: function() {
        fileInput.click();
      }
    }, [svgIcon("image", 17)]);
    const hint = el("div", { class: "ss-composer__hint" });
    fileInput.addEventListener("change", async function() {
      const files = Array.prototype.slice.call(fileInput.files || []).slice(0, 2);
      fileInput.value = "";
      for (let i = 0; i < files.length; i++) {
        try {
          const img = await compressImage(files[i]);
          ctx.state.draft.images.push(img);
        } catch (err) {
          ctx.toast("图片处理失败：" + (err.message || "未知错误"));
        }
      }
      sync();
    });
    function sync() {
      const nodeId = ctx.state.activeNodeId;
      const node2 = getNode(nodeId);
      const scope = scopeOf(nodeId);
      const ids = branchIdsOf(nodeId);
      const scopeText = scope ? SCOPE_LABEL[scope] || scope : "规划";
      scopeBadge.replaceChildren(
        el("span", { text: node2 ? node2.label : "" }),
        el("span", { style: { color: "var(--ss-muted)" }, text: ids.length ? "· " + ids.length : "" })
      );
      scopeBadge.title = "查看注入的提示词";
      scopeBadge.onclick = function() {
        actions.openPrompt(scopeText);
      };
      attachRow.replaceChildren();
      ctx.state.draft.images.forEach(function(img, i) {
        attachRow.appendChild(el("div", { class: "ss-attach" }, [
          el("img", { src: img.dataUrl, alt: "待发送图片" }),
          el("button", {
            title: "移除",
            onclick: function() {
              ctx.state.draft.images.splice(i, 1);
              sync();
            }
          }, [svgIcon("close", 11)])
        ]));
      });
      attachRow.style.display = ctx.state.draft.images.length ? "flex" : "none";
      const hasContent = !!(ta.value.trim() || ctx.state.draft.images.length);
      sendBtn.className = "ss-send" + (ctx.state.busy ? " ss-send--stop" : hasContent ? " ss-send--on" : "");
      sendBtn.replaceChildren(svgIcon(ctx.state.busy ? "close" : "send", 16));
      hint.textContent = ids.length ? "将写入 " + ids.length + " 个部位" : "";
    }
    ta.addEventListener("input", function() {
      ctx.state.draft.text = ta.value;
      ta.style.height = "auto";
      ta.style.height = Math.min(132, ta.scrollHeight) + "px";
      const hasContent = !!(ta.value.trim() || ctx.state.draft.images.length);
      sendBtn.className = "ss-send" + (ctx.state.busy ? " ss-send--stop" : hasContent ? " ss-send--on" : "");
    });
    sendBtn.addEventListener("click", function() {
      if (ctx.state.busy) {
        ctx.state.busy = false;
        ctx.toast("已忽略本次返回");
        sync();
        return;
      }
      const text = ta.value.trim();
      const images = ctx.state.draft.images.slice();
      if (!text && !images.length) return;
      ctx.state.draft = { text: "", images: [] };
      ta.value = "";
      ta.style.height = "auto";
      sync();
      ctx.send(text, images);
    });
    const box = el("div", { class: "ss-inputbox" }, [scopeBadge, ta, sendBtn]);
    const node = el("div", { class: "ss-composer" }, [
      attachRow,
      box,
      el("div", { class: "ss-composer__tools" }, [eyeBtn, imgBtn, hint]),
      fileInput
    ]);
    function setText(text) {
      ta.value = text;
      ctx.state.draft.text = text;
      ta.dispatchEvent(new Event("input", { bubbles: true }));
      ta.focus();
    }
    sync();
    return { node, sync, setText, focus: function() {
      ta.focus();
    } };
  }

  // src/ui/promptSheet.js
  function switchEl(on, onToggle, title) {
    const btn = el("button", {
      class: "ss-switch" + (on ? " ss-switch--on" : ""),
      title: title || ""
    });
    btn.addEventListener("click", onToggle);
    return btn;
  }
  function settingRow(label, hint, right) {
    return el("div", { class: "ss-setting" }, [
      el("div", { class: "ss-setting__main" }, [
        el("div", { class: "ss-setting__label", text: label }),
        hint ? el("div", { class: "ss-setting__hint", text: hint }) : null
      ]),
      right
    ]);
  }
  function renderPromptSheet(ctx, actions) {
    const nodeId = ctx.state.activeNodeId;
    const node = getNode(nodeId);
    const scope = scopeOf(nodeId);
    const cfg = ctx.promptCfg(nodeId);
    const badge = el("span", { class: "ss-sizebadge" });
    const body = el("div", { class: "ss-panel-body" });
    const pre = el("pre", { class: "ss-pre" });
    const branchList = el("div", { class: "ss-branch-list" });
    const warn = el("div", { class: "ss-panel-note", style: { color: "var(--ss-danger)" } });
    const presetBar = el("div", { class: "ss-presetbar" });
    function renderBadge() {
      const text = ctx.promptText(nodeId);
      badge.textContent = "约 " + Math.round(text.length / 1024 * 10) / 10 + " KB · 约 " + (estimateTokens(text) / 1e3).toFixed(1) + "k tokens";
      warn.textContent = text.length > 12 * 1024 ? "注入超过 12KB，建议关掉「完整参考」或切到单个部位对话。" : "";
    }
    function renderPresets() {
      presetBar.replaceChildren();
      const list = ctx.listPresets(scope || "");
      presetBar.appendChild(el("span", { class: "ss-presetbar__label", text: "提示词预设" }));
      const select = el("select", { class: "ss-select" });
      select.appendChild(el("option", { value: "", text: "不使用预设" }));
      list.forEach(function(p) {
        const opt = el("option", { value: p.id, text: p.name + (p.builtin ? "（内置）" : "") });
        if (p.id === cfg.presetId) opt.selected = true;
        select.appendChild(opt);
      });
      select.addEventListener("change", function() {
        cfg.presetId = select.value;
        ctx.setPromptCfg(nodeId, { presetId: select.value });
        renderAll();
      });
      presetBar.appendChild(select);
      presetBar.appendChild(el("button", {
        class: "ss-mini-btn",
        onclick: function() {
          actions.openPresets();
        }
      }, [svgIcon("edit", 14), el("span", { text: "编辑" })]));
    }
    function renderAll() {
      const text = ctx.promptText(nodeId);
      pre.textContent = text;
      badge.textContent = "约 " + Math.round(text.length / 1024 * 10) / 10 + " KB · 约 " + (estimateTokens(text) / 1e3).toFixed(1) + "k tokens";
      warn.textContent = text.length > 12 * 1024 ? "注入超过 12KB，建议关掉「完整参考」或切到单个部位对话。" : "";
      const items = ctx.targets(nodeId);
      branchList.replaceChildren();
      if (!items.length) {
        branchList.appendChild(el("div", {
          class: "ss-panel-note",
          text: "这个对话不产出具体部位 CSS（风格规划用）。"
        }));
        return;
      }
      branchList.appendChild(el("div", {
        class: "ss-panel-note",
        text: "目标部位（" + items.length + "）· 右侧开关控制是否参与导出与预览"
      }));
      items.forEach(function(item) {
        const sw = switchEl(!item.disabled, function() {
          const next = item.disabled;
          ctx.toggleBranch(item.id, next);
          ctx.toast("「" + item.label + "」" + (next ? "已参与导出与预览" : "已关闭"));
          renderAll();
        }, item.disabled ? "已关闭" : "参与导出与预览");
        branchList.appendChild(el("div", { class: "ss-branch-item" }, [
          el("div", { class: "ss-branch-item__main" }, [
            el("div", { class: "ss-branch-item__name", text: item.label }),
            el("div", {
              class: "ss-branch-item__id",
              text: item.id + (item.lines ? " · " + item.lines + " 行" : " · 空")
            })
          ]),
          sw
        ]));
      });
    }
    const hooksSwitch = switchEl(cfg.injectHooks, function() {
      cfg.injectHooks = !cfg.injectHooks;
      ctx.setPromptCfg(nodeId, { injectHooks: cfg.injectHooks });
      hooksSwitch.className = "ss-switch" + (cfg.injectHooks ? " ss-switch--on" : "");
      renderAll();
      ctx.toast(cfg.injectHooks ? "已注入钩子白名单" : "已关闭钩子白名单注入");
    });
    const existingSwitch = switchEl(cfg.injectExisting, function() {
      cfg.injectExisting = !cfg.injectExisting;
      ctx.setPromptCfg(nodeId, { injectExisting: cfg.injectExisting });
      existingSwitch.className = "ss-switch" + (cfg.injectExisting ? " ss-switch--on" : "");
      renderAll();
      ctx.toast(cfg.injectExisting ? "已注入该部位已有 CSS" : "已关闭已有 CSS 注入");
    });
    const refTabs = el("div", { class: "ss-seg" });
    [["off", "不注入"], ["condensed", "精炼"], ["full", "完整"]].forEach(function(pair) {
      const seg = el("button", {
        class: "ss-seg__item" + (cfg.refMode === pair[0] ? " ss-seg__item--on" : ""),
        text: pair[1]
      });
      seg.addEventListener("click", function() {
        cfg.refMode = pair[0];
        ctx.setPromptCfg(nodeId, { refMode: pair[0] });
        Array.prototype.forEach.call(refTabs.children, function(c, i) {
          c.className = "ss-seg__item" + (["off", "condensed", "full"][i] === cfg.refMode ? " ss-seg__item--on" : "");
        });
        renderAll();
      });
      refTabs.appendChild(seg);
    });
    const head = el("div", { class: "ss-sheet__head" }, [
      el("div", { class: "ss-sheet__title", text: "提示词" }),
      badge,
      el("button", {
        class: "ss-icon-btn",
        title: "复制提示词",
        onclick: function() {
          copyText(ctx.promptText(nodeId)).then(function(r) {
            const text = ctx.promptText(nodeId);
            ctx.toast(r.ok ? "已复制提示词（" + formatSize(text.length) + "）" : "复制失败，请长按选择复制");
          });
        }
      }, [svgIcon("copy", 18)]),
      el("button", { class: "ss-icon-btn", onclick: actions.closePrompt }, [svgIcon("close", 18)])
    ]);
    const crumb = breadcrumb(nodeId).split(" · ").filter(function(s, i, arr) {
      return arr.indexOf(s) === i;
    }).join(" › ");
    const settings = el("div", { class: "ss-settings" }, [
      el("div", { class: "ss-panel-note", text: (ctx.state.project ? ctx.state.project.name + " › " : "") + crumb }),
      settingRow("注入钩子白名单", "默认关闭；开启会把该作用域的可用 class 全列给 AI", hooksSwitch),
      settingRow("注入已有 CSS", "默认关闭；开启会把该部位当前代码一起发过去", existingSwitch),
      settingRow("参考片段", "《全部 css 整理版》里对应小节的写法参照", refTabs),
      presetBar
    ]);
    body.appendChild(warn);
    body.appendChild(el("div", { class: "ss-panel-note", text: "本次实际注入（与发送给 AI 的完全一致）" }));
    body.appendChild(pre);
    body.appendChild(branchList);
    renderPresets();
    renderAll();
    return el("div", { class: "ss-prompt-panel" }, [head, settings, body]);
  }

  // src/ui/exportSheet.js
  function renderExportSheet(ctx, actions) {
    const body = el("div", { class: "ss-sheet__body" });
    ["online", "offline", "global"].forEach(function(scope) {
      const written = writtenCount(ctx.state.branches, scope);
      const total = totalCount(scope);
      const built = buildScopeCss(scope, ctx.state.branches, ctx.state.assets);
      const errs = built.report.errors.length;
      const warns = built.report.warnings.length;
      const row2 = el("button", { class: "ss-export-row" }, [
        el("div", { class: "ss-export-row__main" }, [
          el("div", { class: "ss-export-row__name", text: SCOPE_LABEL[scope] + "皮肤" }),
          el("div", {
            class: "ss-export-row__hint",
            text: written ? errs ? errs + " 个错误 · " + warns + " 个提醒" : warns ? warns + " 个提醒" : "体检通过" : "还没有内容"
          })
        ]),
        el("span", { class: "ss-export-row__count", text: written + "/" + total }),
        svgIcon("chevron", 16)
      ]);
      row2.addEventListener("click", function() {
        actions.openExportResult(scope);
      });
      body.appendChild(row2);
    });
    const allRow = el("button", { class: "ss-export-row" }, [
      el("div", { class: "ss-export-row__main" }, [
        el("div", { class: "ss-export-row__name", text: "全部（三份依次生成）" }),
        el("div", { class: "ss-export-row__hint", text: "线上 / 线下 / 全局 各一份，可在结果页逐个保存" })
      ]),
      svgIcon("chevron", 16)
    ]);
    allRow.addEventListener("click", function() {
      actions.openExportResult("all");
    });
    body.appendChild(allRow);
    return el("div", { class: "ss-sheet-inner" }, [
      el("div", { class: "ss-sheet__head" }, [
        el("div", { class: "ss-sheet__title", text: "导出 CSS" }),
        el("button", { class: "ss-icon-btn", onclick: actions.closeExport }, [svgIcon("close", 18)])
      ]),
      body
    ]);
  }

  // src/core/saveFile.js
  function filenameSafe(name) {
    return String(name || "skin.css").replace(/[\\/:*?"<>|\s]+/g, "-");
  }
  function saveFile(name, content, mime) {
    const fileName2 = filenameSafe(name);
    let url = "";
    try {
      const blob = new Blob([String(content == null ? "" : content)], {
        type: mime || "text/css;charset=utf-8"
      });
      url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName2;
      a.rel = "noopener";
      a.style.display = "none";
      (document.documentElement || document.body).appendChild(a);
      a.click();
      setTimeout(function() {
        if (a.parentNode) a.parentNode.removeChild(a);
      }, 1500);
      setTimeout(function() {
        try {
          URL.revokeObjectURL(url);
        } catch (err) {
        }
      }, 3e4);
      return { ok: true, name: fileName2 };
    } catch (err) {
      if (url) {
        try {
          URL.revokeObjectURL(url);
        } catch (e) {
        }
      }
      return { ok: false, reason: err && err.message || "save-failed" };
    }
  }
  function canShare(name, content, mime) {
    try {
      if (!navigator.canShare || typeof File !== "function") return false;
      const file = new File([String(content || "")], filenameSafe(name), {
        type: mime || "text/css;charset=utf-8"
      });
      return !!navigator.canShare({ files: [file] });
    } catch (err) {
      return false;
    }
  }
  async function shareFile(name, content, mime) {
    if (!canShare(name, content, mime)) return { ok: false, reason: "unsupported" };
    try {
      const file = new File([String(content || "")], filenameSafe(name), {
        type: mime || "text/css;charset=utf-8"
      });
      await navigator.share({ files: [file], title: filenameSafe(name) });
      return { ok: true };
    } catch (err) {
      return { ok: false, reason: err && err.message || "share-cancelled" };
    }
  }

  // src/ui/exportResult.js
  function withLineNumbers(css) {
    const lines = String(css || "").split("\n");
    const nums = el("div", { class: "ss-code__nums" });
    const code = el("pre", { class: "ss-code__text" });
    nums.textContent = lines.map(function(_, i) {
      return String(i + 1);
    }).join("\n");
    code.textContent = lines.join("\n");
    return el("div", { class: "ss-codebox" }, [nums, code]);
  }
  function renderExportResult(ctx, actions, initialScope) {
    let scope = initialScope === "all" ? "online" : initialScope || "online";
    let showAll = initialScope === "all";
    const tabs = el("div", { class: "ss-pv__tabs" });
    const head = el("div", { class: "ss-screen__bar" });
    const meta = el("div", { class: "ss-exportmeta" });
    const body = el("div", { class: "ss-exportbody" });
    const foot = el("div", { class: "ss-pv__foot" });
    const history = el("div", { class: "ss-history" });
    function built() {
      return ctx.buildScope(scope);
    }
    function renderTabs() {
      tabs.replaceChildren();
      ["online", "offline", "global"].forEach(function(id) {
        const tab = el("button", {
          class: "ss-tab" + (scope === id ? " ss-tab--on" : ""),
          text: SCOPE_LABEL[id]
        });
        tab.addEventListener("click", function() {
          scope = id;
          showAll = false;
          renderTabs();
          renderBody();
          renderFoot();
        });
        tabs.appendChild(tab);
      });
    }
    function renderBody() {
      const b = built();
      body.replaceChildren();
      if (!b.report.stats.branches) {
        body.appendChild(el("div", { class: "ss-empty" }, [
          el("h2", { text: SCOPE_LABEL[scope] + "还没有内容" }),
          el("p", { text: "回到对话里写几条，或换一个作用域。" })
        ]));
        meta.textContent = "";
        return;
      }
      meta.textContent = b.name + " · " + b.report.stats.branches + " 个分支 · " + Math.round(b.css.length / 1024) + " KB" + (b.report.errors.length ? " · " + b.report.errors.length + " 个错误" : "") + (b.report.warnings.length ? " · " + b.report.warnings.length + " 个提醒" : "");
      body.appendChild(withLineNumbers(b.css));
    }
    function toastResult(r, okText, failText) {
      ctx.toast(r.ok ? okText : failText + (r.reason ? "：" + r.reason : ""));
    }
    function record() {
      const b = built();
      if (!b.report.stats.branches) return;
      ctx.recordExport(scope, b);
      renderHistory();
    }
    function renderFoot() {
      foot.replaceChildren();
      const b = built();
      const disabled = !b.report.stats.branches;
      const copyBtn = el("button", {
        class: "ss-btn ss-btn--primary",
        style: { flex: "1 1 0" },
        text: "复制全部"
      });
      copyBtn.disabled = disabled;
      copyBtn.addEventListener("click", function() {
        copyText(built().css).then(function(r) {
          toastResult(r, "已复制 " + formatSize(built().css.length), "复制失败，请长按选择复制");
          if (r.ok) record();
        });
      });
      const saveBtn = el("button", { class: "ss-btn ss-btn--ghost", text: "保存为文件" });
      saveBtn.disabled = disabled;
      saveBtn.addEventListener("click", function() {
        const cur = built();
        const r = saveFile(cur.name, cur.css);
        toastResult(r, "已交给系统保存：" + cur.name, "保存失败");
        if (!r.ok) ctx.toast("保存没成功，可以用「复制全部」再粘到美化面板");
        else record();
      });
      foot.appendChild(copyBtn);
      foot.appendChild(saveBtn);
      if (canShare(b.name, b.css)) {
        const shareBtn = el("button", { class: "ss-btn ss-btn--ghost", text: "分享" });
        shareBtn.addEventListener("click", function() {
          const cur = built();
          shareFile(cur.name, cur.css).then(function(r) {
            toastResult(r, "已打开分享", "分享未完成");
            if (r.ok) record();
          });
        });
        foot.appendChild(shareBtn);
      }
      if (showAll) {
        const allBtn = el("button", {
          class: "ss-btn ss-btn--ghost",
          text: "三份都保存"
        });
        allBtn.addEventListener("click", function() {
          const list = ["online", "offline", "global"].map(function(id) {
            return ctx.buildScope(id);
          }).filter(function(b2) {
            return b2.report.stats.branches > 0;
          });
          if (!list.length) {
            ctx.toast("三个作用域都还没有内容");
            return;
          }
          list.forEach(function(b2, i) {
            setTimeout(function() {
              saveFile(b2.name, b2.css);
              ctx.recordExport(b2.scope, b2);
              if (i === list.length - 1) {
                ctx.toast("已依次生成 " + list.length + " 份文件");
                renderHistory();
              }
            }, i * 350);
          });
        });
        foot.appendChild(allBtn);
      }
    }
    function renderHistory() {
      const list = ctx.exportRecords();
      history.replaceChildren();
      const title = el("button", { class: "ss-history__head" }, [
        el("span", { text: "历史版本（" + list.length + "）" }),
        svgIcon("chevron", 14)
      ]);
      const box = el("div", { class: "ss-history__list", style: { display: "none" } });
      title.addEventListener("click", function() {
        box.style.display = box.style.display === "none" ? "block" : "none";
      });
      history.appendChild(title);
      list.forEach(function(rec) {
        const row2 = el("div", { class: "ss-history__row" }, [
          el("button", { class: "ss-history__main" }, [
            el("div", { class: "ss-history__name", text: rec.name }),
            el("div", {
              class: "ss-history__meta",
              text: (SCOPE_LABEL[rec.scope] || rec.scope) + " · " + new Date(rec.at).toLocaleString("zh-CN") + " · " + formatSize((rec.css || "").length) + (rec.truncated ? "（已截断）" : "")
            })
          ]),
          el("button", {
            class: "ss-mini-btn",
            onclick: function() {
              copyText(rec.css || "").then(function(r) {
                ctx.toast(r.ok ? "已复制历史版本" : "复制失败");
              });
            }
          }, [svgIcon("copy", 14), el("span", { text: "复制" })]),
          el("button", {
            class: "ss-mini-btn",
            onclick: function() {
              ctx.deleteExportRecord(rec.id);
              renderHistory();
            }
          }, [svgIcon("trash", 14)])
        ]);
        box.appendChild(row2);
      });
      if (!list.length) {
        box.appendChild(el("div", { class: "ss-panel-note", text: "还没有导出记录" }));
      }
      history.appendChild(box);
    }
    head.appendChild(el("button", { class: "ss-icon-btn", onclick: actions.closeScreen }, [svgIcon("back", 18)]));
    head.appendChild(el("div", { class: "ss-crumb__main", style: { flex: "1 1 auto", textAlign: "center" }, text: "导出结果" }));
    head.appendChild(el("button", { class: "ss-icon-btn", onclick: actions.closeScreen }, [svgIcon("close", 18)]));
    renderTabs();
    renderBody();
    renderFoot();
    renderHistory();
    return el("div", { class: "ss-exportpage" }, [head, tabs, meta, body, foot, history]);
  }

  // src/ui/presetEditor.js
  function renderPresetEditor(ctx, actions) {
    const page = el("div", { class: "ss-exportpage" });
    const head = el("div", { class: "ss-screen__bar" });
    const content = el("div", { class: "ss-scroll-page" });
    head.appendChild(el("button", { class: "ss-icon-btn", onclick: actions.closeScreen }, [svgIcon("back", 18)]));
    head.appendChild(el("div", { class: "ss-crumb__main", style: { flex: "1 1 auto", textAlign: "center" }, text: "提示词预设" }));
    head.appendChild(el("button", {
      class: "ss-icon-btn",
      title: "新建预设",
      onclick: function() {
        openEditor(null);
      }
    }, [svgIcon("plus", 18)]));
    function renderList() {
      clear(content);
      content.appendChild(el("div", {
        class: "ss-panel-note",
        text: "预设会追加到系统提示词的末尾，用来写风格取向、禁令与验收标准；每个对话在提示词面板里选一套。"
      }));
      ctx.listPresets("").forEach(function(p) {
        const row2 = el("div", { class: "ss-preset-row" }, [
          el("button", { class: "ss-preset-row__main" }, [
            el("div", { class: "ss-preset-row__name", text: p.name }),
            el("div", {
              class: "ss-preset-row__meta",
              text: (p.builtin ? "内置 · 只读" : "自定义") + " · " + (p.scope === "*" ? "全作用域" : SCOPE_LABEL[p.scope] || p.scope) + " · " + (p.text || "").length + " 字"
            })
          ]),
          el("button", {
            class: "ss-mini-btn",
            title: "复制一份再改",
            onclick: function() {
              const copy = ctx.clonePreset(p);
              ctx.toast("已复制为「" + copy.name + "」");
              renderList();
            }
          }, [svgIcon("copy", 14), el("span", { text: "复制" })]),
          el("button", {
            class: "ss-mini-btn",
            onclick: function() {
              openEditor(p);
            }
          }, [svgIcon("edit", 14), el("span", { text: p.builtin ? "查看" : "编辑" })])
        ]);
        content.appendChild(row2);
      });
    }
    function openEditor(preset) {
      const isNew = !preset;
      const readOnly = !!(preset && preset.builtin);
      const nameInput = el("input", {
        class: "ss-field__input",
        placeholder: "预设名称",
        value: preset ? preset.name : ""
      });
      const scopeSelect = el("select", { class: "ss-select" });
      [["*", "全作用域"], ["online", "线上"], ["offline", "线下"], ["global", "全局"]].forEach(function(pair) {
        const opt = el("option", { value: pair[0], text: pair[1] });
        if ((preset ? preset.scope : "*") === pair[0]) opt.selected = true;
        scopeSelect.appendChild(opt);
      });
      const textarea = el("textarea", {
        class: "ss-preset-editor",
        placeholder: "例如：整体取向、允许的颜色、禁止的做法、验收标准…"
      });
      textarea.value = preset ? preset.text : "";
      if (readOnly) {
        nameInput.setAttribute("disabled", "disabled");
        textarea.setAttribute("disabled", "disabled");
      }
      const pageBox = el("div", { class: "ss-preset-editorbox" }, [
        el("div", { class: "ss-panel-note", text: isNew ? "新建预设" : readOnly ? "内置预设（只读，可复制后改）" : "编辑预设" }),
        nameInput,
        scopeSelect,
        textarea
      ]);
      const foot = el("div", { class: "ss-pv__foot" });
      if (isNew || !readOnly) {
        foot.appendChild(el("button", {
          class: "ss-btn ss-btn--primary",
          style: { flex: "1 1 0" },
          text: "保存",
          onclick: function() {
            const name = nameInput.value.trim() || "未命名预设";
            if (isNew) {
              ctx.savePreset({ name, text: textarea.value, scope: scopeSelect.value });
            } else {
              ctx.savePreset({ id: preset.id, name, text: textarea.value, scope: scopeSelect.value });
            }
            ctx.toast("已保存预设");
            renderList();
          }
        }));
      } else {
        foot.appendChild(el("button", {
          class: "ss-btn ss-btn--primary",
          style: { flex: "1 1 0" },
          text: "复制为自定义",
          onclick: function() {
            const copy = ctx.clonePreset(preset);
            ctx.toast("已复制为「" + copy.name + "」");
            openEditor(copy);
          }
        }));
      }
      if (!isNew && !readOnly) {
        foot.appendChild(el("button", {
          class: "ss-btn ss-btn--danger",
          text: "删除",
          onclick: function() {
            ctx.confirm({ title: "删除预设？", message: "引用它的对话会回退为「不使用预设」。" }).then(function(ok) {
              if (!ok) return;
              ctx.deletePreset(preset.id);
              renderList();
            });
          }
        }));
      }
      foot.appendChild(el("button", {
        class: "ss-btn ss-btn--ghost",
        text: "返回",
        onclick: renderList
      }));
      clear(content);
      content.appendChild(pageBox);
      content.appendChild(foot);
    }
    page.appendChild(head);
    page.appendChild(content);
    renderList();
    return page;
  }

  // src/core/generators.js
  var GENERATORS = [
    { kind: "bg", name: "背景层", needAsset: true, desc: "铺满 + 居中 + 不重复，可选夜间压暗层" },
    { kind: "avatar-frame", name: "头像框", needAsset: true, desc: "::after 覆盖层，不动宿主头像尺寸" },
    { kind: "icon-replace", name: "图标替换", needAsset: true, desc: "隐藏原图标，按钮本体换图" },
    { kind: "palette", name: "取色器", needAsset: true, desc: "从图里提主色/辅色，并给夜间建议" },
    { kind: "pattern", name: "纯 CSS 花纹", needAsset: false, desc: "细线格栅 / 纸噪点 / 拱形遮罩" }
  ];
  var TARGETS = {
    bg: [".chat-scroll-area", ".offline-mode__scroll", "body"],
    "avatar-frame": [".chat-message-avatar", ".offline-card__avatar-shell"],
    "icon-replace": [".chat-plus-action__icon", ".chat-header-button__icon"]
  };
  function targetOf(options, fallback) {
    return options && options.target || fallback;
  }
  function hexToRgb(hex) {
    const h = String(hex || "").replace("#", "");
    const full = h.length === 3 ? h.split("").map(function(c) {
      return c + c;
    }).join("") : h;
    return {
      r: parseInt(full.slice(0, 2), 16) || 0,
      g: parseInt(full.slice(2, 4), 16) || 0,
      b: parseInt(full.slice(4, 6), 16) || 0
    };
  }
  function rgbToHex(r, g, b) {
    function p(n) {
      const v = Math.max(0, Math.min(255, Math.round(n)));
      return v < 16 ? "0" + v.toString(16) : v.toString(16);
    }
    return "#" + p(r) + p(g) + p(b);
  }
  function nightVariant(hex) {
    const c = hexToRgb(hex);
    const r = c.r * 0.55 + 12;
    const g = c.g * 0.55 + 12;
    const b = c.b * 0.55 + 14;
    return rgbToHex(r, g, b);
  }
  function contrastInk(hex) {
    const c = hexToRgb(hex);
    const lum = (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b) / 255;
    return lum > 0.6 ? "#1b1c1f" : "#ffffff";
  }
  function generate(kind, asset, options) {
    const opts = options || {};
    const warnings = [];
    const slug = asset ? asset.slug || slugify(asset.name) : "";
    const v = slug ? "var(--ss-img-" + slug + ")" : "";
    if (kind !== "pattern" && !asset) {
      return { css: "", warnings: ["这个生成器需要先选一张素材"] };
    }
    if (kind === "bg") {
      const target = targetOf(opts, TARGETS.bg[0]);
      const dim = opts.dim === false ? "" : "linear-gradient(rgba(0,0,0," + (opts.dimAlpha || 0.35) + "),rgba(0,0,0," + (opts.dimAlpha || 0.35) + ")), ";
      return {
        css: target + "{\n  background-image: " + dim + v + ";\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n",
        warnings
      };
    }
    if (kind === "avatar-frame") {
      const target = targetOf(opts, TARGETS["avatar-frame"][0]);
      const inset = opts.inset || "-8%";
      return {
        css: target + "{\n  position: relative;\n}\n\n" + target + '::after{\n  content: "";\n  position: absolute;\n  inset: ' + inset + ";\n  background: " + v + " center/100% 100% no-repeat;\n  pointer-events: none;\n}\n",
        warnings: warnings.concat(["如果宿主头像本身是内联 background-image，框会盖在它上面，必要时给 ::after 加 z-index"])
      };
    }
    if (kind === "icon-replace") {
      const target = targetOf(opts, TARGETS["icon-replace"][0]);
      return {
        css: target + "{\n  opacity: 0;\n}\n\n" + target.replace(/__icon$/, "") + "{\n  background-image: " + v + ";\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n",
        warnings: warnings.concat(["按钮本体可能已有背景色，必要时补 background-color: transparent"])
      };
    }
    if (kind === "palette") {
      const colors = opts.colors || {};
      const main = colors.main || "#4d6bfe";
      const sub = colors.sub || "#9ca3af";
      return {
        css: ":root{\n  --ss-accent: " + main + ";\n  --ss-accent-soft: " + main + "22;\n  --ss-muted: " + sub + ";\n  --ss-on-accent: " + contrastInk(main) + ";\n}\n@media (prefers-color-scheme: dark){\n  :root{\n    --ss-accent: " + nightVariant(main) + ";\n    --ss-muted: " + nightVariant(sub) + ";\n  }\n}\n",
        warnings
      };
    }
    if (kind === "pattern") {
      const p = opts.pattern || "grid";
      if (p === "noise") {
        return {
          css: ".chat-scroll-area{\n  background-image: radial-gradient(rgba(0,0,0,.045) 1px, transparent 1px);\n  background-size: 3px 3px;\n}\n",
          warnings: []
        };
      }
      if (p === "arch") {
        return {
          css: ".chat-message-avatar{\n  -webkit-mask-image: radial-gradient(circle at 50% 120%, #000 70%, transparent 71%);\n  mask-image: radial-gradient(circle at 50% 120%, #000 70%, transparent 71%);\n}\n",
          warnings: ["遮罩会改变头像裁切形状，但不动尺寸；不想要时删掉这条即可"]
        };
      }
      return {
        css: ".chat-plus-action{\n  box-shadow: inset 1px 0 0 rgba(0,0,0,.06), inset 0 1px 0 rgba(0,0,0,.06);\n}\n",
        warnings: []
      };
    }
    return { css: "", warnings: ["未知的生成器类型：" + kind] };
  }

  // src/ui/assetsView.js
  function renderAssets(ctx, actions) {
    let selected = null;
    let targetId = "";
    const grid = el("div", { class: "ss-assets-grid" });
    const panel = el("div");
    const urlInput = el("input", { placeholder: "粘贴图片外链 https://…", type: "url" });
    const nameInput = el("input", { placeholder: "素材名（用于变量名）", style: { maxWidth: "42%" } });
    function targets() {
      return ctx.targets().filter(function(t) {
        return !t.disabled;
      });
    }
    function ensureTarget() {
      const list = targets();
      if (!targetId || !list.some(function(t) {
        return t.id === targetId;
      })) {
        targetId = list.length ? list[0].id : "";
      }
      return targetId;
    }
    const page = el("div", { class: "ss-scroll-page" }, [
      el("div", {
        style: { fontSize: "12px", color: "var(--ss-muted)", lineHeight: "1.7", marginBottom: "10px" },
        text: "只存链接与元数据，不内嵌图片。素材写成 var(--ss-img-名字)，换图只改一行。生成器写入当前对话的第一个目标部位。"
      }),
      el("div", { class: "ss-field" }, [nameInput, urlInput]),
      el("div", { style: { display: "flex", gap: "8px" } }, [
        el("button", {
          class: "ss-btn ss-btn--primary",
          text: "添加",
          onclick: function() {
            const url = urlInput.value.trim();
            if (!url) return;
            const asset = ctx.addAsset(nameInput.value.trim() || "素材 " + (ctx.state.assets.length + 1), url);
            if (!asset) {
              ctx.toast("链接不合法，只能 http(s) 外链");
              return;
            }
            urlInput.value = "";
            nameInput.value = "";
            probe(asset);
            renderGrid();
            ctx.toast("已添加 " + varName(asset));
          }
        }),
        el("button", {
          class: "ss-btn ss-btn--ghost",
          text: "收录对话里的链接",
          onclick: function() {
            const all = Object.keys(ctx.state.chats).map(function(nodeId) {
              return (ctx.state.chats[nodeId] || []).map(function(m) {
                return (m.parts || []).map(function(p) {
                  return p.css;
                }).join("\n");
              }).join("\n");
            }).join("\n");
            const urls = extractAssetUrls(all);
            let added = 0;
            urls.forEach(function(u) {
              if (ctx.state.assets.some(function(a) {
                return a.url === u;
              })) return;
              if (ctx.addAsset("对话素材 " + (ctx.state.assets.length + 1), u)) added += 1;
            });
            renderGrid();
            ctx.toast(added ? "收录了 " + added + " 张" : "没有发现新的外链");
          }
        })
      ]),
      grid,
      panel
    ]);
    function probe(asset) {
      const img = new Image();
      img.onload = function() {
        ctx.updateAsset(asset.id, { width: img.naturalWidth, height: img.naturalHeight });
        renderGrid();
      };
      img.onerror = function() {
      };
      img.src = asset.url;
    }
    function renderGrid() {
      grid.replaceChildren();
      if (!ctx.state.assets.length) {
        grid.appendChild(el("div", {
          style: { gridColumn: "1 / -1", padding: "20px 0", textAlign: "center", fontSize: "12px", color: "var(--ss-muted)" },
          text: "还没有素材。上方粘贴一个图片链接试试。"
        }));
        return;
      }
      ctx.state.assets.forEach(function(asset) {
        const refs = ctx.assetRefs(asset);
        const card2 = el("button", { class: "ss-asset" }, [
          el("img", {
            src: asset.url,
            alt: asset.name,
            loading: "lazy",
            onerror: function(ev) {
              ev.target.style.display = "none";
              ev.target.parentNode.appendChild(el("div", { class: "ss-asset__fallback", text: "加载失败" }));
            }
          }),
          refs.length ? el("span", { class: "ss-asset__used", text: "×" + refs.length }) : null,
          el("span", { class: "ss-asset__name", text: asset.name })
        ]);
        card2.addEventListener("click", function() {
          selected = asset;
          renderPanel();
        });
        grid.appendChild(card2);
      });
    }
    function renderPanel() {
      panel.replaceChildren();
      if (!selected) return;
      const asset = selected;
      const refs = ctx.assetRefs(asset);
      panel.appendChild(el("div", { style: { height: "1px", background: "var(--ss-line)", margin: "16px 0 12px" } }));
      panel.appendChild(el("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, [
        el("div", { style: { flex: "1 1 auto", minWidth: "0" } }, [
          el("div", { style: { fontSize: "14px", fontWeight: "600" }, text: asset.name }),
          el("div", {
            style: { fontSize: "11px", color: "var(--ss-muted)", fontFamily: "var(--ss-mono)", wordBreak: "break-all" },
            text: asset.url
          }),
          el("div", {
            style: { fontSize: "11px", color: "var(--ss-muted)", marginTop: "2px" },
            text: (asset.width || "?") + " × " + (asset.height || "?") + (refs.length ? " · 被 " + refs.map(function(r) {
              return r.name;
            }).join("、") + " 引用" : " · 未被引用")
          })
        ]),
        el("button", {
          class: "ss-icon-btn",
          title: "复制变量名",
          onclick: function() {
            const name = varName(asset);
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(name).catch(function() {
              });
            }
            ctx.toast("已复制 " + name);
          }
        }, [svgIcon("copy", 17)]),
        el("button", {
          class: "ss-icon-btn",
          title: "删除",
          onclick: function() {
            const doDelete = function() {
              ctx.removeAsset(asset.id);
              if (selected && selected.id === asset.id) selected = null;
              renderGrid();
              renderPanel();
              ctx.toast("已删除素材");
            };
            if (!refs.length) return doDelete();
            ctx.confirm({
              title: "这个素材正被引用",
              message: "被 " + refs.map(function(r) {
                return r.name;
              }).join("、") + " 引用，删除后这些分支会失效。仍要删除？"
            }).then(function(ok) {
              if (ok) doDelete();
            });
          }
        }, [svgIcon("trash", 17)])
      ]));
      const list = targets();
      ensureTarget();
      if (list.length > 1) {
        panel.appendChild(el("div", {
          style: { marginTop: "12px", fontSize: "12px", color: "var(--ss-sub, #4b5563)" },
          text: "写入到"
        }));
        const chips = el("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "6px" } });
        list.forEach(function(t) {
          const chip = el("button", {
            class: "ss-chip" + (t.id === targetId ? " ss-chip--on" : ""),
            text: t.label
          });
          chip.addEventListener("click", function() {
            targetId = t.id;
            renderPanel();
          });
          chips.appendChild(chip);
        });
        panel.appendChild(chips);
      }
      const genList = el("div", { class: "ss-gen-list" });
      GENERATORS.forEach(function(gen) {
        const row2 = el("button", { class: "ss-gen" }, [
          el("div", { class: "ss-gen__main" }, [
            el("div", { class: "ss-gen__name", text: gen.name }),
            el("div", { class: "ss-gen__desc", text: gen.desc })
          ]),
          svgIcon("chevron", 16)
        ]);
        row2.addEventListener("click", function() {
          runGenerator(gen, asset);
        });
        genList.appendChild(row2);
      });
      panel.appendChild(el("div", {
        style: { marginTop: "12px", fontSize: "12px", color: "var(--ss-ink-2)" },
        text: "生成片段（追加到「" + (targetId ? labelOf(targetId) : "未选目标") + "」）"
      }));
      panel.appendChild(genList);
    }
    function runGenerator(gen, asset) {
      ensureTarget();
      if (!targetId) {
        ctx.toast("当前对话没有可写入的部位，去侧边栏选一个");
        return;
      }
      if (gen.kind === "pattern") {
        const built2 = generate("pattern", null, {});
        const r2 = ctx.writeToBranch(targetId, built2.css, "APPEND", "generator");
        ctx.toast(r2.ok ? "已追加花纹" : "写入失败");
        return;
      }
      const built = generate(gen.kind, asset, {});
      if (!built.css) {
        ctx.toast(built.warnings[0] || "生成失败");
        return;
      }
      const r = ctx.insertAsset(asset, built, targetId);
      ctx.toast((r && r.tokenWritten ? "已写入令牌 + 片段" : "已追加片段") + " → " + labelOf(targetId));
      if (built.warnings.length) setTimeout(function() {
        ctx.toast(built.warnings[0]);
      }, 900);
    }
    renderGrid();
    return page;
  }

  // src/ui/settings.js
  function row(label, hint, right) {
    return el("div", { class: "ss-list__row" }, [
      el("div", { class: "ss-list__main" }, [
        el("div", { class: "ss-list__label", text: label }),
        hint ? el("div", { class: "ss-list__hint", text: hint }) : null
      ]),
      right || null
    ]);
  }
  function renderSettings(ctx, actions) {
    const page = el("div", { class: "ss-scroll-page" });
    const scope = scopeOf(ctx.state.activeNodeId) || "online";
    const tempValue = el("span", { class: "ss-list__value", text: String(ctx.state.settings.temperature) });
    const slider = el("input", {
      type: "range",
      min: "0",
      max: "1.2",
      step: "0.1",
      value: String(ctx.state.settings.temperature),
      style: { width: "110px", accentColor: "var(--ss-accent)" }
    });
    slider.addEventListener("input", function() {
      tempValue.textContent = slider.value;
    });
    slider.addEventListener("change", function() {
      ctx.setSetting("temperature", Number(slider.value));
    });
    page.appendChild(el("div", { class: "ss-list" }, [
      row(
        "发散程度",
        "越低越稳定，改样式建议 0.3–0.5",
        el("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, [slider, tempValue])
      ),
      row(
        "发送图片",
        "宿主 AI 不支持多模态时会自动降级为纯文字",
        el("button", {
          class: "ss-switch" + (ctx.state.settings.imageEnabled ? " ss-switch--on" : ""),
          onclick: function() {
            ctx.setSetting("imageEnabled", !ctx.state.settings.imageEnabled);
          }
        })
      ),
      row(
        "临时应用到宿主（" + SCOPE_LABEL[scope] + "）",
        "会改动真实页面外观，仅本次运行有效",
        el("button", {
          class: "ss-switch" + (ctx.liveApplied() ? " ss-switch--on" : ""),
          onclick: function() {
            if (ctx.liveApplied()) {
              ctx.clearLive();
              ctx.toast("已移除临时样式");
              actions.refreshScreen();
              return;
            }
            ctx.confirm({ title: "临时应用到宿主？", message: "立刻改动 Roche 真实页面外观，重启后失效。" }).then(function(ok) {
              if (!ok) return;
              ctx.applyLive(scope);
              ctx.toast("已临时应用");
              actions.refreshScreen();
            });
          }
        })
      )
    ]));
    const list2 = el("div", { class: "ss-list" });
    ["online", "offline", "global"].forEach(function(id) {
      list2.appendChild(row(
        SCOPE_LABEL[id],
        id === "online" ? "聊天页：气泡、引用、卡片、输入栏" : id === "offline" ? "线下模式：档案卡与侧栏" : "主页、桌面、动态、列表",
        el("span", { class: "ss-list__value", text: writtenCount(ctx.state.branches, id) + "/" + totalCount(id) })
      ));
    });
    page.appendChild(el("div", {
      style: { marginTop: "22px", fontSize: "12px", color: "var(--ss-muted)" },
      text: "内容进度"
    }));
    page.appendChild(list2);
    const list3 = el("div", { class: "ss-list", style: { marginTop: "22px" } });
    const clearRow = row(
      "清空全部数据",
      "分支 CSS、全部对话、素材都会删除，无法恢复",
      el("span", { class: "ss-btn ss-btn--danger", text: "清空" })
    );
    clearRow.addEventListener("click", function() {
      ctx.confirm({ title: "清空全部数据？", message: "所有分支 CSS 与对话记录都会删除，无法撤销。" }).then(function(ok) {
        if (ok) ctx.clearAll();
      });
    });
    list3.appendChild(clearRow);
    page.appendChild(list3);
    page.appendChild(el("div", {
      style: { marginTop: "22px", fontSize: "11px", color: "var(--ss-muted)", lineHeight: "1.8" }
    }, [
      el("div", { text: "美化工作室 v" + ctx.version }),
      el("div", { text: "数据存在 roche.storage（插件私有），卸载插件会一并清理。" }),
      el("div", { text: "气泡圆角、尾巴形状、头像间距归「聊天外观」设置，本插件不做覆盖。" })
    ]));
    return page;
  }

  // src/ui/preview/baseline.css
  var baseline_default = '/* 预览基线：抄宿主关键默认值，未写美化时应与 Roche 原版观感一致 */\n* {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, "PingFang SC", system-ui, sans-serif;\n  background: #fff;\n  color: #111;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n}\nbutton {\n  font: inherit;\n  color: inherit;\n  border: 0;\n  background: none;\n}\n\n/* ================= 线上：聊天页 ================= */\n.chat-viewport-root {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n  background: #fff;\n}\nheader.chat-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-bottom: 1px solid #efefef;\n  background: #fff;\n  flex: 0 0 auto;\n}\n.chat-header-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #e4e7ee;\n  flex: 0 0 auto;\n}\n.chat-header-meta {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.chat-header-title {\n  font-size: 15px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chat-header-subtitle {\n  font-size: 9px;\n  letter-spacing: 0.16em;\n  color: #9ca3af;\n}\n.chat-header-button {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: #f4f4f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #6b7280;\n  flex: 0 0 auto;\n}\n.chat-header-button--back,\n.chat-header-button--search,\n.chat-header-button--more {\n  background: transparent;\n  font-size: 16px;\n}\n.chat-scroll-area {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: #fff;\n}\n.chat-message {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n}\n.chat-message--sent {\n  flex-direction: row-reverse;\n}\n.chat-message-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #e4e7ee;\n  flex: 0 0 auto;\n}\n.chat-message-body {\n  max-width: 74%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.chat-message--sent .chat-message-body {\n  align-items: flex-end;\n}\n.chat-message-sender-name {\n  font-size: 10px;\n  color: #9ca3af;\n  margin-bottom: 2px;\n}\n.chat-message-time {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: center;\n}\n.chat-message-time--below {\n  text-align: right;\n}\n.chat-system-text {\n  align-self: center;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.bubble-received {\n  background: #f1f1f1;\n  color: #111;\n  border-radius: 18px 18px 18px 4px;\n  padding: 8px 12px;\n  line-height: 1.6;\n}\n.bubble-sent {\n  background: #000;\n  color: #fff;\n  border-radius: 18px 18px 4px;\n  padding: 8px 12px;\n  line-height: 1.6;\n}\n.bubble-tail-ios {\n  position: relative;\n  overflow: visible;\n}\n.bubble-tail-ios.bubble-received::before {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: -6px;\n  width: 16px;\n  height: 14px;\n  border-bottom-right-radius: 14px;\n  border-right: 10px solid #f1f1f1;\n}\n.bubble-tail-ios.bubble-sent::before {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  right: -6px;\n  width: 16px;\n  height: 14px;\n  border-bottom-left-radius: 14px;\n  border-left: 10px solid #000;\n}\n.quote-line {\n  border-left: 2px solid rgba(0, 0, 0, 0.18);\n  padding-left: 8px;\n  margin-bottom: 4px;\n  font-size: 12px;\n  opacity: 0.72;\n  max-width: 74%;\n}\n.typing-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #9ca3af;\n}\n\n/* 通用卡片 */\n.chat-card {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 0 0 1px #efefef;\n  overflow: hidden;\n}\n.chat-card__caption {\n  padding: 6px 10px;\n  font-size: 10px;\n  color: #9ca3af;\n}\n.chat-card--transfer {\n  min-width: 190px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.transfer-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.transfer-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n.transfer-label {\n  font-size: 13px;\n  font-weight: 600;\n  flex: 1 1 auto;\n}\n.transfer-status {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.transfer-amount {\n  font-size: 22px;\n  font-weight: 600;\n}\n.transfer-note {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.chat-card--voice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  min-width: 120px;\n}\n.chat-voice-wave {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  height: 16px;\n}\n.chat-voice-wave i {\n  display: block;\n  width: 2px;\n  border-radius: 2px;\n  background: #111;\n  height: 6px;\n}\n.chat-voice-wave i:nth-child(2) { height: 12px; }\n.chat-voice-wave i:nth-child(3) { height: 9px; }\n.chat-voice-wave i:nth-child(4) { height: 14px; }\n.chat-voice-wave i:nth-child(5) { height: 8px; }\n.chat-voice-wave i:nth-child(6) { height: 11px; }\n.chat-voice-duration {\n  font-size: 11px;\n  color: #6b7280;\n}\n.chat-card--video-call-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  min-width: 200px;\n  background: #000;\n  color: #fff;\n}\n.call-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #2a2a2a;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n.call-title {\n  font-size: 14px;\n  font-weight: 600;\n}\n.call-sub {\n  font-size: 11px;\n  opacity: 0.7;\n}\n.chat-card--image {\n  min-width: 180px;\n}\n.image-card__image {\n  height: 120px;\n  background: linear-gradient(135deg, #e7e9ee, #d7dae2);\n}\n.chat-card--sticker {\n  background: transparent;\n  box-shadow: none;\n  padding: 4px;\n}\n.sticker-dot {\n  font-size: 34px;\n  line-height: 1;\n}\n.chat-card--location {\n  padding: 10px 12px;\n  min-width: 180px;\n}\n.location-title {\n  font-size: 13px;\n  font-weight: 600;\n}\n.location-map {\n  margin-top: 8px;\n  height: 70px;\n  border-radius: 8px;\n  background: repeating-linear-gradient(45deg, #f1f2f5 0 6px, #e9ebef 6px 12px);\n}\n.chat-card--drip-invite {\n  padding: 12px;\n  min-width: 200px;\n}\n.invite-title {\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.invite-actions {\n  display: flex;\n  gap: 8px;\n}\n.offline-invite__button {\n  flex: 1 1 auto;\n  height: 30px;\n  border-radius: 8px;\n  background: #f4f4f5;\n  color: #4b5563;\n  font-size: 12px;\n}\n.offline-invite__button--accept {\n  background: #000;\n  color: #fff;\n}\n.chat-card--forward-bundle {\n  padding: 12px;\n  min-width: 220px;\n}\n.forward-title {\n  font-size: 12px;\n  font-weight: 600;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #f1f1f1;\n  margin-bottom: 8px;\n}\n.forward-line {\n  font-size: 12px;\n  color: #4b5563;\n  line-height: 1.9;\n}\n.chat-card--payment-notice {\n  padding: 10px 12px;\n  min-width: 180px;\n}\n.notice-kicker {\n  font-size: 9px;\n  letter-spacing: 0.16em;\n  color: #9ca3af;\n}\n.notice-text {\n  margin-top: 4px;\n  font-size: 13px;\n}\n.receipt-shell {\n  padding: 14px;\n  border-radius: 10px;\n  box-shadow: 0 0 0 1px #efefef;\n  min-width: 210px;\n  background: #fff;\n}\n.receipt-kicker {\n  font-size: 9px;\n  letter-spacing: 0.2em;\n  color: #9ca3af;\n}\n.receipt-title {\n  margin-top: 6px;\n  font-size: 15px;\n  font-weight: 600;\n}\n.receipt-dash {\n  margin: 10px 0;\n  border-top: 1px dashed #d9dbe0;\n}\n.receipt-total {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n}\n.ticket-barcode {\n  margin-top: 12px;\n  height: 22px;\n  background: repeating-linear-gradient(90deg, #111 0 2px, transparent 2px 4px, #111 4px 5px, transparent 5px 9px);\n  opacity: 0.75;\n}\n.checkout-card {\n  padding: 12px;\n  border-radius: 10px;\n  box-shadow: 0 0 0 1px #efefef;\n  min-width: 210px;\n}\n.checkout-title {\n  font-size: 13px;\n  font-weight: 600;\n}\n.checkout-money {\n  margin-top: 6px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.checkout-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n}\n.checkout-button {\n  flex: 1 1 0;\n  height: 30px;\n  border-radius: 8px;\n  background: #f4f4f5;\n  color: #4b5563;\n  font-size: 12px;\n}\n.checkout-button--pay {\n  background: #000;\n  color: #fff;\n}\n.peer-pay-notice {\n  margin-top: 8px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #f7f8fa;\n  font-size: 12px;\n  color: #4b5563;\n}\n.translation-panel {\n  padding: 10px 12px;\n  border-radius: 10px;\n  box-shadow: 0 0 0 1px #efefef;\n  min-width: 200px;\n}\n.translation-src {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.translation-dst {\n  margin-top: 4px;\n  font-size: 13px;\n}\n.chat-input-bar {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px 10px;\n  border-top: 1px solid #efefef;\n  background: #fff;\n}\n.chat-input-plus,\n.chat-input-heart {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #f4f4f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  color: #6b7280;\n  flex: 0 0 auto;\n}\n.chat-input-textarea {\n  flex: 1 1 auto;\n  min-height: 34px;\n  border-radius: 17px;\n  background: #f4f4f5;\n  padding: 8px 14px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.chat-input-send {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #111;\n  flex: 0 0 auto;\n}\n\n/* ================= 卡片墙 ================= */\n.cardwall {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  background: #fff;\n  min-height: 100vh;\n}\n.cardwall__item {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cardwall__stage {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: flex-start;\n}\n.cardwall__stage > .chat-message {\n  align-self: stretch;\n}\n.cardwall__cap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  color: #9ca3af;\n}\n.cardwall__line {\n  flex: 1 1 auto;\n  height: 1px;\n  background: #ecedef;\n}\n.cardwall__cap-text {\n  flex: 0 0 auto;\n  font-family: ui-monospace, Menlo, monospace;\n}\n\n/* ================= 界面档 ================= */\n.iface {\n  background: #fff;\n  min-height: 100vh;\n}\n.iface__page {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  border-bottom: 12px solid #f7f8fa;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 10px;\n}\n.page-header__back {\n  font-size: 20px;\n  color: #111;\n  width: 24px;\n}\n.page-header__title {\n  flex: 1 1 auto;\n  text-align: center;\n  font-size: 15px;\n  letter-spacing: 0.22em;\n  font-weight: 500;\n}\n.page-header__title--serif {\n  font-family: Georgia, "Songti SC", serif;\n  font-size: 20px;\n  letter-spacing: 0.36em;\n}\n.page-header__action {\n  width: 24px;\n  text-align: right;\n  color: #111;\n  font-size: 15px;\n}\n.inbox-search {\n  margin: 6px 16px 4px;\n  height: 38px;\n  border-radius: 19px;\n  background: #f4f4f5;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n}\n.inbox-search__text {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.inbox-list {\n  flex: 1 1 auto;\n}\n.conversation-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.conversation-item--active .conversation-name {\n  font-weight: 600;\n}\n.conversation-avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: #e4e7ee;\n  flex: 0 0 auto;\n}\n.conversation-info {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.conversation-line {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.conversation-pin {\n  font-size: 9px;\n  color: #9ca3af;\n}\n.conversation-name {\n  flex: 1 1 auto;\n  font-size: 15px;\n  color: #111;\n}\n.conversation-time {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.conversation-snippet {\n  margin-top: 4px;\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bottom-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 10px 0 16px;\n  border-top: 1px solid #efefef;\n  background: #fff;\n  margin-top: auto;\n}\n.tab-item {\n  font-size: 17px;\n  color: #b6bac1;\n}\n.tab-item--on {\n  color: #111;\n}\n.tab-item--plus {\n  width: 39px;\n  height: 39px;\n  border-radius: 50%;\n  background: #f4f4f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #111;\n}\n.feed {\n  flex: 1 1 auto;\n  padding: 4px 0 0;\n}\n.post-item {\n  display: flex;\n  gap: 10px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f4f4f5;\n}\n.post-avatar-small {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #e4e7ee;\n  flex: 0 0 auto;\n}\n.post-main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.post-line {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.post-author-name {\n  font-size: 14px;\n  font-weight: 600;\n}\n.post-timestamp {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.post-more {\n  margin-left: auto;\n  color: #b6bac1;\n  font-size: 12px;\n}\n.post-body {\n  margin-top: 6px;\n  font-size: 14px;\n  line-height: 1.8;\n  color: #1b1c1f;\n}\n.post-actions {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  margin-top: 10px;\n}\n.post-action-unit {\n  font-size: 15px;\n  color: #111;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.post-action-unit i {\n  font-style: normal;\n  font-size: 12px;\n  color: #6b7280;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  padding: 18px 16px;\n}\n.square-app-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.app-icon-bg {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: #eef0f4;\n}\n.app-label {\n  font-size: 10px;\n  color: #888;\n}\n.iface__page--desktop {\n  min-height: 0;\n  border-bottom: 0;\n}\n\n/* ================= 线下档 ================= */\n.offline-mode {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n  background: #fff;\n}\n.offline-mode__scroll {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 0 14px 20px;\n}\n.offline-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 2px 12px;\n}\n.offline-header__back {\n  font-size: 18px;\n  color: #9ca3af;\n  width: 22px;\n}\n.offline-header__main {\n  flex: 1 1 auto;\n  text-align: center;\n}\n.offline-header__title {\n  font-family: Georgia, "Songti SC", serif;\n  font-style: italic;\n  font-size: 17px;\n}\n.offline-header__sub {\n  margin-top: 2px;\n  font-size: 9px;\n  letter-spacing: 0.12em;\n  color: #b6bac1;\n}\n.offline-header__action {\n  width: 22px;\n  text-align: center;\n  color: #6b7280;\n  font-size: 14px;\n}\n.offline-card {\n  border-radius: 24px;\n  box-shadow: 0 0 0 1px #f1f2f4;\n  background: #fff;\n  margin-bottom: 16px;\n  overflow: hidden;\n}\n.offline-card__header {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  border-bottom: 1px solid #f4f4f5;\n}\n.offline-card__avatar-shell {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: #e4e7ee;\n  flex: 0 0 auto;\n}\n.offline-card__avatar-fallback {\n  width: 100%;\n  height: 100%;\n  background: #e4e7ee;\n}\n.offline-card__header-main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.offline-card__title-row {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.offline-card__sender {\n  font-size: 16px;\n  font-weight: 600;\n}\n.offline-card__floor {\n  margin-left: auto;\n  font-size: 9px;\n  letter-spacing: 0.14em;\n  color: #d4d4d8;\n}\n.offline-card__meta-row {\n  margin-top: 4px;\n}\n.offline-card__time {\n  font-size: 11px;\n  letter-spacing: 0.08em;\n  color: #a1a1aa;\n}\n.offline-card__body {\n  padding: 18px 16px;\n}\n.offline-card__content-text {\n  font-size: 15px;\n  line-height: 2;\n  color: #3f3f46;\n}\n.offline-card__inline-quote {\n  border-left: 3px solid #e4e4e7;\n  padding-left: 10px;\n  margin: 10px 0;\n  font-style: italic;\n  color: #71717a;\n  font-size: 14px;\n}\n.offline-card__play {\n  font-size: 10px;\n  color: #6b7280;\n  margin-right: 4px;\n}\n.offline-card__footer {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px 14px;\n  border-top: 1px solid #f4f4f5;\n}\n.offline-card__footer-line {\n  flex: 1 1 auto;\n  height: 1px;\n  background: #f1f2f4;\n}\n.offline-card__footer-label {\n  font-size: 9px;\n  letter-spacing: 0.2em;\n  color: #d4d4d8;\n}\n.offline-card__footer-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.offline-card__footer-status {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #a7f3d0;\n}\n.offline-card__footer-metric {\n  font-size: 9px;\n  letter-spacing: 0.1em;\n  color: #d4d4d8;\n}\n.offline-menu {\n  border-top: 1px solid #f4f4f5;\n  padding-top: 6px;\n}\n.offline-menu__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 2px;\n  border-bottom: 1px solid #f7f8fa;\n  font-size: 14px;\n  color: #3f3f46;\n}\n.offline-menu__chev {\n  color: #d4d4d8;\n}\n.noir-toggle {\n  width: 38px;\n  height: 22px;\n  border-radius: 999px;\n  background: #e4e4e7;\n  display: inline-flex;\n  align-items: center;\n  padding: 2px;\n}\n.noir-toggle-bg {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #fff;\n}\n.offline-input-bar {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px 14px;\n  border-top: 1px solid #f1f2f4;\n  background: #fff;\n}\n.offline-input-sync {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n  font-size: 16px;\n}\n.offline-input-field {\n  flex: 1 1 auto;\n  height: 38px;\n  border-radius: 19px;\n  border: 1px solid #e4e4e7;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  font-size: 13px;\n  color: #a1a1aa;\n}\n.offline-input-send {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #111;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n';

  // src/ui/preview/scenes/chat.js
  var CHAT_HTML = `
<div class="chat-viewport-root">
  <header class="chat-header">
    <div class="chat-header-button chat-header-button--back">‹</div>
    <div class="chat-header-avatar"></div>
    <div class="chat-header-meta">
      <div class="chat-header-title">美化测试员</div>
      <div class="chat-header-subtitle">ONLINE</div>
    </div>
    <div class="chat-header-button chat-header-button--search">⌕</div>
    <div class="chat-header-button chat-header-button--more">···</div>
  </header>

  <main class="chat-scroll-area">
    <div class="chat-message-time">16:56</div>

    <div class="chat-message chat-message--received">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="bubble-received bubble-tail-ios">今天表现不错吧</div>
      </div>
    </div>

    <div class="chat-message chat-message--received">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="chat-card chat-card--voice">
          <span class="chat-voice-wave"><i></i><i></i><i></i><i></i><i></i><i></i></span>
          <span class="chat-voice-duration">2″</span>
        </div>
        <div class="chat-message-time chat-message-time--below">16:56</div>
      </div>
    </div>

    <div class="chat-message-time">17:32</div>

    <div class="chat-message chat-message--sent">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="chat-card chat-card--video-call-notice">
          <div class="call-icon">✆</div>
          <div class="call-text">
            <div class="call-title">Canceled Call</div>
            <div class="call-sub">Canceled</div>
          </div>
        </div>
        <div class="chat-message-time chat-message-time--below">17:32</div>
      </div>
    </div>

    <div class="chat-message-time">17:43</div>

    <div class="chat-message chat-message--sent">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="chat-card chat-card--transfer">
          <div class="transfer-head">
            <span class="transfer-icon">¥</span>
            <span class="transfer-label">转账</span>
            <span class="transfer-status">待收款</span>
          </div>
          <div class="transfer-amount">¥ 1.00</div>
          <div class="transfer-note">转给 美化测试</div>
        </div>
        <div class="chat-message-time chat-message-time--below">17:43</div>
      </div>
    </div>

    <div class="chat-message chat-message--sent">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="quote-line">美化测试员</div>
        <div class="bubble-sent bubble-tail-ios">节奏感一下就上来了</div>
        <div class="chat-message-time chat-message-time--below">17:48</div>
      </div>
    </div>

    <div class="chat-message chat-message--received">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="chat-card chat-card--image">
          <div class="image-card__image"></div>
          <div class="chat-card__caption">图片 · 16:20</div>
        </div>
      </div>
    </div>

    <div class="chat-message chat-message--received">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="chat-card chat-card--sticker"><span class="sticker-dot">✳</span></div>
      </div>
    </div>

    <div class="chat-message chat-message--received">
      <div class="chat-message-avatar"></div>
      <div class="chat-card chat-card--drip-invite">
        <div class="invite-title">一起听 · 邀请</div>
        <div class="invite-actions">
          <button class="offline-invite__button offline-invite__button--accept">接受</button>
          <button class="offline-invite__button">拒绝</button>
        </div>
      </div>
    </div>

    <div class="chat-system-text">对方撤回了一条消息</div>
    <div class="chat-message-time"><span class="typing-dot"></span> 对方正在输入</div>
  </main>

  <div class="chat-input-bar">
    <div class="chat-input-plus">+</div>
    <div class="chat-input-textarea">Message...</div>
    <div class="chat-input-heart">♡</div>
    <div class="chat-input-send">➤</div>
  </div>
</div>`;

  // src/ui/preview/scenes/cards.js
  function card(nodeId, label, body) {
    return '<section class="cardwall__item"><div class="cardwall__stage">' + body + '</div><div class="cardwall__cap" data-node="' + nodeId + '"><span class="cardwall__line"></span><span class="cardwall__cap-text">' + nodeId + " · " + label + '</span><span class="cardwall__line"></span></div></section>';
  }
  var CARDS_HTML = `
<div class="cardwall">
  ${card("online.card-transfer", "转账 / 收款", `
    <div class="chat-card chat-card--transfer">
      <div class="transfer-head"><span class="transfer-icon">¥</span><span class="transfer-label">转账</span><span class="transfer-status">待收款</span></div>
      <div class="transfer-amount">¥ 1.00</div>
      <div class="transfer-note">转给 美化测试</div>
    </div>`)}

  ${card("online.card-media", "图片 / 位置", `
    <div class="chat-card chat-card--image">
      <div class="image-card__image"></div>
      <div class="chat-card__caption">图片 · 16:20</div>
    </div>
    <div class="chat-card chat-card--location">
      <div class="location-title">江边 · 旧书店</div>
      <div class="location-map"></div>
    </div>`)}

  ${card("online.card-voice", "语音", `
    <div class="chat-card chat-card--voice">
      <span class="chat-voice-wave"><i></i><i></i><i></i><i></i><i></i><i></i></span>
      <span class="chat-voice-duration">2″</span>
    </div>`)}

  ${card("online.card-sticker", "表情包 / 贴纸", `
    <div class="chat-card chat-card--sticker"><span class="sticker-dot">✳</span></div>`)}

  ${card("online.card-forward", "聊天记录", `
    <div class="chat-card chat-card--forward-bundle">
      <div class="forward-title">聊天记录 · 共 3 条</div>
      <div class="forward-line">01 今晚的雨停了</div>
      <div class="forward-line">02 我给你留一盏灯</div>
      <div class="forward-line">03 留着吧，我记得回来</div>
    </div>`)}

  ${card("online.card-invite", "邀请", `
    <div class="chat-card chat-card--drip-invite">
      <div class="invite-title">一起听 · 邀请</div>
      <div class="invite-actions">
        <button class="offline-invite__button offline-invite__button--accept">接受</button>
        <button class="offline-invite__button">拒绝</button>
      </div>
    </div>`)}

  ${card("online.card-notice", "通知", `
    <div class="chat-card chat-card--video-call-notice">
      <div class="call-icon">✆</div>
      <div class="call-text"><div class="call-title">Canceled Call</div><div class="call-sub">Canceled</div></div>
    </div>
    <div class="chat-card chat-card--payment-notice">
      <div class="notice-kicker">NOTICE</div>
      <div class="notice-text">对方已确认收款</div>
    </div>`)}

  ${card("online.receipt", "小票 / 票券", `
    <div class="receipt-shell">
      <div class="receipt-kicker">RECEIPT</div>
      <div class="receipt-title">转账凭证</div>
      <div class="receipt-dash"></div>
      <div class="receipt-total"><span>合计</span><span>¥ 1.00</span></div>
      <div class="ticket-barcode"></div>
    </div>`)}

  ${card("online.card-money", "赠送 / 代付 / 亲属卡", `
    <div class="checkout-card">
      <div class="checkout-title">赠送一杯咖啡</div>
      <div class="checkout-money">¥ 28.00</div>
      <div class="checkout-actions">
        <button class="checkout-button checkout-button--pay">送出</button>
        <button class="checkout-button">取消</button>
      </div>
    </div>
    <div class="peer-pay-notice">对方已代付 ¥ 20.00</div>`)}

  ${card("online.msgrow", "消息行 / 头像（只读）", `
    <div class="chat-message chat-message--received">
      <div class="chat-message-avatar"></div>
      <div class="chat-message-body">
        <div class="chat-message-sender-name">美化测试员</div>
        <div class="bubble-received bubble-tail-ios">这一条用来检查头像与消息行的间距</div>
      </div>
    </div>`)}

  ${card("online.translation", "翻译", `
    <div class="translation-panel">
      <div class="translation-block">
        <div class="translation-src">今晚的雨停了。</div>
        <div class="translation-dst">The rain stopped tonight.</div>
      </div>
    </div>`)}

  ${card("online.quote", "引用 / 回复", `
    <div class="chat-message chat-message--sent">
      <div class="chat-message-body">
        <div class="quote-line">那我给你留一盏灯。</div>
        <div class="bubble-sent bubble-tail-ios">留着吧</div>
      </div>
    </div>`)}

  ${card("online.time", "时间 / 发送者 / 灰字", `
    <div class="chat-message-time">17:43</div>
    <div class="chat-message-sender-name">美化测试员</div>
    <div class="chat-system-text">对方撤回了一条消息</div>`)}
</div>`;

  // src/ui/preview/scenes/interface.js
  var INTERFACE_HTML = `
<div class="iface">

  <section class="iface__page">
    <header class="page-header">
      <div class="page-header__back">‹</div>
      <div class="page-header__title">MESSAGES</div>
      <div class="page-header__action">✎</div>
    </header>

    <div class="inbox-search">
      <span class="inbox-search__text">Search</span>
    </div>

    <div class="inbox-list">
      <div class="conversation-item conversation-item--pinned">
        <div class="conversation-avatar"></div>
        <div class="conversation-info">
          <div class="conversation-line">
            <span class="conversation-pin">置顶</span>
            <span class="conversation-name">温砚雪</span>
            <span class="conversation-time">周五</span>
          </div>
          <div class="conversation-snippet">嘴倒是硬得很。</div>
        </div>
      </div>

      <div class="conversation-item conversation-item--active">
        <div class="conversation-avatar"></div>
        <div class="conversation-info">
          <div class="conversation-line">
            <span class="conversation-name">美化测试员</span>
            <span class="conversation-time">17:48</span>
          </div>
          <div class="conversation-snippet">1</div>
        </div>
      </div>

      <div class="conversation-item">
        <div class="conversation-avatar"></div>
        <div class="conversation-info">
          <div class="conversation-line">
            <span class="conversation-name">叶瑄</span>
            <span class="conversation-time">周三</span>
          </div>
          <div class="conversation-snippet">…听着这个，腰还难受么？</div>
        </div>
      </div>

      <div class="conversation-item">
        <div class="conversation-avatar"></div>
        <div class="conversation-info">
          <div class="conversation-line">
            <span class="conversation-name">砚雪</span>
            <span class="conversation-time">周二</span>
          </div>
          <div class="conversation-snippet">再传讯同我说。</div>
        </div>
      </div>
    </div>

    <nav class="bottom-nav">
      <span class="tab-item">⌂</span>
      <span class="tab-item tab-item--on">✉</span>
      <span class="tab-item tab-item--plus">+</span>
      <span class="tab-item">♡</span>
      <span class="tab-item">☺</span>
    </nav>
  </section>

  <section class="iface__page">
    <header class="page-header">
      <div class="page-header__back">‹</div>
      <div class="page-header__title page-header__title--serif">NOIR</div>
      <div class="page-header__action">···</div>
    </header>

    <div class="feed">
      <article class="post-item">
        <div class="post-avatar-small"></div>
        <div class="post-main">
          <div class="post-line">
            <span class="post-author-name">温砚雪</span>
            <span class="post-timestamp">10-11 23:56</span>
            <span class="post-more">···</span>
          </div>
          <div class="post-body">子夜风露重，某人白日里睡足了，这会儿倒精神得很。</div>
          <div class="post-actions">
            <span class="post-action-unit">♡ <i>48</i></span>
            <span class="post-action-unit">◌ <i>15</i></span>
            <span class="post-action-unit">⇄ <i>3</i></span>
            <span class="post-action-unit">➤</span>
          </div>
        </div>
      </article>

      <article class="post-item">
        <div class="post-avatar-small"></div>
        <div class="post-main">
          <div class="post-line">
            <span class="post-author-name">温砚雪</span>
            <span class="post-timestamp">10-06 13:46</span>
          </div>
          <div class="post-body">炉火未熄，阶前晴雪初融。有人午正方醒，今日的课业便纵你躲过半日。</div>
          <div class="post-actions">
            <span class="post-action-unit">♡ <i>17</i></span>
            <span class="post-action-unit">◌ <i>13</i></span>
            <span class="post-action-unit">⇄ <i>3</i></span>
          </div>
        </div>
      </article>

      <article class="post-item">
        <div class="post-avatar-small"></div>
        <div class="post-main">
          <div class="post-line">
            <span class="post-author-name">叶瑄</span>
            <span class="post-timestamp">10-03 22:04</span>
          </div>
          <div class="post-body">露台的灯熄了，窗外的潮声很平缓。……晚安。</div>
          <div class="post-actions">
            <span class="post-action-unit">♡ <i>9</i></span>
            <span class="post-action-unit">◌ <i>2</i></span>
          </div>
        </div>
      </article>
    </div>

    <nav class="bottom-nav">
      <span class="tab-item tab-item--on">⌂</span>
      <span class="tab-item">✉</span>
      <span class="tab-item tab-item--plus">+</span>
      <span class="tab-item">♡</span>
      <span class="tab-item">☺</span>
    </nav>
  </section>

  <section class="iface__page iface__page--desktop">
    <div class="grid">
      <div class="square-app-btn"><div class="app-icon-bg"></div><div class="app-label">相册</div></div>
      <div class="square-app-btn"><div class="app-icon-bg"></div><div class="app-label">备忘录</div></div>
      <div class="square-app-btn"><div class="app-icon-bg"></div><div class="app-label">世界书</div></div>
      <div class="square-app-btn"><div class="app-icon-bg"></div><div class="app-label">设置</div></div>
    </div>
  </section>

</div>`;

  // src/ui/preview/scenes/offline.js
  var OFFLINE_HTML = `
<div class="offline-mode">
  <div class="offline-mode__scroll">

    <header class="offline-header">
      <div class="offline-header__back">‹</div>
      <div class="offline-header__main">
        <div class="offline-header__title">Offline Mode</div>
        <div class="offline-header__sub">LAST ONLINE: 3H 51M AGO</div>
      </div>
      <div class="offline-header__action">⤓</div>
      <div class="offline-header__action">···</div>
    </header>

    <article class="offline-card">
      <div class="offline-card__header">
        <div class="offline-card__avatar-shell"><div class="offline-card__avatar-fallback"></div></div>
        <div class="offline-card__header-main">
          <div class="offline-card__title-row">
            <span class="offline-card__sender">云枝</span>
            <span class="offline-card__floor">NO.001</span>
          </div>
          <div class="offline-card__meta-row">
            <span class="offline-card__time">OCT 5 · 20:15</span>
          </div>
        </div>
      </div>
      <div class="offline-card__body">
        <div class="offline-card__content">
          <div class="offline-card__content-text">随机生成一段校园剧情（男女主初遇），不少于 4000 字</div>
        </div>
      </div>
      <div class="offline-card__footer">
        <div class="offline-card__footer-line"></div>
        <div class="offline-card__footer-label">ARCHIVE</div>
        <div class="offline-card__footer-right">
          <span class="offline-card__footer-metric">87T / 2.32S</span>
        </div>
      </div>
    </article>

    <article class="offline-card">
      <div class="offline-card__header">
        <div class="offline-card__avatar-shell"><div class="offline-card__avatar-fallback"></div></div>
        <div class="offline-card__header-main">
          <div class="offline-card__title-row">
            <span class="offline-card__sender">美化测试员</span>
            <span class="offline-card__floor">NO.002</span>
          </div>
          <div class="offline-card__meta-row">
            <span class="offline-card__time">OCT 26 · 19:42</span>
          </div>
        </div>
      </div>
      <div class="offline-card__body">
        <div class="offline-card__content">
          <div class="offline-card__content-text">
            <span class="offline-card__play">▶</span> ako
          </div>
          <div class="offline-card__inline-quote">「留着吧，我记得回来看。」</div>
          <div class="offline-card__content-text">
            深秋的午后，图书馆最深处的那张长桌被斜射的阳光切成两半，明亮的一侧积满了浮尘，
            暗处则静得只能听见书页翻动的轻响。
          </div>
        </div>
      </div>
      <div class="offline-card__footer">
        <div class="offline-card__footer-line"></div>
        <div class="offline-card__footer-label">ARCHIVE</div>
        <div class="offline-card__footer-right">
          <span class="offline-card__footer-status"></span>
          <span class="offline-card__footer-metric">112T / 3.08S</span>
        </div>
      </div>
    </article>

    <div class="offline-menu">
      <div class="offline-menu__row"><span>历史记录</span><span class="offline-menu__chev">›</span></div>
      <div class="offline-menu__row"><span>画廊</span><span class="offline-menu__chev">›</span></div>
      <div class="offline-menu__row">
        <span>夜间模式</span>
        <span class="noir-toggle"><span class="noir-toggle-bg"></span></span>
      </div>
    </div>

  </div>

  <div class="offline-input-bar">
    <div class="offline-input-sync">⟳</div>
    <div class="offline-input-field">Type your thought...</div>
    <div class="offline-input-send">➜</div>
  </div>
</div>`;

  // src/ui/preview/scenes/index.js
  var TABS = [
    { id: "chat", label: "聊天", scope: "online" },
    { id: "cards", label: "卡片墙", scope: "online" },
    { id: "interface", label: "界面", scope: "global" },
    { id: "offline", label: "线下", scope: "offline" }
  ];
  function tabOf(id) {
    return TABS.find(function(t) {
      return t.id === id;
    }) || TABS[0];
  }
  function htmlFor(tabId) {
    if (tabId === "cards") return CARDS_HTML;
    if (tabId === "interface") return INTERFACE_HTML;
    if (tabId === "offline") return OFFLINE_HTML;
    return CHAT_HTML;
  }
  var TAB_IDS = TABS.map(function(t) {
    return t.id;
  });

  // src/ui/preview/index.js
  function buildHtml(html, css) {
    return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>' + baseline_default + '</style><style id="skin-studio-preview">' + (css || "") + "</style></head><body>" + html + "</body></html>";
  }
  function renderPreview(ctx, actions, initialScope, initialTab, extraCss, extraLabel) {
    let tabId = initialTab || "chat";
    const tabs = el("div", { class: "ss-pv__tabs" });
    const stage = el("div", { class: "ss-pv__stage" });
    const note = el("div", {
      class: "ss-pv__note",
      style: { display: extraCss ? "block" : "none" },
      text: extraCss ? "正在预览：" + (extraLabel || "单条回复") + "（未写入分支）" : ""
    });
    const foot = el("div", { class: "ss-pv__foot" });
    function scopeNow() {
      return tabOf(tabId).scope;
    }
    function renderTabs() {
      tabs.replaceChildren();
      TABS.forEach(function(tab) {
        const btn = el("button", {
          class: "ss-tab" + (tabId === tab.id ? " ss-tab--on" : ""),
          text: tab.label
        });
        btn.addEventListener("click", function() {
          if (tabId === tab.id) return;
          tabId = tab.id;
          renderTabs();
          renderFrame();
          renderFoot();
        });
        tabs.appendChild(btn);
      });
    }
    function renderFrame() {
      const scope = scopeNow();
      const injectExtra = extraCss && scope === (initialScope || "online");
      const css = ctx.preview(scope, injectExtra ? extraCss : "");
      const frame = el("iframe", {
        class: "ss-pv__frame",
        srcdoc: buildHtml(htmlFor(tabId), css),
        sandbox: "allow-same-origin"
      });
      frame.addEventListener("load", function() {
        try {
          const doc = frame.contentDocument;
          if (!doc) return;
          doc.addEventListener("click", function(ev) {
            const target = ev.target && ev.target.closest ? ev.target.closest("[data-node]") : null;
            if (target && target.getAttribute("data-node")) {
              actions.openNode(target.getAttribute("data-node"));
            }
          });
        } catch (err) {
          console.warn("[skin-studio] 预览代理失败", err);
        }
      });
      stage.replaceChildren(el("div", { class: "ss-device" }, [frame]));
    }
    function renderFoot() {
      const scope = scopeNow();
      const count = collectScope(scope, ctx.state.branches).length;
      foot.replaceChildren(
        el("div", {
          style: {
            flex: "1 1 auto",
            fontSize: "11px",
            color: "var(--ss-muted)",
            display: "flex",
            alignItems: "center"
          },
          text: SCOPE_LABEL[scope] + " · " + count + " 个分支已注入"
        }),
        el("button", {
          class: "ss-btn ss-btn--ghost",
          text: ctx.liveApplied() ? "撤销应用" : "应用到宿主",
          onclick: function() {
            if (ctx.liveApplied()) {
              ctx.clearLive();
              ctx.toast("已移除临时样式");
              renderFoot();
              return;
            }
            ctx.confirm({
              title: "临时应用到宿主？",
              message: "会改动 Roche 真实页面外观（仅 " + SCOPE_LABEL[scope] + "），本机本次运行有效。"
            }).then(function(ok) {
              if (!ok) return;
              ctx.applyLive(scope);
              ctx.toast("已临时应用 " + SCOPE_LABEL[scope] + " 样式");
              renderFoot();
            });
          }
        }),
        el("button", {
          class: "ss-btn ss-btn--primary",
          text: "导出这份",
          onclick: function() {
            actions.openExportResult(scope);
          }
        })
      );
    }
    const bar = el("div", { class: "ss-screen__bar" }, [
      el("button", { class: "ss-icon-btn", onclick: actions.closePreview }, [svgIcon("back", 18)]),
      el("div", { class: "ss-crumb__main", style: { flex: "1 1 auto", textAlign: "center" }, text: "预览" }),
      el("button", { class: "ss-icon-btn", onclick: actions.closePreview }, [svgIcon("close", 18)])
    ]);
    renderTabs();
    renderFrame();
    renderFoot();
    return el("div", { class: "ss-pv" }, [bar, tabs, note, stage, foot]);
  }

  // src/app/shell.js
  function mountShell(container, ctx) {
    const root = el("div", { class: "ss-root" });
    const actions = {};
    const app2 = el("div", { class: "ss-app" });
    const main = el("div", { class: "ss-main" });
    const crumbMain = el("div", { class: "ss-crumb__main" });
    const crumbSub = el("div", { class: "ss-crumb__sub" });
    const top = el("div", { class: "ss-top" }, [
      el("button", {
        class: "ss-icon-btn ss-hamburger",
        title: "对话列表",
        onclick: function() {
          openSide();
        }
      }, [svgIcon("menu", 18)]),
      el("div", { class: "ss-crumb" }, [crumbMain, crumbSub]),
      el("button", { class: "ss-icon-btn", title: "注入的提示词", onclick: function() {
        openPrompt();
      } }, [svgIcon("layers", 18)]),
      el("button", { class: "ss-icon-btn", title: "导出 CSS", onclick: function() {
        openExport();
      } }, [svgIcon("down", 18)]),
      el("button", {
        class: "ss-icon-btn",
        title: "关闭插件",
        onclick: function() {
          try {
            ctx.roche.ui.closeApp();
          } catch (err) {
            toast("关闭失败：" + (err.message || "未知错误"));
          }
        }
      }, [svgIcon("close", 18)])
    ]);
    const body = el("div", { class: "ss-body" });
    const composer = createComposer(ctx, actions);
    main.appendChild(top);
    main.appendChild(body);
    main.appendChild(composer.node);
    app2.appendChild(main);
    const mask = el("div", { class: "ss-mask" });
    const drawer = el("div", { class: "ss-drawer-right" });
    const sheet = el("div", { class: "ss-sheet" });
    const screen = el("div", { class: "ss-screen" });
    const toastEl = el("div", { class: "ss-toast" });
    root.appendChild(app2);
    root.appendChild(mask);
    root.appendChild(drawer);
    root.appendChild(sheet);
    root.appendChild(screen);
    root.appendChild(toastEl);
    container.appendChild(root);
    let sidebar = null;
    let sideOpen = false;
    let drawerOpen = false;
    let sheetOpen = "";
    let screenName = "";
    let screenData = {};
    let toastTimer = null;
    function toast(message) {
      toastEl.textContent = message;
      toastEl.classList.add("ss-toast--in");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function() {
        toastEl.classList.remove("ss-toast--in");
        toastTimer = null;
      }, 2400);
    }
    function updateMask() {
      const need = sideOpen || drawerOpen || !!sheetOpen;
      mask.classList.toggle("ss-mask--in", need);
    }
    function lightbox(url) {
      const layer = el("div", { class: "ss-lightbox" }, [el("img", { src: url, alt: "图片预览" })]);
      layer.addEventListener("click", function() {
        if (layer.parentNode) layer.parentNode.removeChild(layer);
      });
      root.appendChild(layer);
    }
    function askText(title, value) {
      return new Promise(function(resolve) {
        const input = el("input", {
          class: "ss-field__input",
          style: { marginTop: "10px" },
          value: value || ""
        });
        const layer = el("div", { class: "ss-dialog" }, [
          el("div", { class: "ss-dialog__box" }, [
            el("div", { class: "ss-dialog__title", text: title }),
            input,
            el("div", { class: "ss-dialog__foot" }, [
              el("button", {
                class: "ss-btn ss-btn--ghost",
                text: "取消",
                onclick: function() {
                  close();
                  resolve(null);
                }
              }),
              el("button", {
                class: "ss-btn ss-btn--primary",
                text: "确定",
                onclick: function() {
                  close();
                  resolve(input.value.trim());
                }
              })
            ])
          ])
        ]);
        layer.addEventListener("click", function(ev) {
          if (ev.target === layer) {
            close();
            resolve(null);
          }
        });
        function close() {
          layer.classList.remove("ss-dialog--in");
          setTimeout(function() {
            if (layer.parentNode) layer.parentNode.removeChild(layer);
          }, 180);
        }
        root.appendChild(layer);
        requestAnimationFrame(function() {
          layer.classList.add("ss-dialog--in");
        });
        setTimeout(function() {
          input.focus();
        }, 60);
      });
    }
    function openSide() {
      sideOpen = true;
      if (sidebar) sidebar.classList.add("ss-side--in");
      updateMask();
    }
    function closeSide() {
      sideOpen = false;
      if (sidebar) sidebar.classList.remove("ss-side--in");
      updateMask();
    }
    function renderSide() {
      const next = renderSidebar(ctx, actions);
      if (sideOpen) next.classList.add("ss-side--in");
      if (sidebar && sidebar.parentNode) app2.replaceChild(next, sidebar);
      else app2.insertBefore(next, app2.firstChild);
      sidebar = next;
    }
    function openPrompt() {
      drawerOpen = true;
      clear(drawer);
      drawer.appendChild(renderPromptSheet(ctx, actions));
      drawer.classList.add("ss-drawer-right--in");
      updateMask();
    }
    function closePrompt() {
      drawerOpen = false;
      drawer.classList.remove("ss-drawer-right--in");
      updateMask();
    }
    function openSheet(kind) {
      sheetOpen = kind;
      clear(sheet);
      if (kind === "export") sheet.appendChild(renderExportSheet(ctx, actions));
      else if (kind === "projects") sheet.appendChild(renderProjectsSheet());
      else sheet.appendChild(renderMenu());
      sheet.classList.add("ss-sheet--in");
      updateMask();
    }
    function closeSheet() {
      sheetOpen = "";
      sheet.classList.remove("ss-sheet--in");
      updateMask();
    }
    function openExport() {
      openSheet("export");
    }
    function openProjects() {
      openSheet("projects");
    }
    function renderProjectsSheet() {
      const box = el("div", { class: "ss-sheet__body" });
      box.appendChild(el("div", {
        class: "ss-panel-note",
        text: "每个方案是一套独立的美化：分支代码、对话、导出互不影响。"
      }));
      ctx.state.projects.forEach(function(p) {
        const active = p.id === ctx.state.activeProjectId;
        const row2 = el("div", { class: "ss-proj-item" + (active ? " ss-proj-item--on" : "") }, [
          el("button", { class: "ss-proj-item__main" }, [
            el("div", { class: "ss-proj-item__name", text: p.name }),
            el("div", {
              class: "ss-proj-item__meta",
              text: (p.written || 0) + " 个分支有内容 · " + new Date(p.updatedAt || Date.now()).toLocaleDateString("zh-CN")
            })
          ]),
          active ? el("span", { class: "ss-proj-item__tick", text: "✓" }) : null,
          el("button", {
            class: "ss-mini-btn",
            onclick: function() {
              askText("重命名方案", p.name).then(function(name) {
                if (name === null) return;
                ctx.renameProject(name, p.id);
                openProjects();
              });
            }
          }, [svgIcon("edit", 14)]),
          el("button", {
            class: "ss-mini-btn",
            onclick: function() {
              ctx.duplicateProject(p.id).then(function() {
                openProjects();
              });
            }
          }, [svgIcon("copy", 14)]),
          el("button", {
            class: "ss-mini-btn",
            onclick: function() {
              ctx.confirm({
                title: "删除「" + p.name + "」？",
                message: "该方案的所有分支代码与对话都会被删除，无法恢复。"
              }).then(function(ok) {
                if (!ok) return;
                ctx.deleteProject(p.id).then(function() {
                  openProjects();
                });
              });
            }
          }, [svgIcon("trash", 14)])
        ]);
        row2.querySelector(".ss-proj-item__main").addEventListener("click", function() {
          ctx.switchProject(p.id).then(function() {
            closeSheet();
            closeSide();
          });
        });
        box.appendChild(row2);
      });
      const foot = el("div", { class: "ss-sheet__foot" }, [
        el("button", {
          class: "ss-btn ss-btn--primary",
          style: { flex: "1 1 0" },
          text: "新建方案",
          onclick: function() {
            askText("新方案的名字", "美化 " + (ctx.state.projects.length + 1)).then(function(name) {
              if (name === null) return;
              ctx.createProject(name).then(function() {
                closeSheet();
                closeSide();
              });
            });
          }
        }),
        el("button", {
          class: "ss-btn ss-btn--ghost",
          text: "复制当前",
          onclick: function() {
            ctx.duplicateProject(ctx.state.activeProjectId).then(function() {
              openProjects();
            });
          }
        })
      ]);
      return el("div", { class: "ss-sheet-inner" }, [
        el("div", { class: "ss-sheet__head" }, [
          el("div", { class: "ss-sheet__title", text: "美化方案" }),
          el("button", { class: "ss-icon-btn", onclick: closeSheet }, [svgIcon("close", 18)])
        ]),
        box,
        foot
      ]);
    }
    function renderMenu() {
      const box = el("div", { class: "ss-sheet__body" });
      const items = [
        { label: "切换 / 新建美化方案", onClick: function() {
          openProjects();
        } },
        { label: "导出 CSS（线上 / 线下 / 全局）", onClick: function() {
          closeSheet();
          openExport();
        } },
        { label: "提示词预设", onClick: function() {
          closeSheet();
          openScreen("presets");
        } },
        { label: "素材库", onClick: function() {
          closeSheet();
          openScreen("assets");
        } },
        { label: "设置", onClick: function() {
          closeSheet();
          openScreen("settings");
        } },
        {
          label: ctx.liveApplied() ? "撤销临时应用" : "临时应用到宿主",
          onClick: function() {
            closeSheet();
            const scope = scopeOf(ctx.state.activeNodeId) || "online";
            if (ctx.liveApplied()) {
              ctx.clearLive();
              toast("已移除临时样式");
              return;
            }
            ctx.confirm({ title: "临时应用到宿主？", message: "会改动 Roche 真实页面外观（仅 " + SCOPE_LABEL[scope] + "），重启后失效。" }).then(function(ok) {
              if (ok) {
                ctx.applyLive(scope);
                toast("已临时应用");
              }
            });
          }
        }
      ];
      items.forEach(function(item) {
        const row2 = el("button", { class: "ss-menu-row", text: item.label });
        row2.addEventListener("click", item.onClick);
        box.appendChild(row2);
      });
      return el("div", { class: "ss-sheet-inner" }, [
        el("div", { class: "ss-sheet__head" }, [
          el("div", { class: "ss-sheet__title", text: "操作" }),
          el("button", { class: "ss-icon-btn", onclick: closeSheet }, [svgIcon("close", 18)])
        ]),
        box
      ]);
    }
    function openScreen(name, data) {
      screenName = name;
      screenData = data || {};
      clear(screen);
      if (name === "preview") {
        screen.appendChild(renderPreview(ctx, actions, screenData.scope || "online", screenData.tab || "", screenData.extraCss || "", screenData.label || ""));
      } else if (name === "exportResult") {
        screen.appendChild(renderExportResult(ctx, actions, screenData.scope || "online"));
      } else if (name === "presets") {
        screen.appendChild(renderPresetEditor(ctx, actions));
      } else {
        screen.appendChild(el("div", { class: "ss-screen__bar" }, [
          el("button", { class: "ss-icon-btn", onclick: closeScreen }, [svgIcon("back", 18)]),
          el("div", {
            class: "ss-crumb__main",
            style: { flex: "1 1 auto", textAlign: "center" },
            text: name === "assets" ? "素材库" : "设置"
          }),
          el("span", { style: { width: "36px" } })
        ]));
        screen.appendChild(name === "assets" ? renderAssets(ctx, actions) : renderSettings(ctx, actions));
      }
      requestAnimationFrame(function() {
        screen.classList.add("ss-screen--in");
      });
    }
    function closeScreen() {
      screenName = "";
      screen.classList.remove("ss-screen--in");
      setTimeout(function() {
        if (!screenName) clear(screen);
      }, 220);
    }
    function openPreview(extraCss, label, scope, tab) {
      openScreen("preview", {
        scope: scope || scopeOf(ctx.state.activeNodeId) || "online",
        tab: tab || "",
        extraCss: extraCss || "",
        label: label || ""
      });
    }
    function openExportResult(scope) {
      if (sheetOpen) closeSheet();
      openScreen("exportResult", { scope: scope || "online" });
    }
    function refreshScreen() {
      if (screenName && screenName !== "preview") openScreen(screenName, screenData);
    }
    function renderTop() {
      const nodeId = ctx.state.activeNodeId;
      const node = getNode(nodeId);
      crumbMain.textContent = node ? node.label : "";
      const path = breadcrumb(nodeId).split(" · ").filter(function(s, i, arr) {
        return arr.indexOf(s) === i;
      });
      path.pop();
      const projectName = ctx.state.project ? ctx.state.project.name : "";
      crumbSub.textContent = [projectName].concat(path).filter(Boolean).join(" / ");
    }
    function renderBody() {
      const atBottom = body.scrollHeight - body.scrollTop - body.clientHeight < 60;
      const prevTop = body.scrollTop;
      clear(body);
      body.appendChild(renderThread(ctx, actions));
      body.scrollTop = atBottom ? body.scrollHeight : prevTop;
    }
    function render() {
      renderSide();
      if (ctx.state.loading) {
        clear(body);
        body.appendChild(renderThread(ctx, actions));
        return;
      }
      renderTop();
      renderBody();
      composer.sync();
      if (drawerOpen) openPrompt();
      if (screenName && screenName !== "preview") refreshScreen();
    }
    mask.addEventListener("click", function() {
      if (sideOpen) closeSide();
      if (drawerOpen) closePrompt();
      if (sheetOpen) closeSheet();
    });
    const ta = composer.node.querySelector(".ss-textarea");
    if (ta) {
      ta.addEventListener("keydown", function(ev) {
        if (ev.key === "Enter" && !ev.shiftKey && !ev.isComposing) {
          ev.preventDefault();
          const send = composer.node.querySelector(".ss-send");
          if (send) send.click();
        }
      });
    }
    Object.assign(actions, {
      openSide,
      closeSide,
      openPrompt,
      closePrompt,
      openExport,
      closeExport: closeSheet,
      openProjects,
      openExportResult,
      openPresets: function() {
        openScreen("presets");
      },
      openPreview,
      closePreview: closeScreen,
      openAssets: function() {
        openScreen("assets");
      },
      openSettings: function() {
        openScreen("settings");
      },
      closeScreen,
      refreshScreen,
      openMenu: function() {
        openSheet("menu");
      },
      closeSheet,
      fillInput: function(text) {
        composer.setText(text);
      },
      lightbox,
      openNode: function(nodeId) {
        closeScreen();
        ctx.switchNode(nodeId);
      }
    });
    const off = ctx.onChange(function(scope) {
      if (scope && typeof scope === "object" && scope.toast) {
        toast(scope.toast);
        return;
      }
      render();
    });
    render();
    return {
      destroy: function() {
        off();
        if (root.parentNode) root.parentNode.removeChild(root);
      },
      toast
    };
  }

  // src/main.js
  var STYLE_ID = "skin-studio-style";
  var CSS = [theme_default, base_default, views_default].join("\n");
  var app = null;
  var shell = null;
  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }
  function removeStyle() {
    const style = document.getElementById(STYLE_ID);
    if (style && style.parentNode) style.parentNode.removeChild(style);
  }
  function removeOrphans() {
    const names = [".ss-dialog", ".ss-lightbox"];
    names.forEach(function(sel) {
      const nodes = document.querySelectorAll(sel);
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].parentNode) nodes[i].parentNode.removeChild(nodes[i]);
      }
    });
    const live = document.getElementById("skin-studio-live");
    if (live && live.parentNode) live.parentNode.removeChild(live);
  }
  async function mount(container, roche) {
    ensureStyle();
    container.classList.add("ss-host");
    app = await createApp({ container, roche, version: "0.3.0" });
    shell = mountShell(container, app);
    await app.boot();
  }
  async function unmount(container) {
    if (shell) {
      shell.destroy();
      shell = null;
    }
    if (app) {
      app.clearLive();
      await app.flushAll();
      app = null;
    }
    removeOrphans();
    container.replaceChildren();
    container.classList.remove("ss-host");
    removeStyle();
  }
  window.RochePlugin.register({
    id: "skin-studio",
    name: "美化工作室",
    version: "0.3.0",
    description: "白色全屏 AI 对话式美化工作台：35 个部位分支、预览、一键合并导出。",
    apps: [
      {
        id: "skin-studio-home",
        name: "美化",
        icon: "palette",
        iconImage: "",
        mount,
        unmount
      }
    ]
  });
})();
