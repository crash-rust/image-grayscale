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

### 包下载慢怎么办？

- 由于某些神秘力量，crate（理解成rust当中的库就好，不需要理解成板条箱啥的，就是库lib）下载的很慢，我们需要想办法加速下载源。这里提供两种方法

  - 设置国内替换源(`~/.cargo/config`)

    rust关于cargo部分的配置文件跟所有类Unix系统的项目一样的，都是利用了`.XX`的名字形式放在用

    ```shell
    [source.crates-io]
    registry = "https://github.com/rust-lang/crates.io-index"
    replace-with = 'tuna'
    [source.ustc]
    registry = "git://mirrors.ustc.edu.cn/crates.io-index"
    [source.tuna]
    registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"
    ```

  - 设置shell终端代理(跨墙软件需要自行购买准备)

    ```shell
    # 配置shell命令行代理别名
    ## shell-http代理
    alias open-shell-proxy='export http_proxy=http://127.0.0.1:7890'
    alias close-shell-proxy='unset http_proxy'
    ## shell-https代理
    alias open-shell-sslproxy='export https_proxy=http://127.0.0.1:7890'
    alias close-shell-sslproxy='unset https_proxy'
    ```

    

  