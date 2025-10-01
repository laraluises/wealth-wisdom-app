import { invoke } from "@tauri-apps/api/core";

const btn = document.getElementById("start-btn") as HTMLButtonElement | null;
const statusEl = document.getElementById("status") as HTMLParagraphElement | null;

function setStatus(msg: string) {
  if (statusEl) statusEl.textContent = msg;
  else console.log(msg);
}

async function onStart() {
  try {
    setStatus("✨ Manifesting…");

    // Calls the Rust command we defined in src-tauri/src/lib.rs
    // pub fn start_manifesting() -> String { ... }
    const result = await invoke<string>("start_manifesting");

    setStatus(result || "✅ Done!");
  } catch (err) {
    console.error(err);
    setStatus("⚠️ Something went wrong. Check the console.");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (btn) btn.addEventListener("click", onStart);
});
