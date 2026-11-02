/** Return the platform's visible modifier key. */
export function shortcutModifier(platform?: string): string {
  return platform === 'darwin' ? '⌘' : 'Ctrl'
}

/** Format a displayed Ctrl shortcut for the current platform. */
export function formatShortcutLabel(label: string, platform?: string): string {
  if (shortcutModifier(platform) !== '⌘') return label
  return label.replace(/\bCtrl\+/g, '⌘')
}
