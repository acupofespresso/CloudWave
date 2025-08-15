graph TB
    %% 输入数据层
    subgraph "输入数据层"
        A1["🎤 音频输入<br/>micLevel, avgMag[4]<br/>cumulativeAudio, silenceAmount"]
        A2["⏱️ 时间参数<br/>time, duration<br/>各状态timestamp"]
        A3["👆 用户交互<br/>touchDown/Up<br/>状态切换"]
        A4["🎨 视觉配置<br/>bloopColor, isDarkMode<br/>isAdvancedBloop"]
    end

    %% WebGL渲染管线
    subgraph "WebGL渲染管线"
        B1["📐 顶点着色器<br/>全屏三角形<br/>UV坐标生成"]
        B2["🎨 片段着色器<br/>SDF + 噪声计算<br/>颜色混合"]
    end

    %% SDF系统
    subgraph "SDF系统 (有向距离场)"
        C1["⚪ 基础形状<br/>sdRoundedBox<br/>sdSegment, sdArc"]
        C2["🔧 布尔运算<br/>opSmoothUnion<br/>opSmoothSubtraction"]
        C3["📊 ColoredSDF<br/>distance + color<br/>多状态混合"]
    end

    %% 噪声生成系统
    subgraph "噪声生成系统"
        D1["🌊 3D Perlin噪声<br/>cnoise(vec3)"]
        D2["📈 2D简化噪声<br/>noise(vec2)"]
        D3["🌀 分形布朗运动<br/>fbm多octave合成"]
        D4["🖼️ 纹理采样<br/>uTextureNoise"]
    end

    %% 状态管理系统
    subgraph "状态管理系统"
        E1["😴 空闲状态<br/>弹簧动画<br/>呼吸效果"]
        E2["👂 监听状态<br/>音频响应半径<br/>触摸弧形"]
        E3["🤔 思考状态<br/>环形粒子动画<br/>平滑过渡"]
        E4["💬 说话状态<br/>频谱条显示<br/>静默弹跳"]
        E5["🛑 暂停状态<br/>边框圆环<br/>透明度动画"]
    end

    %% 动画系统
    subgraph "动画系统"
        F1["⚡ 弹簧函数<br/>spring, fixedSpring<br/>物理模拟"]
        F2["📊 插值函数<br/>silkySmooth<br/>scaled, mix"]
        F3["⏱️ 时间轴管理<br/>duration计算<br/>状态过渡"]
    end

    %% 音频可视化
    subgraph "音频可视化引擎"
        G1["🎵 实时频谱<br/>4频段分析<br/>avgMag处理"]
        G2["🌊 流体效果<br/>噪声时间调制<br/>sinOffsets计算"]
        G3["📏 尺寸调制<br/>半径动态变化<br/>位移偏移"]
        G4["🎨 颜色分层<br/>bloopColorLow/Mid/High<br/>blendLinearBurn"]
    end

    %% 最终渲染
    H1["🖥️ 最终输出<br/>RGBA帧缓冲<br/>实时60fps渲染"]

    %% 数据流连接
    A1 --> G1
    A1 --> G2
    A1 --> G3
    A2 --> F3
    A2 --> D1
    A2 --> D2
    A3 --> E2
    A4 --> G4

    B1 --> B2
    B2 --> H1

    C1 --> C3
    C2 --> C3
    C3 --> B2

    D1 --> G2
    D2 --> D3
    D3 --> G2
    D4 --> G2

    E1 --> C3
    E2 --> C3
    E3 --> C3
    E4 --> C3
    E5 --> C3

    F1 --> E1
    F1 --> E2
    F1 --> E3
    F2 --> F3
    F3 --> E1
    F3 --> E2
    F3 --> E3
    F3 --> E4

    G1 --> E4
    G2 --> B2
    G3 --> E2
    G4 --> B2

    %% 关键技术标注
    style A1 fill:#ffeb3b
    style B2 fill:#2196f3
    style C3 fill:#4caf50
    style D3 fill:#ff9800
    style G2 fill:#9c27b0