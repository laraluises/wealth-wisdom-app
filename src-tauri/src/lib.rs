use tauri::Manager;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn start_manifesting() -> String {
    "✨ Manifestation started successfully!".to_string()
}

pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, start_manifesting])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
