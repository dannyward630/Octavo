import { test } from 'node:test'
import assert from 'node:assert/strict'
import { formatShortcutLabel, shortcutModifier } from '../src/shared/shortcuts'

test('macOS shortcut labels use the Command key without a plus sign', () => {
  assert.equal(shortcutModifier('darwin'), '⌘')
  assert.equal(formatShortcutLabel('Ctrl+B', 'darwin'), '⌘B')
  assert.equal(formatShortcutLabel('Settings (Ctrl+,)', 'darwin'), 'Settings (⌘,)')
  assert.equal(formatShortcutLabel('Ctrl+Enter to save', 'darwin'), '⌘Enter to save')
})

test('Windows and Linux shortcut labels keep Ctrl', () => {
  for (const platform of ['win32', 'linux']) {
    assert.equal(shortcutModifier(platform), 'Ctrl')
    assert.equal(formatShortcutLabel('Ctrl+B', platform), 'Ctrl+B')
  }
})

test('labels without Ctrl shortcuts are unchanged', () => {
  assert.equal(formatShortcutLabel('← →  PgUp PgDn  Space', 'darwin'), '← →  PgUp PgDn  Space')
})
