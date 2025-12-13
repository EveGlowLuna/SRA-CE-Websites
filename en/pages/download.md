---
title: Download
layout: page
---

<div class="download-page">

# Download StarRailAssistant

## Community Edition

<p class="section-desc">The Community Edition is a modernized version rebuilt with Tauri + Vue 3, faster, lighter, and more modern.</p>

<div class="download-cards">
  <div class="download-card">
    <div class="card-icon">📦</div>
    <h4>GitHub Releases</h4>
    <p>Latest version released on GitHub, including complete update logs and version history.</p>
    <a href="https://github.com/EveGlowLuna/StarRailAssistant-CommunityEdition/releases/latest" target="_blank" class="download-btn">Go to GitHub Download</a>
  </div>
  <div class="download-card">
    <div class="card-icon">🚀</div>
    <h4>AList Mirror</h4>
    <p>Recommended for domestic users, faster download speed with AList mirror.</p>
    <a href="https://alist.starrailassistant.xyz/" target="_blank" class="download-btn">Go to AList Download</a>
  </div>
</div>

<div class="section-divider"></div>

## Original Version

<p class="section-desc">If you prefer the original version's features and interface, you can download from the following addresses.</p>

<div class="download-cards">
  <div class="download-card">
    <div class="card-icon">📦</div>
    <h4>GitHub Releases</h4>
    <p>Official release address for the original version.</p>
    <a href="https://github.com/Shasnow/StarRailAssistant/releases/latest" target="_blank" class="download-btn">Go to GitHub Download</a>
  </div>
  <div class="download-card">
    <div class="card-icon">🪞</div>
    <h4>mirrorchyan</h4>
    <p>If you have a mirrorchyan CDK, you can download from here for faster speed.</p>
    <a href="https://mirrorchyan.com/zh/projects?rid=StarRailAssistant&source=sra-webside" target="_blank" class="download-btn">Go to Mirror Site Download</a>
  </div>
</div>

<div class="section-divider"></div>

## Version Comparison

<div class="compare-table">
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Community Edition</th>
        <th>Original Version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Frontend Technology</td>
        <td>Tauri + Vue 3</td>
        <td>C# Avalonia</td>
      </tr>
      <tr>
        <td>Backend</td>
        <td colspan="2" style="text-align: center;">Same (Python)</td>
      </tr>
      <tr>
        <td>Frontend Size</td>
        <td>~10MB</td>
        <td>Larger</td>
      </tr>
      <tr>
        <td>Memory Usage</td>
        <td>~50MB</td>
        <td>Higher</td>
      </tr>
      <tr>
        <td>Startup Speed</td>
        <td>Fast</td>
        <td>Medium</td>
      </tr>
      <tr>
        <td>Feature Completeness</td>
        <td>Fully Compatible</td>
        <td>Native Features</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-divider"></div>

## System Requirements

<div class="requirements">
  <div class="requirement-card">
    <h4>🖥️ System Requirements</h4>
    <ul>
      <li>Windows 10 or higher (lower versions untested)</li>
      <li>At least 100MB available disk space</li>
    </ul>
  </div>
</div>

<div class="section-divider"></div>

## Frequently Asked Questions

<div class="faq-list">
  <div class="faq-item">
    <div class="faq-question">Q: What's the difference between Community Edition and Original Version?</div>
    <div class="faq-answer">A: The Community Edition is a version rebuilt using modern technology stack (Tauri + Vue 3), featuring smaller size, lower memory usage, and faster startup speed. It's fully compatible with the original version functionally, requiring no relearning.</div>
  </div>
  <div class="faq-item">
    <div class="faq-question">Q: Which version should I choose?</div>
    <div class="faq-answer">A: If you want a lighter and faster experience, we recommend the Community Edition. If you're more familiar with the original version's features and interface, you can continue using the original version.</div>
  </div>
  <div class="faq-item">
    <div class="faq-question">Q: What if download speed is slow?</div>
    <div class="faq-answer">A: Domestic users are recommended to use AList mirror or mirror sites for faster download speeds.</div>
  </div>
  <div class="faq-item">
    <div class="faq-question">Q: How to update to the latest version?</div>
    <div class="faq-answer">A: Simply download the latest version installer and install over the existing installation. You can also update within the main program. All configurations and data will be preserved.</div>
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

/* Download Cards */
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

/* Comparison Table */
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

/* System Requirements */
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

/* Responsive */
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
