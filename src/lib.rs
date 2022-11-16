use base64::decode;
use image::{load_from_memory, ImageOutputFormat::Png};
use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn say(source: &str) {
    let source = decode(source).unwrap();

    log(&"decode image finish".into());

    let img = load_from_memory(&source).unwrap();

    log(&"load image to memory finish".into());

    img.grayscale();

    // let mut buffer = vec![];

    // img.write_to(&mut buffer, Png).unwrap();

    // log(&"gray scale image  finish".into());
}

// 需要对前端传过来的source字符串切片进行转换处理
