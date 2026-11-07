/* skin-studio v0.1.1 | built 2026-11-07T11:07:57.805Z */
(() => {
  // src/ui/theme.css
  var theme_default = '/* 设计令牌：白底 + 单一蓝强调，DeepSeek 式信息密度 */\n.ss-root {\n  --ss-bg: #ffffff;\n  --ss-bg-soft: #f7f8fa;\n  --ss-chip: #f4f4f5;\n  --ss-line: #ecedef;\n  --ss-line-strong: #dcdee2;\n  --ss-ink: #1b1c1f;\n  --ss-sub: #4b5563;\n  --ss-muted: #9ca3af;\n  --ss-accent: #4d6bfe;\n  --ss-accent-soft: rgba(77, 107, 254, 0.08);\n  --ss-accent-line: rgba(77, 107, 254, 0.24);\n  --ss-danger: #c0392b;\n  --ss-ok: #0f9d58;\n\n  --ss-r-sm: 6px;\n  --ss-r-md: 10px;\n  --ss-r-lg: 16px;\n\n  --ss-font: -apple-system, BlinkMacSystemFont, "PingFang SC", "HarmonyOS Sans SC",\n    "Source Han Sans SC", "Microsoft YaHei", system-ui, sans-serif;\n  --ss-mono: ui-monospace, "SF Mono", Menlo, Consolas, "Courier New", monospace;\n\n  --ss-t: 180ms ease;\n  --ss-gutter: 16px;\n}\n\n@media (prefers-color-scheme: dark) {\n  /* 插件界面固定白色（用户要求），这里不跟随深色，避免代码块与预览对比错乱 */\n  .ss-root {\n    --ss-bg: #ffffff;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .ss-root * {\n    transition: none !important;\n    animation: none !important;\n  }\n}\n';

  // src/ui/base.css
  var base_default = "/* 基础骨架：全屏外扩 + 安全区回填 */\n\n.ss-root,\n.ss-root * {\n  box-sizing: border-box;\n}\n\n.ss-root {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: calc(100% + env(safe-area-inset-left) + env(safe-area-inset-right));\n  height: calc(100% + env(safe-area-inset-top) + env(safe-area-inset-bottom));\n  margin: calc(0px - env(safe-area-inset-top)) calc(0px - env(safe-area-inset-right))\n    calc(0px - env(safe-area-inset-bottom)) calc(0px - env(safe-area-inset-left));\n  overflow: hidden;\n  background: var(--ss-bg);\n  color: var(--ss-ink);\n  font-family: var(--ss-font);\n  font-size: 14px;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.ss-root button {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.ss-root input,\n.ss-root textarea {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  border: 0;\n  outline: none;\n  background: none;\n}\n\n.ss-root ::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.ss-root ::-webkit-scrollbar-track {\n  background: transparent;\n}\n.ss-root ::-webkit-scrollbar-thumb {\n  background: var(--ss-line-strong);\n  border-radius: 999px;\n}\n\n/* ---------- 顶栏 ---------- */\n\n.ss-top {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 48px;\n  padding: 0 max(12px, env(safe-area-inset-right)) 0 max(12px, env(safe-area-inset-left));\n  padding-top: env(safe-area-inset-top);\n  box-sizing: content-box;\n  border-bottom: 1px solid var(--ss-line);\n  background: var(--ss-bg);\n}\n\n.ss-top__title {\n  flex: 1 1 auto;\n  min-width: 0;\n  text-align: center;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ss-top__title--edit {\n  border-bottom: 1px solid var(--ss-accent);\n  padding-bottom: 1px;\n}\n\n.ss-icon-btn {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--ss-r-sm);\n  color: var(--ss-sub);\n  transition: background-color var(--ss-t), color var(--ss-t);\n}\n.ss-icon-btn:active {\n  background: var(--ss-chip);\n  color: var(--ss-ink);\n}\n.ss-icon-btn[disabled] {\n  opacity: 0.35;\n}\n\n/* ---------- 内容区 ---------- */\n\n.ss-body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  webkit-overflow-scrolling: touch;\n  display: flex;\n  flex-direction: column;\n}\n\n/* ---------- 底部输入区 ---------- */\n\n.ss-composer {\n  flex: 0 0 auto;\n  border-top: 1px solid var(--ss-line);\n  background: var(--ss-bg);\n  padding: 0 max(12px, env(safe-area-inset-right)) 0 max(12px, env(safe-area-inset-left));\n  padding-bottom: max(8px, env(safe-area-inset-bottom));\n}\n\n/* ---------- 抽屉 / 面板 / 遮罩 ---------- */\n\n.ss-mask {\n  position: absolute;\n  inset: 0;\n  background: rgba(17, 18, 20, 0.32);\n  opacity: 0;\n  /* 关键：不可见时绝不能吃点击，否则整页按钮全部失效 */\n  pointer-events: none;\n  transition: opacity var(--ss-t);\n  z-index: 40;\n}\n.ss-mask--in {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.ss-drawer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 84%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  background: var(--ss-bg);\n  border-right: 1px solid var(--ss-line);\n  border-radius: 0 var(--ss-r-lg) var(--ss-r-lg) 0;\n  transform: translateX(-100%);\n  transition: transform var(--ss-t);\n  z-index: 41;\n  pointer-events: none;\n  padding-top: env(safe-area-inset-top);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.ss-drawer--in {\n  transform: translateX(0);\n  pointer-events: auto;\n}\n\n.ss-sheet {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 72%;\n  display: flex;\n  flex-direction: column;\n  background: var(--ss-bg);\n  border-radius: var(--ss-r-lg) var(--ss-r-lg) 0 0;\n  transform: translateY(100%);\n  transition: transform var(--ss-t);\n  z-index: 41;\n  pointer-events: none;\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.ss-sheet--in {\n  transform: translateY(0);\n  pointer-events: auto;\n}\n\n.ss-screen {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--ss-bg);\n  z-index: 50;\n  padding-top: env(safe-area-inset-top);\n  padding-bottom: env(safe-area-inset-bottom);\n  transform: translateX(100%);\n  transition: transform var(--ss-t);\n  pointer-events: none;\n  visibility: hidden;\n}\n.ss-screen--in {\n  transform: translateX(0);\n  pointer-events: auto;\n  visibility: visible;\n}\n\n/* ---------- 通用按钮 ---------- */\n\n.ss-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 14px;\n  border-radius: var(--ss-r-sm);\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  transition: background-color var(--ss-t), color var(--ss-t), border-color var(--ss-t);\n}\n.ss-btn--primary {\n  background: var(--ss-accent);\n  color: #fff;\n}\n.ss-btn--primary:active {\n  background: #3f5ae0;\n}\n.ss-btn--ghost {\n  border: 1px solid var(--ss-line-strong);\n  color: var(--ss-sub);\n}\n.ss-btn--ghost:active {\n  background: var(--ss-chip);\n}\n.ss-btn--danger {\n  color: var(--ss-danger);\n}\n.ss-btn--block {\n  width: 100%;\n}\n.ss-btn[disabled] {\n  opacity: 0.45;\n}\n\n.ss-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  background: var(--ss-chip);\n  color: var(--ss-sub);\n  font-size: 12px;\n  white-space: nowrap;\n}\n.ss-chip--on {\n  background: var(--ss-accent-soft);\n  color: var(--ss-accent);\n  box-shadow: inset 0 0 0 1px var(--ss-accent-line);\n}\n\n.ss-empty {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 40px 28px;\n  text-align: center;\n  color: var(--ss-muted);\n}\n.ss-empty h2 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--ss-ink);\n}\n.ss-empty p {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.7;\n}\n";

  // src/ui/views.css
  var views_default = '/* ============ 对话流 ============ */\n\n.ss-thread {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 18px var(--ss-gutter) 28px;\n}\n\n.ss-msg {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-width: 100%;\n}\n\n.ss-msg--me {\n  align-items: flex-end;\n}\n\n.ss-msg__bubble {\n  max-width: 88%;\n  padding: 10px 14px;\n  border-radius: var(--ss-r-lg);\n  background: var(--ss-chip);\n  color: var(--ss-ink);\n  font-size: 14px;\n  line-height: 1.65;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ss-msg__plain {\n  font-size: 15px;\n  line-height: 1.78;\n  color: var(--ss-ink);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ss-msg__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--ss-muted);\n  font-family: var(--ss-mono);\n  letter-spacing: 0.06em;\n}\n\n.ss-msg__images {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: 6px;\n}\n\n.ss-msg__img {\n  width: 96px;\n  height: 96px;\n  object-fit: cover;\n  border-radius: var(--ss-r-md);\n  border: 1px solid var(--ss-line);\n  background: var(--ss-bg-soft);\n}\n\n.ss-msg__actions {\n  display: flex;\n  gap: 2px;\n  opacity: 0;\n  transition: opacity var(--ss-t);\n}\n.ss-msg:hover .ss-msg__actions,\n.ss-msg:focus-within .ss-msg__actions {\n  opacity: 1;\n}\n@media (hover: none) {\n  .ss-msg__actions {\n    opacity: 0.55;\n  }\n}\n\n.ss-suggest {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 4px 0 12px;\n}\n.ss-suggest .ss-chip {\n  height: 32px;\n  padding: 0 12px;\n  font-size: 12.5px;\n  background: #fff;\n  box-shadow: inset 0 0 0 1px var(--ss-line);\n}\n.ss-suggest .ss-chip:active {\n  background: var(--ss-accent-soft);\n  color: var(--ss-accent);\n}\n\n.ss-mini-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 26px;\n  padding: 0 8px;\n  border-radius: var(--ss-r-sm);\n  color: var(--ss-muted);\n  font-size: 11px;\n}\n.ss-mini-btn:active {\n  background: var(--ss-chip);\n  color: var(--ss-ink);\n}\n\n.ss-editor {\n  width: 100%;\n  min-height: 72px;\n  padding: 10px 12px;\n  border: 1px solid var(--ss-line-strong);\n  border-radius: var(--ss-r-md);\n  font-size: 14px;\n  line-height: 1.6;\n  resize: vertical;\n}\n\n/* ============ CSS 卡 ============ */\n\n.ss-code {\n  width: 100%;\n  border: 1px solid var(--ss-line);\n  border-radius: 12px;\n  background: #fff;\n  overflow: hidden;\n}\n\n.ss-code__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.ss-code__label {\n  font-family: var(--ss-mono);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--ss-accent);\n  background: var(--ss-accent-soft);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n\n.ss-code__meta {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-size: 12px;\n  color: var(--ss-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ss-code__flag {\n  font-size: 11px;\n  color: var(--ss-danger);\n}\n\n.ss-code__ok {\n  font-size: 11px;\n  color: var(--ss-ok);\n}\n\n.ss-code__chev {\n  color: var(--ss-muted);\n  transition: transform var(--ss-t);\n}\n.ss-code--open .ss-code__chev {\n  transform: rotate(180deg);\n}\n\n.ss-code__body {\n  max-height: 320px;\n  overflow: auto;\n  border-top: 1px solid var(--ss-line);\n  background: var(--ss-bg-soft);\n  padding: 12px;\n  font-family: var(--ss-mono);\n  font-size: 12px;\n  line-height: 1.7;\n  color: var(--ss-sub);\n  white-space: pre;\n  display: none;\n}\n.ss-code--open .ss-code__body {\n  display: block;\n}\n\n.ss-code__foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--ss-line);\n  display: none;\n}\n.ss-code--open .ss-code__foot {\n  display: flex;\n}\n\n.ss-code__lint {\n  margin-left: auto;\n  font-size: 11px;\n  color: var(--ss-muted);\n}\n\n/* ============ 输入区 ============ */\n\n.ss-scope-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 0 6px;\n}\n\n.ss-scope-tabs {\n  display: flex;\n  gap: 14px;\n}\n\n.ss-scope-tab {\n  position: relative;\n  padding: 2px 0 6px;\n  font-size: 13px;\n  color: var(--ss-muted);\n  transition: color var(--ss-t);\n}\n.ss-scope-tab--on {\n  color: var(--ss-ink);\n  font-weight: 600;\n}\n.ss-scope-tab--on::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  border-radius: 2px;\n  background: var(--ss-accent);\n}\n\n.ss-branch-chip {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  justify-content: flex-end;\n  font-size: 12px;\n  color: var(--ss-sub);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ss-branch-chip span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-branch-chip em {\n  font-style: normal;\n  color: var(--ss-muted);\n  font-family: var(--ss-mono);\n  font-size: 11px;\n}\n\n.ss-input-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  padding-bottom: 8px;\n}\n\n.ss-textarea {\n  flex: 1 1 auto;\n  min-height: 38px;\n  max-height: 132px;\n  padding: 9px 10px;\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: var(--ss-r-md);\n  background: var(--ss-bg-soft);\n  resize: none;\n  overflow-y: auto;\n}\n.ss-textarea::placeholder {\n  color: var(--ss-muted);\n}\n\n.ss-send {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: var(--ss-chip);\n  color: var(--ss-muted);\n  transition: background-color var(--ss-t), color var(--ss-t);\n}\n.ss-send--on {\n  background: var(--ss-accent);\n  color: #fff;\n}\n.ss-send--stop {\n  background: var(--ss-ink);\n  color: #fff;\n}\n\n.ss-attach-row {\n  display: flex;\n  gap: 6px;\n  padding: 0 0 6px;\n  flex-wrap: wrap;\n}\n.ss-attach {\n  position: relative;\n}\n.ss-attach img {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: var(--ss-r-sm);\n  border: 1px solid var(--ss-line);\n}\n.ss-attach button {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: rgba(17, 18, 20, 0.72);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ss-newreply {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 108px;\n  z-index: 20;\n  height: 30px;\n  padding: 0 12px;\n  border-radius: 999px;\n  background: rgba(17, 18, 20, 0.86);\n  color: #fff;\n  font-size: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n/* ============ 抽屉（对话列表） ============ */\n\n.ss-drawer__head {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--ss-line);\n}\n\n.ss-drawer__list {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 6px 8px 20px;\n}\n\n.ss-group-title {\n  padding: 12px 8px 6px;\n  font-size: 11px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ss-muted);\n}\n\n.ss-proj {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 10px 10px 12px;\n  border-radius: var(--ss-r-md);\n  transition: background-color var(--ss-t);\n}\n.ss-proj:active {\n  background: var(--ss-chip);\n}\n.ss-proj--on {\n  background: var(--ss-bg-soft);\n}\n.ss-proj--on::before {\n  content: "";\n  position: absolute;\n  left: 2px;\n  top: 10px;\n  bottom: 10px;\n  width: 2px;\n  border-radius: 2px;\n  background: var(--ss-accent);\n}\n.ss-proj__main {\n  flex: 1 1 auto;\n  min-width: 0;\n  text-align: left;\n}\n.ss-proj__title {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ss-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-proj__meta {\n  margin-top: 2px;\n  font-size: 11px;\n  color: var(--ss-muted);\n}\n\n/* ============ 分支面板 ============ */\n\n.ss-sheet__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--ss-line);\n}\n.ss-sheet__title {\n  flex: 1 1 auto;\n  font-size: 15px;\n  font-weight: 600;\n}\n.ss-sheet__body {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 4px 0 20px;\n}\n\n.ss-sec__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  letter-spacing: 0.06em;\n  color: var(--ss-muted);\n}\n.ss-sec__head strong {\n  color: var(--ss-ink);\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0;\n}\n\n.ss-branch-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 0 14px;\n  height: 44px;\n  border-top: 1px solid var(--ss-line);\n  text-align: left;\n}\n.ss-branch-row--on .ss-branch-row__name {\n  color: var(--ss-accent);\n  font-weight: 600;\n}\n.ss-branch-row--locked {\n  opacity: 0.55;\n}\n.ss-branch-row__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-branch-row__name {\n  font-size: 14px;\n  color: var(--ss-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-branch-row__meta {\n  font-size: 11px;\n  color: var(--ss-muted);\n  font-family: var(--ss-mono);\n}\n\n.ss-switch {\n  flex: 0 0 auto;\n  width: 38px;\n  height: 22px;\n  border-radius: 999px;\n  background: var(--ss-line-strong);\n  position: relative;\n  transition: background-color var(--ss-t);\n}\n.ss-switch::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);\n  transition: transform var(--ss-t);\n}\n.ss-switch--on {\n  background: var(--ss-accent);\n}\n.ss-switch--on::after {\n  transform: translateX(16px);\n}\n.ss-switch--dis {\n  opacity: 0.4;\n}\n\n/* ============ 素材库 ============ */\n\n.ss-scroll-page {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 12px var(--ss-gutter) 28px;\n}\n\n.ss-field {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.ss-field input {\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 36px;\n  padding: 0 10px;\n  border-radius: var(--ss-r-sm);\n  background: var(--ss-bg-soft);\n  font-size: 13px;\n}\n\n.ss-assets-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-top: 12px;\n}\n@media (min-width: 560px) {\n  .ss-assets-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.ss-asset {\n  position: relative;\n  border: 1px solid var(--ss-line);\n  border-radius: var(--ss-r-md);\n  overflow: hidden;\n  background: var(--ss-bg-soft);\n  aspect-ratio: 1 / 1;\n  text-align: left;\n}\n.ss-asset img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.ss-asset__fallback {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  color: var(--ss-muted);\n}\n.ss-asset__name {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 12px 6px 4px;\n  font-size: 10px;\n  color: #fff;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.62));\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-asset__used {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: rgba(77, 107, 254, 0.9);\n  color: #fff;\n  font-size: 9px;\n  font-family: var(--ss-mono);\n}\n\n.ss-gen-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n}\n.ss-gen {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: 1px solid var(--ss-line);\n  border-radius: var(--ss-r-md);\n  text-align: left;\n}\n.ss-gen__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-gen__name {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ss-gen__desc {\n  font-size: 11px;\n  color: var(--ss-muted);\n  margin-top: 2px;\n}\n\n/* ============ 预览 ============ */\n\n.ss-pv__bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  height: 48px;\n  border-bottom: 1px solid var(--ss-line);\n  flex: 0 0 auto;\n}\n.ss-pv__title {\n  flex: 1 1 auto;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ss-pv__chips {\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--ss-line);\n  flex: 0 0 auto;\n  scrollbar-width: none;\n}\n.ss-pv__chips::-webkit-scrollbar {\n  display: none;\n}\n.ss-pv__stage {\n  flex: 1 1 auto;\n  min-height: 0;\n  background: var(--ss-bg-soft);\n  padding: 0;\n}\n.ss-pv__frame {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n  background: #fff;\n}\n.ss-pv__foot {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 8px;\n  padding: 8px 12px;\n  border-top: 1px solid var(--ss-line);\n  background: var(--ss-bg);\n}\n.ss-pv__note {\n  padding: 6px 12px;\n  font-size: 11px;\n  color: var(--ss-accent);\n  background: var(--ss-accent-soft);\n}\n\n/* ============ 设置 / 列表页 ============ */\n\n.ss-list {\n  border-top: 1px solid var(--ss-line);\n}\n.ss-list__row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 13px 0;\n  border-bottom: 1px solid var(--ss-line);\n  text-align: left;\n}\n.ss-list__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.ss-list__label {\n  font-size: 14px;\n  color: var(--ss-ink);\n}\n.ss-list__hint {\n  margin-top: 3px;\n  font-size: 11px;\n  color: var(--ss-muted);\n  line-height: 1.5;\n}\n.ss-list__value {\n  font-size: 12px;\n  color: var(--ss-muted);\n  font-family: var(--ss-mono);\n}\n\n.ss-prompt-box {\n  margin: 10px 0 18px;\n  padding: 12px;\n  border: 1px solid var(--ss-line);\n  border-radius: var(--ss-r-md);\n  background: var(--ss-bg-soft);\n  font-family: var(--ss-mono);\n  font-size: 11px;\n  line-height: 1.7;\n  color: var(--ss-sub);\n  white-space: pre-wrap;\n  max-height: 320px;\n  overflow: auto;\n  display: none;\n}\n.ss-prompt-box--open {\n  display: block;\n}\n\n/* ============ Toast / 确认框 ============ */\n\n.ss-toast {\n  position: absolute;\n  left: 50%;\n  bottom: 96px;\n  transform: translate(-50%, 8px);\n  max-width: 78%;\n  padding: 9px 14px;\n  border-radius: 999px;\n  background: rgba(17, 18, 20, 0.9);\n  color: #fff;\n  font-size: 12.5px;\n  line-height: 1.45;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--ss-t), transform var(--ss-t);\n  z-index: 60;\n  text-align: center;\n}\n.ss-toast--in {\n  opacity: 1;\n  transform: translate(-50%, 0);\n}\n\n.ss-dialog {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: rgba(17, 18, 20, 0.36);\n  z-index: 70;\n  opacity: 0;\n  transition: opacity var(--ss-t);\n}\n.ss-dialog--in {\n  opacity: 1;\n}\n.ss-dialog__box {\n  width: 100%;\n  max-width: 320px;\n  background: #fff;\n  border-radius: var(--ss-r-lg);\n  padding: 18px;\n}\n.ss-dialog__title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.ss-dialog__msg {\n  font-size: 13px;\n  line-height: 1.65;\n  color: var(--ss-sub);\n  max-height: 40vh;\n  overflow: auto;\n  white-space: pre-wrap;\n}\n.ss-dialog__foot {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n\n/* 图片预览 */\n.ss-lightbox {\n  position: absolute;\n  inset: 0;\n  z-index: 80;\n  background: rgba(10, 10, 12, 0.92);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.ss-lightbox img {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius: var(--ss-r-sm);\n}\n';

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
    function schedule(key, value, onError) {
      if (timers[key]) clearTimeout(timers[key]);
      timers[key] = setTimeout(function() {
        delete timers[key];
        set(key, value).then(function(ok) {
          if (!ok && typeof onError === "function") onError();
        });
      }, DEBOUNCE);
    }
    function flush(key) {
      if (timers[key]) {
        clearTimeout(timers[key]);
        delete timers[key];
        return true;
      }
      return false;
    }
    async function remove(key) {
      try {
        await roche.storage.delete(key);
      } catch (err) {
        console.warn("[skin-studio] delete 失败", key, err);
      }
    }
    function chunkKey(projectId, n) {
      return "ss.messages." + projectId + "." + n;
    }
    async function loadMessages(projectId) {
      const index = await get("ss.msgindex." + projectId, []);
      const all = [];
      for (let i = 0; i < index.length; i++) {
        const part = await get(chunkKey(projectId, index[i]), []);
        if (Array.isArray(part)) all.push.apply(all, part);
      }
      return all;
    }
    async function saveMessages(projectId, messages) {
      const total = Math.ceil(messages.length / CHUNK);
      const old = await get("ss.msgindex." + projectId, []);
      for (let i = 0; i < total; i++) {
        await set(chunkKey(projectId, i), messages.slice(i * CHUNK, (i + 1) * CHUNK));
      }
      for (let i = 0; i < old.length; i++) {
        if (old[i] >= total) await remove(chunkKey(projectId, old[i]));
      }
      const index = [];
      for (let i = 0; i < total; i++) index.push(i);
      await set("ss.msgindex." + projectId, index);
      return total;
    }
    async function dropMessages(projectId) {
      const index = await get("ss.msgindex." + projectId, []);
      for (let i = 0; i < index.length; i++) await remove(chunkKey(projectId, index[i]));
      await remove("ss.msgindex." + projectId);
    }
    return {
      get,
      set,
      remove,
      schedule,
      flush,
      loadMessages,
      saveMessages,
      dropMessages,
      chunkKey
    };
  }

  // src/core/schema.js
  var SCOPES = [
    { id: "online", name: "线上", desc: "聊天页：气泡、引用、卡片、输入栏" },
    { id: "global", name: "全局", desc: "主页、桌面、动态、列表、导航" },
    { id: "offline", name: "线下", desc: "线下模式的档案卡与侧栏" }
  ];
  var EXPORT_ORDER = ["global", "online", "offline"];
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
  function branchesOf(scope) {
    return BRANCHES.filter(function(b) {
      return b.scope === scope;
    });
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

  // src/core/projects.js
  function uid(prefix) {
    const rnd = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID().slice(0, 8) : Math.random().toString(36).slice(2, 10);
    return (prefix || "id") + "_" + rnd;
  }
  function buildBranches() {
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
  function createProject(title) {
    const now = Date.now();
    return {
      id: uid("p"),
      title: title || "未命名对话",
      createdAt: now,
      updatedAt: now,
      activeBranch: "online.bubble-me",
      branches: buildBranches()
    };
  }
  function projectSummary(project) {
    let written = 0;
    Object.keys(project.branches).forEach(function(id) {
      if (project.branches[id].css.trim()) written += 1;
    });
    return {
      id: project.id,
      title: project.title,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      written
    };
  }
  function pushHistory(branch, prevCss, prevMode) {
    branch.history = branch.history || [];
    branch.history.unshift({ css: prevCss, mode: prevMode, at: Date.now() });
    if (branch.history.length > 5) branch.history.length = 5;
  }
  function writeBranch(project, id, css, mode, source) {
    const branch = project.branches[id];
    if (!branch || branch.locked) return false;
    pushHistory(branch, branch.css, branch.mode);
    const next = mode === "APPEND" && branch.css.trim() ? branch.css.replace(/\s*$/, "\n\n") + css : css;
    branch.css = next;
    branch.mode = mode || "REPLACE";
    branch.source = source || "ai";
    branch.updatedAt = Date.now();
    project.updatedAt = Date.now();
    return true;
  }
  function undoBranch(project, id) {
    const branch = project.branches[id];
    if (!branch || !branch.history || !branch.history.length) return false;
    const prev = branch.history.shift();
    branch.css = prev.css;
    branch.mode = prev.mode || "REPLACE";
    branch.updatedAt = Date.now();
    project.updatedAt = Date.now();
    return true;
  }
  function resetBranch(project, id) {
    const branch = project.branches[id];
    if (!branch || branch.locked) return false;
    pushHistory(branch, branch.css, branch.mode);
    branch.css = "";
    branch.source = "skeleton";
    branch.updatedAt = Date.now();
    project.updatedAt = Date.now();
    return true;
  }
  function toggleBranch(project, id, enabled) {
    const branch = project.branches[id];
    if (!branch || branch.locked) return false;
    branch.enabled = !!enabled;
    project.updatedAt = Date.now();
    return true;
  }
  function duplicateProject(project) {
    const copy = JSON.parse(JSON.stringify(project));
    copy.id = uid("p");
    copy.title = project.title + " 副本";
    copy.createdAt = Date.now();
    copy.updatedAt = Date.now();
    return copy;
  }
  function lineCount(css) {
    if (!css || !css.trim()) return 0;
    return css.split("\n").filter(function(l) {
      return l.trim();
    }).length;
  }
  function activeBranches(project) {
    return BRANCHES.filter(function(def) {
      const b = project.branches[def.id];
      return b && b.enabled && b.css && b.css.trim();
    }).map(function(def) {
      return { def, data: project.branches[def.id] };
    });
  }

  // src/core/messages.js
  function createMessage(role, text, extra) {
    const msg = {
      id: uid("m"),
      role,
      text: text || "",
      images: [],
      createdAt: Date.now()
    };
    if (extra) {
      Object.keys(extra).forEach(function(k) {
        msg[k] = extra[k];
      });
    }
    return msg;
  }
  function updateMessage(list, id, patch) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        Object.keys(patch).forEach(function(k) {
          list[i][k] = patch[k];
        });
        return list[i];
      }
    }
    return null;
  }
  function removeMessage(list, id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  function recentTurns(list, n) {
    const turns = Math.max(1, n || 3) * 2;
    return list.slice(Math.max(0, list.length - turns));
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

  // src/core/prompts.js
  var RULES = [
    "只改视觉，不改 DOM 结构与交互；不新增 class，只覆盖宿主已有选择器。",
    "气泡（.bubble-sent / .bubble-received）禁止写 border-radius / width / max-width / padding / margin / gap —— 这些是「聊天外观」设置里的内联值，写死会让用户改不动。",
    "尾巴只能改三角颜色（.bubble-tail-ios 的 ::before 的 border-*-color），形状、尺寸、位置不动。",
    "改了气泡底色，必须同时给出尾巴三角颜色，否则 iOS 尾巴会脱色。",
    "图片只能用素材库里登记的外链，写成 var(--ss-img-<名字>)；禁止 base64 内嵌，禁止 data:image。",
    "禁止 backdrop-filter；filter 尽量不用。",
    "禁止用 * 通配选择器，禁止 nth-child，禁止 [class*=] 这类脆弱选择器。",
    "变量统一 --ss- 前缀；引用前必须在该作用域的令牌分支里定义。",
    "每条规则都应能说明「为什么」，不要堆砌无意义的 !important。"
  ];
  function branchLines(project, scope) {
    return branchesOf(scope).map(function(def) {
      const b = project.branches[def.id];
      const lines = b && b.css ? b.css.split("\n").length : 0;
      return "- " + def.id + "（" + def.name + "，" + (lines ? lines + " 行" : "空") + "）";
    }).join("\n");
  }
  function buildSystemPrompt(ctx) {
    const project = ctx.project;
    const branch = ctx.branch;
    const scope = branch ? branch.scope : "online";
    const scopeName2 = (SCOPES.filter(function(s) {
      return s.id === scope;
    })[0] || {}).name || scope;
    const parts = [];
    parts.push("你是 Roche（小手机）的外观皮肤工程师。Roche 是纯前端移动应用，用户把 CSS 粘贴进「美化」面板生效。你的任务是只输出 CSS，不写 JS、不写 HTML。");
    parts.push("【可用钩子 · " + scopeName2 + "】\n" + hooksForScope(scope) + "\n\n【宿主 CSS 变量（可直接赋值）】\n" + HOST_VARS.join(", "));
    parts.push("【硬规则】\n" + RULES.map(function(r, i) {
      return i + 1 + ". " + r;
    }).join("\n"));
    const ctxLines = [];
    ctxLines.push("项目：" + project.title);
    ctxLines.push("当前作用域：" + scopeName2 + "（" + scope + "）");
    if (branch) {
      ctxLines.push("当前部位：" + branch.id + "（" + branch.name + "）");
      ctxLines.push("该部位允许：" + branch.hint);
      if (branch.forbid && branch.forbid.length) {
        ctxLines.push("该部位禁止：" + branch.forbid.join("、"));
      }
    }
    ctxLines.push("");
    ctxLines.push("这个作用域的分支清单：\n" + branchLines(project, scope));
    if (ctx.tokenCss && ctx.tokenCss.trim()) {
      ctxLines.push("");
      ctxLines.push("【令牌分支现有内容（务必复用其中的变量）】\n```css\n" + ctx.tokenCss.trim() + "\n```");
    } else {
      ctxLines.push("");
      ctxLines.push("【令牌分支还是空的】如果本次需要变量，请先用 --ss- 前缀定义，并提示用户写进令牌分支。");
    }
    if (branch && branch.css && branch.css.trim()) {
      ctxLines.push("");
      ctxLines.push("【当前部位现有 CSS（在此基础上改）】\n```css\n" + branch.css.trim() + "\n```");
    }
    if (ctx.assets && ctx.assets.length) {
      ctxLines.push("");
      ctxLines.push("【可用的图片素材（只能引用这些变量）】\n" + ctx.assets.slice(0, 12).map(function(a) {
        return "- var(--ss-img-" + a.slug + ")  // " + (a.name || "素材") + " " + a.url;
      }).join("\n"));
    }
    parts.push("【当前上下文】\n" + ctxLines.join("\n"));
    parts.push([
      "【输出协议 · 必须严格遵守】",
      "先用一句【判断】说清你要改什么，然后严格按下面的格式输出，不要输出多余的解释：",
      "",
      "【判断】一句话",
      "【分支】" + (branch ? branch.id : "online.bubble-me"),
      "【模式】REPLACE 或 APPEND",
      "【CSS】",
      "```css",
      "/* 只写这个分支的规则 */",
      "```",
      "【说明】不超过 3 行，讲清关键取舍",
      "【下一步】可选，一句话建议",
      "",
      "要求：",
      "- 【CSS】后面必须有且只有一个 ```css 代码块；",
      "- 代码块里只放该分支的规则，不要重复别的分支内容；",
      "- 如果用户只是聊天、不需要改 CSS，就不要输出【CSS】代码块，正常对话即可。"
    ].join("\n"));
    return parts.join("\n\n");
  }
  function buildUserContent(text, images) {
    if (!images || !images.length) return text;
    const content = [{ type: "text", text: text || "参考这些截图，帮我改对应部位的样式。" }];
    images.forEach(function(url) {
      content.push({ type: "image_url", image_url: { url } });
    });
    return content;
  }
  function buildMessages(systemPrompt, history, text, images) {
    const messages = [{ role: "system", content: systemPrompt }];
    (history || []).forEach(function(m) {
      messages.push({
        role: m.role === "ai" ? "assistant" : "user",
        content: m.text || ""
      });
    });
    messages.push({ role: "user", content: buildUserContent(text, images) });
    return messages;
  }
  function branchContext(project, branchId) {
    const branch = getBranch(branchId);
    const tokenId = branch ? branch.scope + ".tokens" : "online.tokens";
    const tokenBranch = project.branches[tokenId];
    return {
      project,
      branch,
      tokenCss: tokenBranch ? tokenBranch.css : ""
    };
  }

  // src/core/aiProtocol.js
  var TAG_BRANCH = /【分支】\s*([^\n\r]+)/;
  var TAG_MODE = /【模式】\s*([^\n\r]+)/;
  var TAG_JUDGE = /【判断】\s*([\s\S]*?)(?=【|$)/;
  var TAG_NOTE = /【说明】\s*([\s\S]*?)(?=【|$)/;
  var TAG_NEXT = /【下一步】\s*([\s\S]*?)(?=【|$)/;
  var CSS_BLOCK = /```(?:css|CSS|scss)?\s*\n([\s\S]*?)```/g;
  function pickCss(text) {
    const blocks = [];
    let m;
    CSS_BLOCK.lastIndex = 0;
    while (m = CSS_BLOCK.exec(text)) blocks.push(m[1]);
    if (!blocks.length) return "";
    let best = blocks[0];
    for (let i = 1; i < blocks.length; i++) {
      if (blocks[i].length > best.length) best = blocks[i];
    }
    return best.trim();
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
  function cleanBody(text) {
    return String(text || "").replace(/【判断】[\s\S]*?(?=【|$)/g, "").replace(/【分支】[^\n\r]*/g, "").replace(/【模式】[^\n\r]*/g, "").replace(/【说明】[\s\S]*?(?=【|$)/g, "").replace(/【下一步】[\s\S]*?(?=【|$)/g, "").replace(/```[\s\S]*?```/g, "").replace(/【CSS】/g, "").replace(/\n{3,}/g, "\n\n").trim();
  }
  function parseReply(text, fallbackBranchId, fallbackMode) {
    const raw = String(text || "");
    const branchRaw = TAG_BRANCH.exec(raw);
    const modeRaw = TAG_MODE.exec(raw);
    const judge = TAG_JUDGE.exec(raw);
    const note = TAG_NOTE.exec(raw);
    const next = TAG_NEXT.exec(raw);
    const css = pickCss(raw);
    const branchId = resolveBranch(branchRaw && branchRaw[1], fallbackBranchId);
    let mode = String(modeRaw && modeRaw[1] || fallbackMode || "REPLACE").toUpperCase();
    if (mode.indexOf("APPEND") > -1 || mode.indexOf("追加") > -1) mode = "APPEND";
    else mode = "REPLACE";
    const head = judge ? judge[1].trim() : "";
    const body = cleanBody(raw);
    const chat = [head, body].filter(Boolean).join("\n\n").trim();
    return {
      chat: chat || (css ? "已生成 CSS，见下方代码卡。" : raw.trim()),
      branchId,
      mode,
      css,
      note: note ? note[1].trim() : "",
      next: next ? next[1].trim() : "",
      complete: !!(branchId && css)
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
  function lintProject(list) {
    const errors = [];
    const warnings = [];
    const stats = { rules: 0, important: 0, urls: 0, classes: 0, branches: list.length };
    list.forEach(function(item) {
      const r = lint(item.data.css, { branchId: item.def.id });
      r.errors.forEach(function(e) {
        errors.push(item.def.name + "：" + e);
      });
      r.warnings.forEach(function(w) {
        warnings.push(item.def.name + "：" + w);
      });
      stats.rules += r.stats.rules;
      stats.important += r.stats.important;
      stats.urls += r.stats.urls;
      stats.classes += r.stats.classes;
    });
    return { errors, warnings, stats, ok: errors.length === 0 };
  }

  // src/core/exportCss.js
  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }
  function timestamp(d) {
    const t = d || /* @__PURE__ */ new Date();
    return t.getFullYear() + pad(t.getMonth() + 1) + pad(t.getDate()) + "-" + pad(t.getHours()) + pad(t.getMinutes());
  }
  function fileName(project, d) {
    const safe = String(project.title || "美化").replace(/[\\/:*?"<>|\s]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "美化";
    return safe + "-" + timestamp(d) + ".css";
  }
  function scopeName(id) {
    for (let i = 0; i < SCOPES.length; i++) if (SCOPES[i].id === id) return SCOPES[i].name;
    return id;
  }
  function usedAssets(project, assets) {
    const list = activeBranches(project);
    const all = list.map(function(i) {
      return i.data.css;
    }).join("\n");
    return (assets || []).filter(function(a) {
      const varName2 = "--ss-img-" + a.slug;
      return all.indexOf(varName2) > -1 || a.url && all.indexOf(a.url) > -1;
    });
  }
  function buildCss(project, assets, opts) {
    const options = opts || {};
    const list = activeBranches(project);
    const report = lintProject(list);
    const used = usedAssets(project, assets);
    const now = /* @__PURE__ */ new Date();
    const lines = [];
    lines.push("/* ==========================================================");
    lines.push("   " + (project.title || "美化") + " · Skin Studio 导出");
    lines.push("   生成时间：" + now.toLocaleString("zh-CN"));
    lines.push("   分支：" + list.length + " 个（共 " + Object.keys(project.branches).length + " 个，空分支已跳过）");
    lines.push("   顺序：全局 → 线上 → 线下");
    lines.push("   体检：" + report.errors.length + " 个错误 / " + report.warnings.length + " 个提醒，" + report.stats.rules + " 条规则，!important " + report.stats.important + " 次");
    if (options.includeReport !== false) {
      if (report.errors.length) {
        lines.push("");
        lines.push("   ⚠ 错误（可能导致整段失效）：");
        report.errors.slice(0, 12).forEach(function(e) {
          lines.push("     · " + e);
        });
      }
      if (report.warnings.length) {
        lines.push("");
        lines.push("   · 提醒：");
        report.warnings.slice(0, 12).forEach(function(w) {
          lines.push("     · " + w);
        });
      }
    }
    lines.push("   ========================================================== */");
    lines.push("");
    EXPORT_ORDER.forEach(function(scope) {
      const items = list.filter(function(i) {
        return i.def.scope === scope;
      });
      if (!items.length) return;
      lines.push("/* ----------------------------------------------------------");
      lines.push("   " + scopeName(scope) + " · " + items.length + " 个分支");
      lines.push("   ---------------------------------------------------------- */");
      lines.push("");
      items.forEach(function(item) {
        lines.push("/* ---- " + scopeName(scope) + " / " + item.def.name + " ---- */");
        lines.push(item.data.css.trim());
        lines.push("");
      });
    });
    if (used.length) {
      lines.push("/* ----------------------------------------------------------");
      lines.push("   资源清单（外链素材）");
      used.forEach(function(a) {
        lines.push("   var(--ss-img-" + a.slug + ")  →  " + a.url);
      });
      lines.push("   ---------------------------------------------------------- */");
    }
    return { css: lines.join("\n"), report, name: fileName(project, now) };
  }
  function downloadCss(name, css) {
    const blob = new Blob([css], { type: "text/css;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      URL.revokeObjectURL(url);
      if (a.parentNode) a.parentNode.removeChild(a);
    }, 3e3);
  }

  // src/core/assets.js
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
      id: uid("a"),
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
  function refsOf(project, asset) {
    const v = varName(asset);
    const out = [];
    activeBranches(project).concat(
      Object.keys(project.branches).map(function(id) {
        return { def: { id, name: id }, data: project.branches[id] };
      })
    ).forEach(function(item) {
      const css = item.data.css || "";
      if (css.indexOf(v) > -1 || asset.url && css.indexOf(asset.url) > -1) {
        if (!out.some(function(x) {
          return x.id === item.def.id;
        })) {
          out.push({ id: item.def.id, name: item.def.name });
        }
      }
    });
    return out;
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
  function ensureToken(project, asset) {
    const branchId = (project.activeBranch || "online.tokens").split(".")[0] + ".tokens";
    const branch = project.branches[branchId];
    if (!branch) return false;
    const v = varName(asset);
    if (branch.css.indexOf(v + ":") > -1) return false;
    const line = tokenLine(asset);
    branch.css = branch.css && branch.css.trim() ? branch.css.replace(/\s*$/, "\n  " + line + "\n") : ":root{\n  " + line + "\n}\n";
    if (!branch.css.trim().startsWith(":root") && branch.css.indexOf(":root") < 0) {
      branch.css = ":root{\n  " + line + "\n}\n";
    }
    branch.updatedAt = Date.now();
    return true;
  }

  // src/app/container.js
  var DEFAULT_SETTINGS = {
    temperature: 0.4,
    live: false,
    lastProjectId: "",
    imageEnabled: true
  };
  var LIVE_ID = "skin-studio-live";
  async function createApp(options) {
    const roche = options.roche;
    const storage = createStorage(roche);
    const listeners = [];
    const state = {
      projects: [],
      project: null,
      messages: [],
      assets: [],
      settings: Object.assign({}, DEFAULT_SETTINGS),
      busy: false,
      loading: true,
      error: "",
      lastReply: null
    };
    let msgTimer = null;
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
    async function saveIndex() {
      state.projects = dedupeProjects(state.projects);
      await storage.set("ss.projects", state.projects);
    }
    function dedupeProjects(list) {
      const seen = {};
      return list.filter(function(p) {
        if (seen[p.id]) return false;
        seen[p.id] = true;
        return true;
      });
    }
    function upsertSummary() {
      if (!state.project) return;
      const summary = projectSummary(state.project);
      const idx = state.projects.findIndex(function(p) {
        return p.id === summary.id;
      });
      if (idx > -1) state.projects[idx] = summary;
      else state.projects.unshift(summary);
      state.projects.sort(function(a, b) {
        return b.updatedAt - a.updatedAt;
      });
    }
    function persistProject(immediate) {
      if (!state.project) return;
      upsertSummary();
      const payload = state.project;
      if (immediate) {
        storage.set("ss.project." + payload.id, payload);
        saveIndex();
      } else {
        storage.schedule("ss.project." + payload.id, payload);
        storage.schedule("ss.projects", state.projects);
      }
    }
    function persistMessages() {
      if (!state.project) return;
      if (msgTimer) clearTimeout(msgTimer);
      const projectId = state.project.id;
      const messages = state.messages;
      msgTimer = setTimeout(function() {
        msgTimer = null;
        storage.saveMessages(projectId, messages).catch(function(err) {
          console.warn("[skin-studio] 保存消息失败", err);
        });
      }, 400);
    }
    function persistAssets() {
      storage.schedule("ss.assets", state.assets);
    }
    function persistSettings() {
      storage.schedule("ss.settings", state.settings);
    }
    function seedWelcome() {
      const msg = createMessage(
        "ai",
        "这里是美化工作室。左上下拉可以切换对话，底部选一个「作用域 → 部位」，我就只改那一块。\n\n试试说：「把气泡改成纸感，浅底深字」或者先让我出令牌。",
        {}
      );
      state.messages.push(msg);
    }
    async function openProject(id, opts) {
      const project = await storage.get("ss.project." + id, null);
      if (!project) return false;
      state.project = project;
      state.messages = await storage.loadMessages(id);
      state.settings.lastProjectId = id;
      persistSettings();
      if (!state.messages.length && !(opts && opts.silentSeed)) {
        seedWelcome();
        persistMessages();
      }
      notify("all");
      return true;
    }
    async function newProject(title) {
      const project = createProject(title || "新对话 " + (state.projects.length + 1));
      state.projects.unshift(projectSummary(project));
      state.project = project;
      state.messages = [];
      state.settings.lastProjectId = project.id;
      seedWelcome();
      await storage.set("ss.project." + project.id, project);
      await storage.saveMessages(project.id, state.messages);
      await saveIndex();
      persistSettings();
      notify("all");
      return project;
    }
    async function switchProject(id) {
      if (state.project && state.project.id === id) return;
      persistProject(true);
      await openProject(id);
    }
    async function renameProject(title) {
      if (!state.project) return;
      state.project.title = String(title || "").trim() || "未命名对话";
      state.project.updatedAt = Date.now();
      persistProject();
      notify("project");
    }
    async function deleteProject(id) {
      state.projects = state.projects.filter(function(p) {
        return p.id !== id;
      });
      await storage.remove("ss.project." + id);
      await storage.dropMessages(id);
      await saveIndex();
      if (state.project && state.project.id === id) {
        if (state.projects.length) await openProject(state.projects[0].id);
        else await newProject("第一个皮肤");
      }
      notify("all");
    }
    async function copyProject(id) {
      const src = state.project && state.project.id === id ? state.project : await storage.get("ss.project." + id, null);
      if (!src) return;
      const copy = duplicateProject(src);
      state.projects.unshift(projectSummary(copy));
      await storage.set("ss.project." + copy.id, copy);
      await storage.saveMessages(copy.id, []);
      await saveIndex();
      notify("all");
    }
    function selectBranch(id) {
      if (!state.project) return;
      state.project.activeBranch = id;
      persistProject();
      notify("branch");
    }
    function writeToBranch(branchId, css, mode, source) {
      if (!state.project || !branchId) return { ok: false, reason: "没有目标分支" };
      const result = lint(css, {
        branchId,
        assetUrls: state.assets.map(function(a) {
          return a.url;
        })
      });
      const ok = writeBranch(state.project, branchId, css, mode, source);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return { ok, lint: result };
    }
    function undo(branchId) {
      if (!state.project) return false;
      const ok = undoBranch(state.project, branchId);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return ok;
    }
    function reset(branchId) {
      if (!state.project) return false;
      const ok = resetBranch(state.project, branchId);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return ok;
    }
    function toggle(branchId, enabled) {
      if (!state.project) return false;
      const ok = toggleBranch(state.project, branchId, enabled);
      if (ok) {
        persistProject();
        notify("branch");
      }
      return ok;
    }
    function branchLint(branchId) {
      if (!state.project) return null;
      const b = state.project.branches[branchId];
      if (!b) return null;
      return lint(b.css, {
        branchId,
        assetUrls: state.assets.map(function(a) {
          return a.url;
        })
      });
    }
    function addMessage(msg) {
      state.messages.push(msg);
      persistMessages();
      state.project.updatedAt = Date.now();
      persistProject();
      notify("chat");
      return msg;
    }
    function editMessage(id, text) {
      if (!updateMessage(state.messages, id, { text, editedAt: Date.now() })) return false;
      persistMessages();
      notify("chat");
      return true;
    }
    function deleteMessage(id) {
      if (!removeMessage(state.messages, id)) return false;
      persistMessages();
      notify("chat");
      return true;
    }
    async function callAI(userText, images) {
      const branchId = state.project.activeBranch;
      const ctxParts = branchContext(state.project, branchId);
      const system = buildSystemPrompt({
        project: state.project,
        branch: ctxParts.branch,
        tokenCss: ctxParts.tokenCss,
        assets: state.assets
      });
      const history = recentTurns(state.messages, 3).map(function(m) {
        return { role: m.role, text: m.text };
      });
      const messages = buildMessages(system, history, userText, images);
      try {
        const result = await roche.ai.chat({
          messages,
          temperature: state.settings.temperature
        });
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
      addMessage(createMessage("user", content, { images: imgs.map(function(i) {
        return i.dataUrl;
      }) }));
      state.busy = true;
      notify("chat");
      let res = await callAI(content, imgs.map(function(i) {
        return i.dataUrl;
      }));
      if (res.error && imgs.length) {
        const retry = await callAI(content + "\n\n（图片已附上但宿主不支持，请仅根据文字判断）", []);
        if (!retry.error) {
          res = retry;
          toast("宿主 AI 不支持图片，已改用纯文字重试");
        }
      }
      state.busy = false;
      if (res.error) {
        addMessage(createMessage("ai", "调用失败：" + res.error + "\n\n检查一下 Roche 的 AI 设置，或稍后重试。", { failed: true }));
        return;
      }
      const parsed = parseReply(res.text, state.project.activeBranch, "REPLACE");
      addMessage(createMessage("ai", parsed.chat, {
        css: parsed.css,
        branchId: parsed.branchId,
        mode: parsed.mode,
        note: parsed.note,
        next: parsed.next,
        complete: parsed.complete,
        raw: res.text
      }));
    }
    async function regenerate(msgId) {
      const idx = state.messages.findIndex(function(m) {
        return m.id === msgId;
      });
      if (idx < 0) return;
      let userIdx = -1;
      for (let i = idx - 1; i >= 0; i--) {
        if (state.messages[i].role === "user") {
          userIdx = i;
          break;
        }
      }
      if (userIdx < 0) return;
      const userMsg = state.messages[userIdx];
      const images = (userMsg.images || []).map(function(url) {
        return { dataUrl: url };
      });
      removeMessage(state.messages, msgId);
      persistMessages();
      notify("chat");
      await send(userMsg.text, images);
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
      const asset = state.assets.find(function(a) {
        return a.id === id;
      });
      if (!asset) return;
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
      return state.project ? refsOf(state.project, asset) : [];
    }
    function insertAsset(asset, kind, options2) {
      if (!state.project) return null;
      const branchId = state.project.activeBranch;
      const gen = options2 && options2.generator ? options2.generator : null;
      if (!gen) return null;
      const tokenWritten = ensureToken(state.project, asset);
      const r = writeToBranch(branchId, gen.css, "APPEND", "generator");
      persistProject();
      notify("branch");
      return { tokenWritten, lint: r.lint };
    }
    function exportCss() {
      if (!state.project) return null;
      const built = buildCss(state.project, state.assets);
      downloadCss(built.name, built.css);
      const r = built.report;
      toast("已导出 " + built.name + (r.errors.length ? "（有 " + r.errors.length + " 个错误，见文件头）" : ""));
      return built;
    }
    function buildPreviewCss(extraCss) {
      if (!state.project) return "";
      const list = activeBranches(state.project).filter(function(item) {
        return item.data.enabled;
      });
      const order = ["global", "online", "offline"];
      let css = "";
      order.forEach(function(scope) {
        list.filter(function(i) {
          return i.def.scope === scope;
        }).forEach(function(item) {
          css += "/* " + item.def.name + " */\n" + item.data.css.trim() + "\n\n";
        });
      });
      if (extraCss) css += "/* 本次回复预览 */\n" + extraCss;
      return css;
    }
    function applyLive() {
      const css = buildPreviewCss("");
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
      return true;
    }
    function liveApplied() {
      return !!document.getElementById(LIVE_ID);
    }
    function setSetting(key, value) {
      state.settings[key] = value;
      persistSettings();
      notify("settings");
    }
    async function clearAll() {
      await storage.remove("ss.projects");
      await storage.remove("ss.assets");
      await storage.remove("ss.settings");
      if (state.project) await storage.dropMessages(state.project.id);
      state.projects = [];
      state.assets = [];
      state.messages = [];
      state.settings = Object.assign({}, DEFAULT_SETTINGS);
      state.project = null;
      clearLive();
      await newProject("第一个皮肤");
      notify("all");
    }
    function flushAll() {
      if (msgTimer) {
        clearTimeout(msgTimer);
        msgTimer = null;
      }
      const jobs = [];
      if (state.project) {
        upsertSummary();
        jobs.push(storage.set("ss.project." + state.project.id, state.project));
        jobs.push(storage.saveMessages(state.project.id, state.messages));
        jobs.push(storage.set("ss.projects", state.projects));
        jobs.push(storage.set("ss.settings", state.settings));
      }
      jobs.push(storage.set("ss.assets", state.assets));
      return Promise.all(jobs).catch(function(err) {
        console.warn("[skin-studio] 落盘失败", err);
      });
    }
    async function boot() {
      const projects = await storage.get("ss.projects", []);
      state.assets = await storage.get("ss.assets", []);
      const saved = await storage.get("ss.settings", {});
      state.settings = Object.assign({}, DEFAULT_SETTINGS, saved || {});
      state.projects = Array.isArray(projects) ? dedupeProjects(projects) : [];
      if (!state.projects.length) {
        await newProject("第一个皮肤");
      } else {
        const wanted = state.settings.lastProjectId;
        const id = wanted && state.projects.some(function(p) {
          return p.id === wanted;
        }) ? wanted : state.projects[0].id;
        const ok = await openProject(id, { silentSeed: true });
        if (!ok) await newProject("第一个皮肤");
        if (!state.messages.length) seedWelcome();
      }
      state.loading = false;
      notify("all");
    }
    const ctx = {
      state,
      roche,
      version: options.version,
      onChange,
      notify,
      toast,
      confirm,
      boot,
      switchProject,
      newProject,
      renameProject,
      deleteProject,
      copyProject,
      selectBranch,
      writeToBranch,
      undoBranch: undo,
      resetBranch: reset,
      toggleBranch: toggle,
      branchLint,
      getBranch,
      addMessage,
      editMessage,
      deleteMessage,
      send,
      regenerate,
      addAsset,
      removeAsset,
      updateAsset,
      assetRefs,
      insertAsset,
      exportCss,
      buildPreviewCss,
      applyLive,
      clearLive,
      liveApplied,
      setSetting,
      clearAll,
      flushAll,
      persistProject,
      persistMessages
    };
    return ctx;
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
  function fmtAgo(ts) {
    const diff = Date.now() - ts;
    if (diff < 60 * 1e3) return "刚刚";
    if (diff < 60 * 60 * 1e3) return Math.floor(diff / 6e4) + " 分钟前";
    if (diff < 24 * 60 * 60 * 1e3) return Math.floor(diff / 36e5) + " 小时前";
    const d = new Date(ts);
    return d.getMonth() + 1 + "/" + d.getDate();
  }
  function todayGroup(ts) {
    const now = /* @__PURE__ */ new Date();
    const d = new Date(ts);
    const sameDay = now.toDateString() === d.toDateString();
    if (sameDay) return "今天";
    if (now - d < 7 * 24 * 3600 * 1e3) return "近 7 天";
    return "更早";
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

  // src/ui/chat.js
  function lineCount2(css) {
    if (!css || !css.trim()) return 0;
    return css.split("\n").filter(function(l) {
      return l.trim();
    }).length;
  }
  function branchName(id) {
    const b = getBranch(id);
    return b ? b.name : id || "未指定分支";
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function() {
        fallbackCopy(text);
      });
    }
    fallbackCopy(text);
    return Promise.resolve();
  }
  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (err) {
    }
    document.body.removeChild(ta);
  }
  function buildCodeCard(ctx, actions, msg) {
    const branchId = msg.branchId || ctx.state.project && ctx.state.project.activeBranch;
    const css = msg.css || "";
    const result = lint(css, {
      branchId,
      assetUrls: ctx.state.assets.map(function(a) {
        return a.url;
      })
    });
    const hasErr = result.errors.length > 0;
    const head = el("div", { class: "ss-code__head" }, [
      el("span", { class: "ss-code__label", text: "CSS" }),
      el("span", {
        class: "ss-code__meta",
        text: lineCount2(css) + " 行 · " + branchName(branchId)
      }),
      msg.written ? el("span", { class: "ss-code__ok", text: "已写入" }) : msg.complete === false ? el("span", { class: "ss-code__flag", text: "格式不完整" }) : null,
      el("span", { class: "ss-code__chev" }, [svgIcon("chevron", 16)])
    ]);
    const body = el("pre", { class: "ss-code__body", text: css || "（这条回复没有可用的 CSS 代码块）" });
    const previewBtn = el("button", {
      class: "ss-btn ss-btn--ghost",
      onclick: function(ev) {
        ev.stopPropagation();
        actions.openPreview(css, branchName(branchId));
      },
      text: "预览本次"
    });
    const writeBtn = el("button", {
      class: "ss-btn ss-btn--primary",
      onclick: function(ev) {
        ev.stopPropagation();
        const r = ctx.writeToBranch(branchId, css, msg.mode || "REPLACE", "ai");
        if (!r.ok) {
          ctx.toast("写入失败：分支被锁或不存在");
          return;
        }
        msg.written = true;
        ctx.persistMessages();
        const errs = r.lint ? r.lint.errors.length : 0;
        ctx.toast(errs ? "已写入，但有 " + errs + " 个错误" : "已写入「" + branchName(branchId) + "」");
        ctx.notify("chat");
      },
      text: msg.mode === "APPEND" ? "追加到分支" : "写入分支"
    });
    const undoBtn = msg.written ? el("button", {
      class: "ss-mini-btn",
      onclick: function(ev) {
        ev.stopPropagation();
        if (ctx.undoBranch(branchId)) {
          msg.written = false;
          ctx.persistMessages();
          ctx.toast("已撤销上一版");
          ctx.notify("chat");
        }
      }
    }, [svgIcon("undo", 14), el("span", { text: "撤销" })]) : null;
    const lintHint = el("span", {
      class: "ss-code__lint",
      text: hasErr ? result.errors.length + " 个错误" : result.warnings.length ? result.warnings.length + " 个提醒" : "体检通过"
    });
    const foot = el("div", { class: "ss-code__foot" }, [previewBtn, writeBtn, undoBtn, lintHint]);
    const card = el("div", { class: "ss-code" }, [head, body, foot]);
    head.addEventListener("click", function() {
      card.classList.toggle("ss-code--open");
    });
    if (hasErr) actions.onLintError && actions.onLintError(result);
    return card;
  }
  function buildActions(items) {
    const row2 = el("div", { class: "ss-msg__actions" });
    items.forEach(function(item) {
      if (!item) return;
      row2.appendChild(el("button", {
        class: "ss-mini-btn",
        onclick: item.onClick,
        title: item.label
      }, [item.icon ? svgIcon(item.icon, 14) : null, el("span", { text: item.label })]));
    });
    return row2;
  }
  var SUGGESTIONS = [
    { label: "给我一套纸感令牌", text: "给我一套米灰纸感的令牌：日夜双色、低饱和、只用细线分层。" },
    { label: "气泡改成纸感", text: "把气泡改成纸感：我方墨块浅字，对方纸面加深色字，尾巴跟着同色。" },
    { label: "顶栏加细线", text: "顶栏改成纸底，底部加一条 1px 细线，标题换成衬线体。" },
    { label: "票券式邀请卡", text: "把邀请类卡片做成票券样式：左侧竖栏、大写类别标签、两个按钮。" }
  ];
  function buildSuggestions(ctx, actions) {
    const box = el("div", { class: "ss-suggest" });
    SUGGESTIONS.forEach(function(s) {
      box.appendChild(el("button", {
        class: "ss-chip",
        text: s.label,
        onclick: function() {
          actions.fillInput(s.text);
        }
      }));
    });
    return box;
  }
  function buildMessage(ctx, actions, msg) {
    const isMe = msg.role === "user";
    const wrap = el("div", { class: "ss-msg" + (isMe ? " ss-msg--me" : "") });
    if (isMe) {
      const bubble = el("div", { class: "ss-msg__bubble", text: msg.text || "" });
      if (msg.editing) {
        const ta = el("textarea", { class: "ss-editor", text: msg.text || "" });
        const save = el("button", {
          class: "ss-btn ss-btn--primary",
          text: "保存",
          onclick: function() {
            ctx.editMessage(msg.id, ta.value);
            msg.editing = false;
            ctx.notify("chat");
          }
        });
        const cancel = el("button", {
          class: "ss-btn ss-btn--ghost",
          text: "取消",
          onclick: function() {
            msg.editing = false;
            ctx.notify("chat");
          }
        });
        wrap.appendChild(ta);
        wrap.appendChild(el("div", { class: "ss-msg__meta" }, [save, cancel]));
        return wrap;
      }
      wrap.appendChild(bubble);
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
        msg.editedAt ? el("span", { text: "· 已编辑" }) : null
      ]));
      wrap.appendChild(buildActions([
        { label: "编辑", icon: "edit", onClick: function() {
          msg.editing = true;
          ctx.notify("chat");
        } },
        { label: "复制", icon: "copy", onClick: function() {
          copyText(msg.text || "");
          ctx.toast("已复制");
        } },
        {
          label: "删除",
          icon: "trash",
          onClick: function() {
            ctx.confirm({ title: "删除这条消息？", message: "只删对话记录，不影响分支里的 CSS。" }).then(function(ok) {
              if (ok) {
                ctx.deleteMessage(msg.id);
              }
            });
          }
        }
      ]));
      return wrap;
    }
    wrap.appendChild(el("div", { class: "ss-msg__plain", text: msg.text || "" }));
    if (msg.css) {
      wrap.appendChild(buildCodeCard(ctx, actions, msg));
    }
    if (msg.note) {
      wrap.appendChild(el("div", { class: "ss-msg__meta", text: "说明：" + msg.note }));
    }
    if (msg.next) {
      wrap.appendChild(el("div", { class: "ss-msg__meta", text: "下一步：" + msg.next }));
    }
    wrap.appendChild(buildActions([
      { label: "复制", icon: "copy", onClick: function() {
        copyText(msg.css || msg.text || "");
        ctx.toast("已复制");
      } },
      { label: "重新生成", icon: "refresh", onClick: function() {
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
    if (!ctx.state.messages.length) {
      thread.appendChild(el("div", { class: "ss-empty" }, [
        el("h2", { text: "从一个部位开始" }),
        el("p", { text: "底部先选「作用域 → 部位」，再描述你想要的效果。我只改你选中的那一块，不会牵动别处。" })
      ]));
      thread.appendChild(buildSuggestions(ctx, actions));
      return thread;
    }
    ctx.state.messages.forEach(function(msg) {
      thread.appendChild(buildMessage(ctx, actions, msg));
    });
    const hasUser = ctx.state.messages.some(function(m) {
      return m.role === "user";
    });
    if (!hasUser) thread.appendChild(buildSuggestions(ctx, actions));
    if (ctx.state.busy) {
      thread.appendChild(el("div", { class: "ss-msg__meta", text: "正在生成…" }));
    }
    return thread;
  }
  function createComposer(ctx, actions) {
    const draft = ctx.state.draft;
    const scopeTabs = el("div", { class: "ss-scope-tabs" });
    const branchChip = el("button", { class: "ss-branch-chip" });
    const attachRow = el("div", { class: "ss-attach-row" });
    const ta = el("textarea", {
      class: "ss-textarea",
      rows: "1",
      placeholder: "描述你想改的地方，例如「把气泡改成纸感，浅底深字」"
    });
    ta.value = draft.text || "";
    const sendBtn = el("button", { class: "ss-send", title: "发送" }, [svgIcon("send", 17)]);
    const eyeBtn = el("button", {
      class: "ss-icon-btn",
      title: "预览（当前对话全部分支）",
      onclick: function() {
        actions.openPreview("", "");
      }
    }, [svgIcon("eye", 19)]);
    const plusBtn = el("button", {
      class: "ss-icon-btn",
      title: "发送图片",
      onclick: function() {
        fileInput.click();
      }
    }, [svgIcon("image", 19)]);
    const fileInput = el("input", { type: "file", accept: "image/*", multiple: "multiple", style: { display: "none" } });
    fileInput.addEventListener("change", async function() {
      const files = Array.prototype.slice.call(fileInput.files || []).slice(0, 2);
      fileInput.value = "";
      for (let i = 0; i < files.length; i++) {
        try {
          const img = await compressImage(files[i]);
          draft.images.push(img);
        } catch (err) {
          ctx.toast("图片处理失败：" + (err.message || "未知错误"));
        }
      }
      sync();
    });
    function currentScope() {
      const id = ctx.state.project ? ctx.state.project.activeBranch : "online.bubble-me";
      return id.split(".")[0];
    }
    function setScope(scope) {
      const list = branchesOf(scope);
      if (!list.length) return;
      ctx.selectBranch(list[0].id);
      actions.openBranches(scope);
    }
    function sync() {
      const project = ctx.state.project;
      const activeId = project ? project.activeBranch : "";
      const scope = currentScope();
      scopeTabs.replaceChildren();
      SCOPES.forEach(function(s) {
        scopeTabs.appendChild(el("button", {
          class: "ss-scope-tab" + (s.id === scope ? " ss-scope-tab--on" : ""),
          text: s.name,
          onclick: function() {
            setScope(s.id);
          }
        }));
      });
      const def = getBranch(activeId);
      const data = project ? project.branches[activeId] : null;
      const lines = data ? lineCount2(data.css) : 0;
      branchChip.replaceChildren(
        el("span", { text: (def ? def.name : "未选择") + (lines ? " · 已写 " + lines + " 行" : " · 空") }),
        el("em", { text: "切换 ›" })
      );
      branchChip.onclick = function() {
        actions.openBranches(scope);
      };
      attachRow.replaceChildren();
      draft.images.forEach(function(img, i) {
        const box = el("div", { class: "ss-attach" }, [
          el("img", { src: img.dataUrl, alt: "待发送图片" }),
          el("button", {
            onclick: function() {
              draft.images.splice(i, 1);
              sync();
            },
            title: "移除"
          }, [svgIcon("close", 11)])
        ]);
        attachRow.appendChild(box);
      });
      attachRow.style.display = draft.images.length ? "flex" : "none";
      const hasContent = !!(ta.value.trim() || draft.images.length);
      sendBtn.className = "ss-send" + (ctx.state.busy ? " ss-send--stop" : hasContent ? " ss-send--on" : "");
      sendBtn.replaceChildren(svgIcon(ctx.state.busy ? "close" : "send", 17));
      sendBtn.title = ctx.state.busy ? "停止（忽略本次返回）" : "发送";
    }
    ta.addEventListener("input", function() {
      draft.text = ta.value;
      ta.style.height = "auto";
      ta.style.height = Math.min(132, ta.scrollHeight) + "px";
      const hasContent = !!(ta.value.trim() || draft.images.length);
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
      if (!text && !draft.images.length) return;
      const images = draft.images.slice();
      draft.text = "";
      draft.images = [];
      ta.value = "";
      ta.style.height = "auto";
      sync();
      ctx.send(text, images);
    });
    const composer = el("div", { class: "ss-composer" }, [
      el("div", { class: "ss-scope-row" }, [scopeTabs, branchChip]),
      attachRow,
      el("div", { class: "ss-input-row" }, [eyeBtn, plusBtn, ta, sendBtn]),
      fileInput
    ]);
    function setText(text) {
      ta.value = text;
      draft.text = text;
      ta.dispatchEvent(new Event("input", { bubbles: true }));
      ta.focus();
    }
    sync();
    return {
      node: composer,
      sync,
      setText,
      focus: function() {
        ta.focus();
      }
    };
  }

  // src/ui/branches.js
  function renderBranchSheet(ctx, actions, scope) {
    const project = ctx.state.project;
    const activeId = project ? project.activeBranch : "";
    const body = el("div", { class: "ss-sheet__body" });
    SCOPES.forEach(function(s) {
      const list = branchesOf(s.id);
      const written = list.filter(function(def2) {
        const b = project && project.branches[def2.id];
        return b && b.css && b.css.trim();
      }).length;
      const head = el("button", { class: "ss-sec__head" }, [
        el("strong", { text: s.name }),
        el("span", { text: list.length + " 个部位 · 已写 " + written }),
        el("span", { style: { marginLeft: "auto" }, text: (scope || "online") === s.id ? "当前" : "" })
      ]);
      head.addEventListener("click", function() {
        actions.setScope(s.id);
      });
      body.appendChild(head);
      list.forEach(function(def2) {
        const data = project ? project.branches[def2.id] : null;
        const lines = data ? lineCount(data.css) : 0;
        const enabled = data ? data.enabled : true;
        const sw = el("button", {
          class: "ss-switch" + (enabled ? " ss-switch--on" : "") + (def2.locked ? " ss-switch--dis" : ""),
          title: def2.locked ? "只读部位" : enabled ? "关闭（不参与预览与导出）" : "开启"
        });
        if (!def2.locked) {
          sw.addEventListener("click", function(ev) {
            ev.stopPropagation();
            ctx.toggleBranch(def2.id, !enabled);
            actions.refreshSheet();
          });
        }
        const row2 = el("div", {
          class: "ss-branch-row" + (def2.id === activeId ? " ss-branch-row--on" : "") + (def2.locked ? " ss-branch-row--locked" : "")
        }, [
          el("div", { class: "ss-branch-row__main" }, [
            el("div", { class: "ss-branch-row__name", text: def2.name }),
            el("div", {
              class: "ss-branch-row__meta",
              text: (lines ? lines + " 行" : "空") + (def2.locked ? " · 只读" : "")
            })
          ]),
          sw
        ]);
        row2.addEventListener("click", function() {
          ctx.selectBranch(def2.id);
          actions.closeSheet();
        });
        body.appendChild(row2);
      });
    });
    const def = getBranch(activeId);
    const footer = el("div", {
      style: {
        borderTop: "1px solid var(--ss-line)",
        padding: "10px 14px",
        display: "flex",
        gap: "8px",
        alignItems: "center"
      }
    }, [
      el("span", {
        style: { flex: "1 1 auto", fontSize: "11px", color: "var(--ss-muted)" },
        text: def ? def.hint : ""
      }),
      el("button", {
        class: "ss-btn ss-btn--ghost",
        text: "撤销",
        onclick: function() {
          if (ctx.undoBranch(activeId)) {
            ctx.toast("已撤销上一版");
            actions.refreshSheet();
          } else ctx.toast("没有可撤销的版本");
        }
      }),
      el("button", {
        class: "ss-btn ss-btn--ghost",
        text: "清空",
        onclick: function() {
          ctx.confirm({ title: "清空这个分支？", message: "当前 CSS 会进历史，之后还能撤销回来。" }).then(function(ok) {
            if (ok && ctx.resetBranch(activeId)) {
              ctx.toast("已清空");
              actions.refreshSheet();
            }
          });
        }
      })
    ]);
    return el("div", {
      style: { display: "flex", flexDirection: "column", flex: "1 1 auto", minHeight: "0" }
    }, [body, footer]);
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
    const grid = el("div", { class: "ss-assets-grid" });
    const panel = el("div");
    const input = el("input", { placeholder: "粘贴图片外链 https://…", type: "url" });
    const nameInput = el("input", { placeholder: "素材名（用于变量名）", style: { maxWidth: "40%" } });
    const page = el("div", { class: "ss-scroll-page" }, [
      el("div", {
        style: { fontSize: "12px", color: "var(--ss-muted)", lineHeight: "1.7", marginBottom: "10px" },
        text: "只存链接与元数据，不内嵌图片。素材会被写成 var(--ss-img-名字)，换图只改一行。"
      }),
      el("div", { class: "ss-field" }, [nameInput, input]),
      el("div", { style: { display: "flex", gap: "8px", marginBottom: "4px" } }, [
        el("button", {
          class: "ss-btn ss-btn--primary",
          text: "添加",
          onclick: function() {
            const url = input.value.trim();
            if (!url) return;
            const asset = ctx.addAsset(nameInput.value.trim() || "素材 " + (ctx.state.assets.length + 1), url);
            if (!asset) {
              ctx.toast("链接不合法，只能 http(s) 外链");
              return;
            }
            input.value = "";
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
            const all = ctx.state.messages.filter(function(m) {
              return m.css;
            }).map(function(m) {
              return m.css;
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
        const card = el("button", { class: "ss-asset" }, [
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
        card.addEventListener("click", function() {
          selected = asset;
          renderPanel();
        });
        grid.appendChild(card);
      });
    }
    function renderPanel() {
      panel.replaceChildren();
      if (!selected) return;
      const asset = selected;
      const refs = ctx.assetRefs(asset);
      panel.appendChild(el("div", {
        style: { height: "1px", background: "var(--ss-line)", margin: "14px 0" }
      }));
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
      const list = el("div", { class: "ss-gen-list" });
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
        list.appendChild(row2);
      });
      panel.appendChild(el("div", {
        style: { marginTop: "10px", fontSize: "12px", color: "var(--ss-sub)" },
        text: "生成片段（会追加到当前选中的分支）"
      }));
      panel.appendChild(list);
    }
    function runGenerator(gen, asset) {
      const options = {};
      if (gen.kind === "pattern") {
        options.pattern = "grid";
        const built2 = generate("pattern", null, options);
        const r = ctx.writeToBranch(ctx.state.project.activeBranch, built2.css, "APPEND", "generator");
        ctx.toast(r.ok ? "已追加格栅花纹" : "写入失败");
        return;
      }
      const built = generate(gen.kind, asset, options);
      if (!built.css) {
        ctx.toast(built.warnings[0] || "生成失败");
        return;
      }
      const tokenWritten = ctx.insertAsset(asset, gen.kind, { generator: built });
      ctx.toast((tokenWritten && tokenWritten.tokenWritten ? "已写入令牌 + " : "") + "已追加到当前分支");
      if (built.warnings.length) {
        setTimeout(function() {
          ctx.toast(built.warnings[0]);
        }, 900);
      }
    }
    renderGrid();
    return page;
  }

  // src/ui/preview.js
  var MOCK_BASE = `
*{box-sizing:border-box}
body{margin:0;font-family:-apple-system,"PingFang SC",system-ui,sans-serif;background:#fff;color:#1b1c1f;font-size:14px}
.wrap{min-height:100vh}
.sec{padding:14px 16px 22px;border-bottom:1px dashed #e5e7eb}
.sec>h3{margin:0 0 12px;font:10px/1.4 ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase;color:#9ca3af}

/* ---- 线上示例：默认样式贴近宿主 ---- */
.chat-viewport-root{display:flex;flex-direction:column;min-height:420px;background:#fff}
header.chat-header{display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #eee;background:#fff}
.chat-header-avatar{width:32px;height:32px;border-radius:50%;background:#dfe3ea;flex:0 0 auto}
.chat-header-meta{display:flex;flex-direction:column}
.chat-header-title{font-size:15px;font-weight:600}
.chat-header-online{font-size:10px;color:#9ca3af}
.chat-header-button{margin-left:auto;width:28px;height:28px;border-radius:8px;background:#f4f4f5}
.chat-scroll-area{flex:1 1 auto;padding:14px;display:flex;flex-direction:column;gap:12px;background:#fff}
.chat-message{display:flex;gap:8px;align-items:flex-start}
.chat-message--sent{flex-direction:row-reverse}
.chat-message-avatar{width:30px;height:30px;border-radius:50%;background:#e4e7ee;flex:0 0 auto}
.chat-message-body{max-width:74%;position:relative}
.bubble-received{background:#f1f1f1;color:#111;border-radius:18px 18px 18px 4px;padding:8px 12px;line-height:1.6}
.bubble-sent{background:#000;color:#fff;border-radius:18px 18px 4px;padding:8px 12px;line-height:1.6}
.bubble-tail-ios{position:relative;overflow:visible}
.bubble-tail-ios.bubble-received::before{content:"";position:absolute;bottom:-1px;left:-6px;width:16px;height:14px;border-bottom-right-radius:14px;border-right:10px solid #f1f1f1}
.bubble-tail-ios.bubble-sent::before{content:"";position:absolute;bottom:-1px;right:-6px;width:16px;height:14px;border-bottom-left-radius:14px;border-left:10px solid #000}
.chat-message-time{font-size:10px;color:#9ca3af;text-align:center;margin:2px 0 8px}
.chat-message-sender-name{font-size:10px;color:#9ca3af;margin-bottom:4px}
.quote-line{border-left:2px solid rgba(0,0,0,.18);padding-left:8px;margin-bottom:6px;font-size:12px;opacity:.75}
.chat-card{background:#fff;border-radius:12px;padding:10px 12px;max-width:74%;box-shadow:0 1px 2px rgba(0,0,0,.06)}
.chat-card--transfer{border:1px solid #eee}
.transfer-amount{font-size:22px;font-weight:600}
.transfer-currency{font-size:11px;color:#9ca3af;margin-left:4px}
.chat-card--drip-invite{border:1px solid #eee;padding:12px}
.invite-title{font-size:13px;font-weight:600;margin-bottom:8px}
.invite-actions{display:flex;gap:8px}
.offline-invite__button{flex:1 1 auto;height:30px;border-radius:8px;background:#f4f4f5;color:#4b5563;font-size:12px}
.offline-invite__button--accept{background:#000;color:#fff}
.chat-input-bar{display:flex;align-items:center;gap:8px;padding:8px 12px;border-top:1px solid #eee;background:#fff}
.chat-input-plus,.chat-input-heart{width:28px;height:28px;border-radius:8px;background:#f4f4f5}
.chat-input-textarea{flex:1 1 auto;min-height:32px;border-radius:16px;background:#f7f8fa;padding:7px 10px;font-size:13px}
.chat-input-send{width:30px;height:30px;border-radius:8px;background:#000}
.chat-plus-panel{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:10px;border-top:1px solid #eee}
.chat-plus-action{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 4px;border-radius:10px;background:#fafafa;font-size:11px}
.chat-plus-action__icon{width:20px;height:20px;border-radius:6px;background:#e5e7eb}
.typing-dot{width:6px;height:6px;border-radius:50%;background:#9ca3af;display:inline-block}
.chat-other-unread-badge{display:inline-block;padding:2px 6px;border-radius:9px;background:#000;color:#fff;font-size:10px}

/* ---- 全局示例 ---- */
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:10px 0}
.square-app-btn{display:flex;flex-direction:column;align-items:center;gap:6px}
.app-icon-bg{width:52px;height:52px;border-radius:14px;background:#eef0f4}
.app-label{font-size:10px;color:#888}
.post-item{border-bottom:1px solid #eee;padding:12px 0}
.post-author-name{font-weight:600;font-size:14px}
.post-timestamp{font-size:11px;color:#9ca3af;margin-left:6px}
.post-body{margin-top:6px;line-height:1.7;font-size:14px;color:#333}
.post-actions{display:flex;gap:16px;margin-top:8px}
.post-action-btn{font-size:11px;color:#9ca3af}
.bottom-nav{display:flex;justify-content:space-around;padding:10px 0;border-top:1px solid #eee}
.bottom-nav span{font-size:11px;color:#9ca3af}

/* ---- 线下示例 ---- */
.offline-mode{padding:14px 16px;background:#fff}
.offline-card{border:1px solid #f4f4f5;border-radius:24px;overflow:hidden;background:#fff}
.offline-card-top{padding:16px;border-bottom:1px solid #f4f4f5}
.offline-card__sender{font:600 16px/1.3 Georgia,serif}
.offline-card__time{font-size:11px;color:#a1a1aa;margin-top:4px}
.offline-card__body{padding:16px}
.offline-card__content-text{font-size:16px;line-height:2.05;color:#52525b}
.offline-card__inline-quote{border-left:3px solid #e4e4e7;padding-left:10px;font-style:italic;color:#71717a;margin:10px 0}
.offline-card__footer{display:flex;gap:12px;padding:12px 16px;border-top:1px solid #f4f4f5;font-size:10px;color:#d4d4d8}
.offline-card__floor{letter-spacing:.22em}
.noir-toggle-bg{width:38px;height:22px;border-radius:999px;background:#000;display:inline-block}
`;
  var SCENES = {
    online: `
<section class="sec">
  <h3>线上 · 聊天页</h3>
  <div class="chat-viewport-root">
    <header class="chat-header">
      <div class="chat-header-avatar"></div>
      <div class="chat-header-meta">
        <div class="chat-header-title">沈砚</div>
        <div class="chat-header-online">在线 · 正在输入</div>
      </div>
      <div class="chat-header-button"></div>
    </header>
    <main class="chat-scroll-area">
      <div class="chat-message-time">今天 21:04</div>
      <div class="chat-message chat-message--received">
        <div class="chat-message-avatar"></div>
        <div class="chat-message-body">
          <div class="chat-message-sender-name">沈砚</div>
          <div class="bubble-received bubble-tail-ios">今晚的雨停了，窗台上的水还在往下淌。</div>
        </div>
      </div>
      <div class="chat-message chat-message--sent">
        <div class="chat-message-avatar"></div>
        <div class="chat-message-body">
          <div class="bubble-sent bubble-tail-ios">那我给你留一盏灯。</div>
        </div>
      </div>
      <div class="chat-message chat-message--received">
        <div class="chat-message-avatar"></div>
        <div class="chat-message-body">
          <div class="quote-line">那我给你留一盏灯。</div>
          <div class="bubble-received bubble-tail-ios">留着吧，我记得回来看。</div>
        </div>
      </div>
      <div class="chat-message chat-message--sent">
        <div class="chat-message-avatar"></div>
        <div class="chat-card chat-card--transfer">
          <div><span class="transfer-amount">66.00</span><span class="transfer-currency">CNY</span></div>
          <div style="font-size:12px;color:#9ca3af;margin-top:6px">转账 · 买把伞</div>
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
      <div class="chat-message-time"><span class="typing-dot"></span> 对方正在输入</div>
    </main>
    <div class="chat-plus-panel">
      <div class="chat-plus-action"><div class="chat-plus-action__icon"></div><span>相册</span></div>
      <div class="chat-plus-action"><div class="chat-plus-action__icon"></div><span>图片</span></div>
      <div class="chat-plus-action"><div class="chat-plus-action__icon"></div><span>转账</span></div>
      <div class="chat-plus-action"><div class="chat-plus-action__icon"></div><span>位置</span></div>
    </div>
    <div class="chat-input-bar">
      <div class="chat-input-plus"></div>
      <div class="chat-input-textarea">说点什么…</div>
      <div class="chat-input-heart"></div>
      <div class="chat-input-send"></div>
    </div>
  </div>
</section>`,
    global: `
<section class="sec">
  <h3>全局 · 桌面 / 动态 / 导航</h3>
  <div class="grid">
    ${["相册", "备忘录", "世界书", "设置"].map(function(n) {
      return '<div class="square-app-btn"><div class="app-icon-bg"></div><div class="app-label">' + n + "</div></div>";
    }).join("")}
  </div>
  <div class="post-item">
    <div><span class="post-author-name">沈砚</span><span class="post-timestamp">2 小时前</span></div>
    <div class="post-body">楼下的梧桐开始落叶了。今年秋天来得比往年早一点。</div>
    <div class="post-actions"><span class="post-action-btn">喜欢 12</span><span class="post-action-btn">评论 3</span><span class="post-action-btn">转发</span></div>
  </div>
  <div class="bottom-nav"><span>动态</span><span>消息</span><span>我的</span></div>
</section>`,
    offline: `
<section class="sec">
  <h3>线下 · 档案卡</h3>
  <div class="offline-mode">
    <div class="offline-card">
      <div class="offline-card-top">
        <div class="offline-card__sender">沈砚</div>
        <div class="offline-card__time">21:04 · 雨</div>
      </div>
      <div class="offline-card__body">
        <div class="offline-card__content-text">
          今晚的雨停了，窗台上的水还在往下淌。我把窗开了一条缝，风带着一点凉。
          <div class="offline-card__inline-quote">「留着吧，我记得回来看。」</div>
          你要是还没睡，就坐一会儿。
        </div>
      </div>
      <div class="offline-card__footer">
        <span class="offline-card__floor">PAGE 02</span>
        <span>1,204 字</span>
      </div>
    </div>
  </div>
</section>`
  };
  function buildPreview(project, extraCss, onlyBranch) {
    const list = activeBranches(project);
    let css = "";
    ["global", "online", "offline"].forEach(function(scope) {
      list.filter(function(i) {
        return i.def.scope === scope;
      }).forEach(function(item) {
        if (onlyBranch && item.def.id !== onlyBranch) return;
        css += "/* " + item.def.name + " */\n" + item.data.css.trim() + "\n\n";
      });
    });
    if (extraCss) css += "/* 本次回复预览 */\n" + extraCss + "\n";
    const html = '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>' + MOCK_BASE + '</style><style id="skin-studio-preview">' + css + '</style></head><body><div class="wrap">' + SCENES.global + SCENES.online + SCENES.offline + "</div></body></html>";
    return { html, css };
  }
  function renderPreview(ctx, actions, extraCss, extraLabel) {
    const project = ctx.state.project;
    const chips = el("div", { class: "ss-pv__chips" });
    const stage = el("div", { class: "ss-pv__stage" });
    const note = el("div", {
      class: "ss-pv__note",
      style: { display: extraCss ? "block" : "none" },
      text: extraCss ? "正在预览单条回复：" + (extraLabel || "") + "（未写入分支）" : ""
    });
    function refresh() {
      const built = buildPreview(project, extraCss, "");
      const frame = el("iframe", {
        class: "ss-pv__frame",
        srcdoc: built.html,
        sandbox: "allow-same-origin"
      });
      stage.replaceChildren(frame);
    }
    BRANCHES.forEach(function(def) {
      const data = project.branches[def.id];
      if (!data || !data.css || !data.css.trim()) return;
      const on = data.enabled;
      const chip = el("button", {
        class: "ss-chip" + (on ? " ss-chip--on" : ""),
        text: def.name,
        title: on ? "点击关闭（不参与预览）" : "点击开启"
      });
      chip.addEventListener("click", function() {
        ctx.toggleBranch(def.id, !on);
        renderChips();
        refresh();
      });
      chips.appendChild(chip);
    });
    function renderChips() {
      chips.replaceChildren();
      BRANCHES.forEach(function(def) {
        const data = project.branches[def.id];
        if (!data || !data.css || !data.css.trim()) return;
        const on = data.enabled;
        const chip = el("button", {
          class: "ss-chip" + (on ? " ss-chip--on" : ""),
          text: def.name
        });
        chip.addEventListener("click", function() {
          ctx.toggleBranch(def.id, !on);
          renderChips();
          refresh();
        });
        chips.appendChild(chip);
      });
      if (!chips.children.length) {
        chips.appendChild(el("span", { class: "ss-chip", text: "还没有写入任何分支" }));
      }
    }
    renderChips();
    const bar = el("div", { class: "ss-pv__bar" }, [
      el("button", { class: "ss-icon-btn", onclick: actions.closePreview }, [svgIcon("back", 18)]),
      el("div", { class: "ss-pv__title", text: "预览 · " + (project ? project.title : "") }),
      el("button", { class: "ss-icon-btn", onclick: actions.closePreview }, [svgIcon("close", 18)])
    ]);
    const applyBtn = el("button", {
      class: "ss-btn ss-btn--ghost",
      text: ctx.liveApplied() ? "撤销应用到宿主" : "应用到宿主（临时）",
      onclick: function() {
        if (ctx.liveApplied()) {
          ctx.clearLive();
          ctx.toast("已移除临时样式");
          applyBtn.textContent = "应用到宿主（临时）";
          return;
        }
        ctx.confirm({
          title: "临时应用到宿主？",
          message: "会立刻改动 Roche 的真实页面外观，只在本机本次运行有效，重启或退出插件后失效。"
        }).then(function(ok) {
          if (!ok) return;
          const len = ctx.applyLive();
          ctx.toast("已应用 " + len + " 字符的样式（临时）");
          applyBtn.textContent = "撤销应用到宿主";
        });
      }
    });
    const foot = el("div", { class: "ss-pv__foot" }, [
      el("button", {
        class: "ss-btn ss-btn--primary",
        style: { flex: "1 1 auto" },
        text: "导出 CSS",
        onclick: function() {
          actions.exportCss();
        }
      }),
      applyBtn
    ]);
    refresh();
    return el("div", {
      style: { display: "flex", flexDirection: "column", width: "100%", height: "100%" }
    }, [bar, chips, note, stage, foot]);
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
    const project = ctx.state.project;
    const page = el("div", { class: "ss-scroll-page" });
    const list = el("div", { class: "ss-list" });
    const promptBox = el("pre", { class: "ss-prompt-box" });
    const promptRow = row("查看系统提示词", "AI 看到的规则、钩子白名单与输出协议", el("span", {
      class: "ss-list__value",
      text: "展开"
    }));
    promptRow.addEventListener("click", function() {
      const ctxParts = branchContext(project, project.activeBranch);
      promptBox.textContent = buildSystemPrompt({
        project,
        branch: ctxParts.branch,
        tokenCss: ctxParts.tokenCss,
        assets: ctx.state.assets
      });
      promptBox.classList.toggle("ss-prompt-box--open");
      promptRow.querySelector(".ss-list__value").textContent = promptBox.classList.contains("ss-prompt-box--open") ? "收起" : "展开";
    });
    list.appendChild(promptRow);
    page.appendChild(list);
    page.appendChild(promptBox);
    const tempValue = el("span", { class: "ss-list__value", text: String(ctx.state.settings.temperature) });
    const slider = el("input", {
      type: "range",
      min: "0",
      max: "1.2",
      step: "0.1",
      value: String(ctx.state.settings.temperature),
      style: { width: "120px", accentColor: "var(--ss-accent)" }
    });
    slider.addEventListener("input", function() {
      tempValue.textContent = slider.value;
    });
    slider.addEventListener("change", function() {
      ctx.setSetting("temperature", Number(slider.value));
    });
    const list2 = el("div", { class: "ss-list" }, [
      row("发散程度", "越低越稳定，改样式建议 0.3–0.5", el("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, [slider, tempValue])),
      row("发送图片", "宿主 AI 不支持多模态时会自动降级为纯文字", el("button", {
        class: "ss-switch" + (ctx.state.settings.imageEnabled ? " ss-switch--on" : ""),
        onclick: function() {
          ctx.setSetting("imageEnabled", !ctx.state.settings.imageEnabled);
        }
      })),
      row("临时应用到宿主", "会改动真实页面外观，仅本次运行有效", el("button", {
        class: "ss-switch" + (ctx.liveApplied() ? " ss-switch--on" : ""),
        onclick: function() {
          if (ctx.liveApplied()) {
            ctx.clearLive();
            ctx.toast("已移除临时样式");
            actions.refreshScreen();
            return;
          }
          ctx.confirm({
            title: "临时应用到宿主？",
            message: "立刻改动 Roche 真实页面外观，重启后失效；美化面板里的设置不会被写入。"
          }).then(function(ok) {
            if (ok) {
              ctx.applyLive();
              ctx.toast("已临时应用");
              actions.refreshScreen();
            }
          });
        }
      }))
    ]);
    page.appendChild(list2);
    const list3 = el("div", { class: "ss-list" });
    const items = activeBranches(project);
    const report = lintProject(items);
    const exportRow = row("导出 CSS", "按 全局 → 线上 → 线下 合并，空分支跳过", el("span", {
      class: "ss-btn ss-btn--primary",
      text: "导出"
    }));
    exportRow.addEventListener("click", function() {
      actions.exportCss();
    });
    list3.appendChild(exportRow);
    list3.appendChild(row(
      "当前体检",
      report.errors.length ? report.errors.slice(0, 3).join("\n") : report.warnings.length ? report.warnings.slice(0, 3).join("\n") : "没有发现问题",
      el("span", {
        class: "ss-list__value",
        text: items.length + " 个分支 · " + report.stats.rules + " 条规则"
      })
    ));
    page.appendChild(list3);
    const list4 = el("div", { class: "ss-list" });
    const clearRow = row("清空全部数据", "项目、消息、素材、设置都会删除，且无法恢复", el("span", {
      class: "ss-btn ss-btn--danger",
      text: "清空"
    }));
    clearRow.addEventListener("click", function() {
      ctx.confirm({ title: "清空全部数据？", message: "这会删除所有对话、分支 CSS 与素材，无法撤销。" }).then(function(ok) {
        if (ok) ctx.clearAll();
      });
    });
    list4.appendChild(clearRow);
    page.appendChild(list4);
    page.appendChild(el("div", {
      style: { marginTop: "20px", fontSize: "11px", color: "var(--ss-muted)", lineHeight: "1.8" }
    }, [
      el("div", { text: "美化工作室 v" + ctx.version }),
      el("div", { text: "数据存在 roche.storage（插件私有），卸载插件会一并清理。" }),
      el("div", { text: "气泡圆角、尾巴形状、头像间距归「聊天外观」设置，本站不做覆盖。" })
    ]));
    return page;
  }

  // src/app/shell.js
  function mountShell(container, ctx) {
    ctx.state.draft = ctx.state.draft || { text: "", images: [] };
    const root = el("div", { class: "ss-root" });
    const titleEl = el("button", { class: "ss-top__title", text: "美化工作室" });
    const top = el("div", { class: "ss-top" }, [
      el("button", { class: "ss-icon-btn", title: "对话列表", onclick: function() {
        openDrawer();
      } }, [svgIcon("menu", 19)]),
      titleEl,
      el("button", { class: "ss-icon-btn", title: "更多", onclick: function() {
        openMenu();
      } }, [svgIcon("more", 19)]),
      // 退出常驻在顶栏，不用翻菜单
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
      }, [svgIcon("close", 19)])
    ]);
    const body = el("div", { class: "ss-body" });
    const actions = {};
    const composer = createComposer(ctx, actions);
    const mask = el("div", { class: "ss-mask" });
    const drawer = el("div", { class: "ss-drawer" });
    const sheet = el("div", { class: "ss-sheet" });
    const screen = el("div", { class: "ss-screen" });
    const toastEl = el("div", { class: "ss-toast" });
    let drawerOpen = false;
    let sheetMode = "";
    let sheetScope = "online";
    let screenName = "";
    let previewExtra = "";
    let previewLabel = "";
    let toastTimer = null;
    root.appendChild(top);
    root.appendChild(body);
    root.appendChild(composer.node);
    root.appendChild(mask);
    root.appendChild(drawer);
    root.appendChild(sheet);
    root.appendChild(screen);
    root.appendChild(toastEl);
    container.appendChild(root);
    function toast(message) {
      toastEl.textContent = message;
      toastEl.classList.add("ss-toast--in");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function() {
        toastEl.classList.remove("ss-toast--in");
        toastTimer = null;
      }, 2200);
    }
    function askText(title, value) {
      return new Promise(function(resolve) {
        const input = el("input", {
          class: "ss-editor",
          style: { minHeight: "40px", marginTop: "10px" },
          value: value || ""
        });
        const box = el("div", { class: "ss-dialog__box" }, [
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
        ]);
        const layer = el("div", { class: "ss-dialog" }, [box]);
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
    function lightbox(url) {
      const layer = el("div", { class: "ss-lightbox" }, [
        el("img", { src: url, alt: "图片预览" })
      ]);
      layer.addEventListener("click", function() {
        if (layer.parentNode) layer.parentNode.removeChild(layer);
      });
      root.appendChild(layer);
    }
    function openDrawer() {
      drawerOpen = true;
      renderDrawer();
      mask.classList.add("ss-mask--in");
      drawer.classList.add("ss-drawer--in");
    }
    function closeDrawer() {
      drawerOpen = false;
      drawer.classList.remove("ss-drawer--in");
      if (!sheetMode && !screenName) mask.classList.remove("ss-mask--in");
    }
    function renderDrawer() {
      clear(drawer);
      const head = el("div", { class: "ss-drawer__head" }, [
        el("button", {
          class: "ss-btn ss-btn--ghost ss-btn--block",
          text: "＋ 新建对话",
          onclick: function() {
            askText("新对话的名字", "新对话 " + (ctx.state.projects.length + 1)).then(function(name) {
              if (name === null) return;
              ctx.newProject(name || "").then(function() {
                closeDrawer();
              });
            });
          }
        })
      ]);
      const listEl = el("div", { class: "ss-drawer__list" });
      const groups = { 今天: [], "近 7 天": [], 更早: [] };
      ctx.state.projects.forEach(function(p) {
        groups[todayGroup(p.updatedAt || p.createdAt)].push(p);
      });
      Object.keys(groups).forEach(function(key) {
        if (!groups[key].length) return;
        listEl.appendChild(el("div", { class: "ss-group-title", text: key }));
        groups[key].forEach(function(p) {
          const isOn = ctx.state.project && ctx.state.project.id === p.id;
          const row2 = el("div", { class: "ss-proj" + (isOn ? " ss-proj--on" : "") }, [
            el("button", { class: "ss-proj__main" }, [
              el("div", { class: "ss-proj__title", text: p.title }),
              el("div", { class: "ss-proj__meta", text: (p.written || 0) + " 个分支 · " + fmtAgo(p.updatedAt || p.createdAt) })
            ]),
            el("button", {
              class: "ss-icon-btn",
              title: "更多操作",
              onclick: function(ev) {
                ev.stopPropagation();
                projectMenu(p);
              }
            }, [svgIcon("dots", 18)])
          ]);
          row2.addEventListener("click", function() {
            ctx.switchProject(p.id).then(function() {
              closeDrawer();
            });
          });
          listEl.appendChild(row2);
        });
      });
      drawer.appendChild(head);
      drawer.appendChild(listEl);
      function projectMenu(p) {
        openSheetMenu([
          {
            label: "重命名",
            onClick: function() {
              askText("重命名对话", p.title).then(function(name) {
                if (name === null) return;
                if (ctx.state.project && ctx.state.project.id === p.id) {
                  ctx.renameProject(name).then(function() {
                    render();
                  });
                } else {
                  ctx.switchProject(p.id).then(function() {
                    return ctx.renameProject(name);
                  }).then(function() {
                    render();
                  });
                }
              });
            }
          },
          {
            label: "复制一份",
            onClick: function() {
              ctx.copyProject(p.id);
            }
          },
          {
            label: "删除",
            danger: true,
            onClick: function() {
              ctx.confirm({ title: "删除「" + p.title + "」？", message: "对话与它下面所有分支 CSS 都会删除。" }).then(function(ok) {
                if (ok) ctx.deleteProject(p.id);
              });
            }
          }
        ]);
      }
    }
    function openSheet(title, content) {
      clear(sheet);
      sheet.appendChild(el("div", { class: "ss-sheet__head" }, [
        el("div", { class: "ss-sheet__title", text: title }),
        el("button", { class: "ss-icon-btn", onclick: closeSheet }, [svgIcon("close", 18)])
      ]));
      sheet.appendChild(content);
      mask.classList.add("ss-mask--in");
      sheet.classList.add("ss-sheet--in");
    }
    function closeSheet() {
      sheetMode = "";
      sheet.classList.remove("ss-sheet--in");
      if (!drawerOpen && !screenName) mask.classList.remove("ss-mask--in");
    }
    function openBranches(scope) {
      sheetMode = "branches";
      sheetScope = scope || (ctx.state.project ? ctx.state.project.activeBranch.split(".")[0] : "online");
      renderSheet();
    }
    function renderSheet() {
      if (sheetMode === "branches") {
        openSheet("选择部位", renderBranchSheet(ctx, actions, sheetScope));
      }
    }
    function openMenu() {
      sheetMode = "menu";
      openSheetMenu([
        { label: "素材库", onClick: function() {
          closeSheet();
          openScreen("assets");
        } },
        { label: "导出 CSS", onClick: function() {
          closeSheet();
          ctx.exportCss();
        } },
        { label: "设置", onClick: function() {
          closeSheet();
          openScreen("settings");
        } },
        {
          label: ctx.liveApplied() ? "撤销临时应用" : "临时应用到宿主",
          onClick: function() {
            closeSheet();
            if (ctx.liveApplied()) {
              ctx.clearLive();
              toast("已移除临时样式");
              return;
            }
            ctx.confirm({
              title: "临时应用到宿主？",
              message: "立刻改动 Roche 真实页面外观，仅本次运行有效。"
            }).then(function(ok) {
              if (ok) {
                ctx.applyLive();
                toast("已临时应用");
              }
            });
          }
        },
        { label: "关闭插件", onClick: function() {
          closeSheet();
          ctx.roche.ui.closeApp();
        } }
      ]);
    }
    function openSheetMenu(items) {
      sheetMode = "menu";
      const box = el("div", { class: "ss-sheet__body" });
      items.forEach(function(item) {
        const row2 = el("button", {
          class: "ss-list__row",
          style: { padding: "14px 16px", borderTop: "1px solid var(--ss-line)" },
          text: item.label
        });
        if (item.danger) row2.style.color = "var(--ss-danger)";
        row2.addEventListener("click", item.onClick);
        box.appendChild(row2);
      });
      openSheet("操作", box);
    }
    function openScreen(name) {
      screenName = name;
      screen.appendChild(el("div", { class: "ss-pv__bar" }, [
        el("button", { class: "ss-icon-btn", onclick: closeScreen }, [svgIcon("back", 18)]),
        el("div", { class: "ss-pv__title", text: name === "assets" ? "素材库" : name === "settings" ? "设置" : "预览" }),
        el("span", { style: { width: "36px" } })
      ]));
      renderScreen();
      mask.classList.add("ss-mask--in");
      requestAnimationFrame(function() {
        screen.classList.add("ss-screen--in");
      });
    }
    function renderScreen() {
      if (!screenName) return;
      while (screen.children.length > 1) screen.removeChild(screen.lastChild);
      let content = null;
      if (screenName === "assets") content = renderAssets(ctx, actions);
      else if (screenName === "settings") content = renderSettings(ctx, actions);
      else if (screenName === "preview") content = renderPreview(ctx, actions, previewExtra, previewLabel);
      if (content) screen.appendChild(content);
    }
    function closeScreen() {
      screenName = "";
      screen.classList.remove("ss-screen--in");
      setTimeout(function() {
        clear(screen);
      }, 200);
      if (!drawerOpen && !sheetMode) mask.classList.remove("ss-mask--in");
    }
    function openPreview(extraCss, label) {
      previewExtra = extraCss || "";
      previewLabel = label || "";
      openScreen("preview");
    }
    mask.addEventListener("click", function() {
      if (sheetMode) closeSheet();
      if (drawerOpen) closeDrawer();
    });
    titleEl.addEventListener("click", function() {
      if (!ctx.state.project) return;
      askText("重命名对话", ctx.state.project.title).then(function(name) {
        if (name === null) return;
        ctx.renameProject(name);
      });
    });
    const ta = composer.node.querySelector(".ss-textarea");
    if (ta) {
      ta.addEventListener("keydown", function(ev) {
        if (ev.key === "Enter" && !ev.shiftKey && !ev.isComposing) {
          ev.preventDefault();
          const sendBtn = composer.node.querySelector(".ss-send");
          if (sendBtn) sendBtn.click();
        }
      });
    }
    Object.assign(actions, {
      openPreview,
      closePreview: closeScreen,
      closeScreen,
      refreshScreen: renderScreen,
      openBranches,
      closeSheet,
      refreshSheet: renderSheet,
      setScope: function(scope) {
        sheetScope = scope;
        renderSheet();
      },
      fillInput: function(text) {
        composer.setText(text);
      },
      openAssets: function() {
        openScreen("assets");
      },
      openSettings: function() {
        openScreen("settings");
      },
      exportCss: function() {
        ctx.exportCss();
        renderScreen();
      },
      lightbox
    });
    function renderBody() {
      const atBottom = body.scrollHeight - body.scrollTop - body.clientHeight < 60;
      const prevTop = body.scrollTop;
      clear(body);
      body.appendChild(renderThread(ctx, actions));
      if (atBottom) body.scrollTop = body.scrollHeight;
      else body.scrollTop = prevTop;
    }
    function render() {
      if (ctx.state.loading) {
        clear(body);
        body.appendChild(renderThread(ctx, actions));
        return;
      }
      const project = ctx.state.project;
      titleEl.textContent = project ? project.title : "美化工作室";
      renderBody();
      composer.sync();
      if (drawerOpen) renderDrawer();
      if (sheetMode === "branches") renderSheet();
      if (screenName) renderScreen();
    }
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
    app = await createApp({ container, roche, version: "0.1.1" });
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
    version: "0.1.1",
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
