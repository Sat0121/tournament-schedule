# Tournament Schedule

このプロジェクトは、ポーカートーナメントのスケジュールを表示する静的Webアプリケーションです。

## 機能

- トーナメントスケジュールの表示
- 詳細情報の展開表示
- レスポンシブデザイン
- クロスブラウザ対応
- アクセシビリティ対応

## 技術スタック

- React 18
- Tailwind CSS
- Lucide Icons

## プロジェクト構造

```
tournament-schedule/
├── index.html          # メインのHTMLファイル
├── styles/
│   └── tailwind.css    # Tailwind CSSカスタマイズ
├── scripts/
│   └── app.js          # メインのJavaScriptファイル
└── README.md           # このファイル
```

## セットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/[ユーザー名]/tournament-schedule.git
cd tournament-schedule
```

2. 開発サーバーの起動:
任意のHTTPサーバーを使用してファイルを提供できます。例：
```bash
python -m http.server 8000
```

3. ブラウザでアクセス:
```
http://localhost:8000
```

## GitHub Pagesへのデプロイ

1. リポジトリの設定:
   - GitHubリポジトリのSettings > Pagesに移動
   - Source を `main` ブランチに設定
   - フォルダを `/ (root)` に設定

2. デプロイ:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## ブラウザサポート

- 最新のChrome, Firefox, Safari, Edge
- モバイルブラウザ（iOS Safari, Android Chrome）
- IE11は非対応

## カスタマイズ

### スタイルのカスタマイズ

`styles/tailwind.css` でスタイルをカスタマイズできます：

```css
@layer components {
    .tournament-header {
        @apply bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4;
    }
}
```

### データの更新

`scripts/app.js` の `events` 配列を編集してトーナメント情報を更新できます。

## ライセンス

MIT

## 貢献

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成