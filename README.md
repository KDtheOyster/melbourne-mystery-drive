# Melbourne Mystery Drive

一个“今晚不知道去哪就按一下”的随机自驾挑战生成器。

## 功能

- 随机目的地 / 驾驶时间 / 预算 / 氛围
- 随机主任务、隐藏规则、车内任务、返程条件
- 深夜 / 周末 / 雨天 / 短途模式
- 本地历史记录与收藏
- 一键复制挑战
- PWA / Service Worker，支持离线打开
- 纯静态前端，无后端、无账号、无追踪
- 自带 GitHub Pages 自动部署工作流

## 本地运行

直接用浏览器打开 `index.html` 即可。若要测试 Service Worker，建议启动一个本地 HTTP server：

```bash
python -m http.server 8000
```

然后打开 `http://localhost:8000`。

## GitHub Pages

仓库推送到 GitHub 后，工作流会自动构建 Pages。第一次使用时，在仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**。

## 注意

内置目的地、预计驾驶时间和路线描述只是随机灵感，不是实时导航数据。实际出发前请自行确认道路、天气、停车和营业状态。