use base64::{decode, encode};
use image::{load_from_memory, ImageOutputFormat::Png};
use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    // 获取source64,转换成二进制文件
    // log(&source.into());

    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"decoded".into());
    // 将二进制文件从内存中读取变成一个动态图像
    let img = load_from_memory(&base64_to_vector).unwrap();

    //
    let img = img.grayscale();

    let mut buffer = vec![];

    img.write_to(&mut buffer, Png).unwrap();

    let data_url = format!("data:image/png;base64,{}", encode(buffer));

    data_url
}
