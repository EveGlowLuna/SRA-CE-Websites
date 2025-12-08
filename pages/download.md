---
title: 下载
layout: page
---

<div class="download-page">

# 下载 StarRailAssistant

## 社区版 (Community Edition)

<p class="section-desc">社区版是基于 Tauri + Vue 3 重构的现代化版本，更快、更轻、更现代。</p>

<div class="download-cards">
  <div class="download-card">
    <div class="card-icon">📦</div>
    <h4>GitHub Releases</h4>
    <p>最新版本发布在 GitHub，包含完整的更新日志和版本历史。</p>
    <a href="https://github.com/EveGlowLuna/StarRailAssistant-CommunityEdition/releases/latest" target="_blank" class="download-btn">前往 GitHub 下载</a>
  </div>
  <div class="download-card">
    <div class="card-icon">🚀</div>
    <h4>AList 镜像</h4>
    <p>国内用户推荐使用 AList 镜像，下载速度更快。</p>
    <a href="https://alist.starrailassistant.xyz/" target="_blank" class="download-btn">前往 AList 下载</a>
  </div>
</div>

<div class="section-divider"></div>

## 原版 (Original Version)

<p class="section-desc">如果你更喜欢原版的功能和界面，可以从以下地址下载。</p>

<div class="download-cards">
  <div class="download-card">
    <div class="card-icon">📦</div>
    <h4>GitHub Releases</h4>
    <p>原版的官方发布地址。</p>
    <a href="https://github.com/Shasnow/StarRailAssistant/releases/latest" target="_blank" class="download-btn">前往 GitHub 下载</a>
  </div>
  <div class="download-card">
    <div class="card-icon">🪞</div>
    <h4>mirror酱</h4>
    <p>如果你有mirror酱cdk，可以从此下载，下载速度更快。</p>
    <a href="https://mirrorchyan.com/zh/projects?rid=StarRailAssistant&source=sra-webside" target="_blank" class="download-btn">前往镜像站点下载</a>
  </div>
</div>

<div class="section-divider"></div>

## 版本对比

<div class="compare-table">
  <table>
    <thead>
      <tr>
        <th>特性</th>
        <th>社区版</th>
        <th>原版</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>前端技术栈</td>
        <td>Tauri + Vue 3</td>
        <td>C# Avalonia</td>
      </tr>
      <tr>
        <td>后端</td>
        <td colspan="2" style="text-align: center;">相同（Python）</td>
      </tr>
      <tr>
        <td>前端体积</td>
        <td>~10MB</td>
        <td>较大</td>
      </tr>
      <tr>
        <td>内存占用</td>
        <td>~50MB</td>
        <td>较高</td>
      </tr>
      <tr>
        <td>启动速度</td>
        <td>快</td>
        <td>中等</td>
      </tr>
      <tr>
        <td>功能完整性</td>
        <td>完全兼容</td>
        <td>原生功能</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-divider"></div>

## 系统要求

<div class="requirements">
  <div class="requirement-card">
    <h4>🖥️ 系统要求</h4>
    <ul>
      <li>Windows 10 或更高版本（更低版本未测试）</li>
      <li>至少 100MB 可用磁盘空间</li>
    </ul>
  </div>
</div>

<div class="section-divider"></div>

## 常见问题

<div class="faq-list">
  <div class="faq-item">
    <div class="faq-question">Q: 社区版和原版有什么区别？</div>
    <div class="faq-answer">A: 社区版是使用现代技术栈（Tauri + Vue 3）重构的版本，具有更小的体积、更低的内存占用和更快的启动速度。功能上完全兼容原版，无需重新学习。</div>
  </div>
  <div class="faq-item">
    <div class="faq-question">Q: 我应该选择哪个版本？</div>
    <div class="faq-answer">A: 如果你想要更轻量、更快速的体验，推荐选择社区版。如果你对原版的功能和界面更熟悉，可以继续使用原版。</div>
  </div>
  <div class="faq-item">
    <div class="faq-question">Q: 下载速度很慢怎么办？</div>
    <div class="faq-answer">A: 国内用户推荐使用 AList 镜像或镜像站点，下载速度会更快。</div>
  </div>
  <div class="faq-item">
    <div class="faq-question">Q: 如何更新到最新版本？</div>
    <div class="faq-answer">A: 直接下载最新版本的安装包，覆盖安装即可。也可以在主程序内更新。所有配置和数据会被保留。</div>
  </div>
</div>

</div>

<style>
.download-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.download-page h1 {
  font-size: 2.2em;
  margin-bottom: 32px;
  color: #fff;
}

.download-page h2 {
  font-size: 1.5em;
  margin: 32px 0 16px 0;
  color: #fff;
  border-bottom: 2px solid #646cff;
  padding-bottom: 8px;
  display: inline-block;
}

.section-desc {
  color: #aaa;
  margin-bottom: 20px;
  font-size: 15px;
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #3a3a3a, transparent);
  margin: 40px 0;
}

/* 下载卡片 */
.download-cards {
  display: flex;
  gap: 20px;
  margin: 24px 0;
  flex-wrap: wrap;
}

.download-card {
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  background: #1a1a1a;
}

.download-card .card-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.download-card h4 {
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #fff;
}

.download-card p {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #888;
  line-height: 1.6;
}

.download-btn {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(135deg, #646cff, #9d4edd);
  color: #fff !important;
  border-radius: 8px;
  text-decoration: none !important;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 108, 255, 0.4);
}

/* 对比表格 */
.compare-table {
  margin: 24px 0;
  overflow-x: auto;
}

.compare-table table {
  width: 100%;
  border-collapse: collapse;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
}

.compare-table th,
.compare-table td {
  padding: 14px 20px;
  text-align: left;
  border-bottom: 1px solid #2a2a2a;
}

.compare-table th {
  background: #252525;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}

.compare-table td {
  color: #ccc;
  font-size: 14px;
}

.compare-table tr:last-child td {
  border-bottom: none;
}

.compare-table tr:hover td {
  background: #222;
}

/* 系统要求 */
.requirements {
  display: flex;
  gap: 20px;
  margin: 24px 0;
  flex-wrap: wrap;
}

.requirement-card {
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  background: #1a1a1a;
}

.requirement-card h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #fff;
}

.requirement-card ul {
  margin: 0;
  padding-left: 20px;
}

.requirement-card li {
  color: #aaa;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 4px;
}

/* FAQ */
.faq-list {
  margin: 24px 0;
}

.faq-item {
  padding: 20px;
  margin-bottom: 12px;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  background: #1a1a1a;
}

.faq-question {
  font-weight: 600;
  color: #646cff;
  font-size: 15px;
  margin-bottom: 10px;
}

.faq-answer {
  color: #aaa;
  font-size: 14px;
  line-height: 1.7;
}

/* 响应式 */
@media (max-width: 640px) {
  .download-cards,
  .requirements {
    flex-direction: column;
  }
  .download-card,
  .requirement-card {
    min-width: auto;
  }
}
</style>
