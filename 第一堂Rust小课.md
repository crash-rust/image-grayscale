## 环境准备

### 配置Rust运行环境

  - Rust环境准备

    ```shell
    curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
    ```

  - 安装C编译器

    ```shell
    xcode-select --install
    ```

  - 检查安装情况

    ```shell
    rustc -V
    cargo -V
    ```

### 配置VSCode编辑器支持Rust开发

- rust-analyzer插件： Rust语言的模块化前端编译器
- crates插件：方便crate的版本选择
- CodeLLDB插件：支持Rust debug
- Better TOML插件：完整的toml特性
- Error Lens插件：行内获取编译错误提示

### 理解rustc | rustup | cargo三者关系

| 编译器       | Rustc  | Node |
| ------------ | ------ | ---- |
| 包管理器     | Cargo  | npm  |
| 包版本管理器 | Rustup | nvm  |

说明：

- 编译

  ```shell
  rustc hello.rs
  # 对应
  node hello.js
  ```

- 包管理

  ```shell
  cargo add crate名
  # 对应
  npm install lib名
  ```

- 包版本管理

  ```shell
  rustup install cargo版本 （rustup具体来说属于rust工具链管理器，只是为了前端同学方便映射已有知识体系，这里就直接这么理解就可以）
  # 对应
  nvm install npm版本
  ```

