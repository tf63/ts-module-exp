## TypeScript moduleのおためし

- ビルド済みパッケージのインストール -> `pkg/sample1`
- ビルドしてないパッケージのインストール -> `pkg/sample2`

### パッケージ
**パッケージ**
- `package.json`があるディレクトリがパッケージルート

**CJS or ESM**


### 設定

- `package.json`
```

    "name": "パッケージ名",
    "type": "module", // or "commonjs"
    "version": "1.0.0",
    "description": "",
    "devDependencies": {
        "ts-node": "^10.9.1",
        "typescript": "^5.1.6"
    },
    "scripts": {
        "build": "tsc", // typescriptのビルド
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "main": "dist/index.js", // エントリポイント
    "types": "dist/index.d.ts",
```

- `tsconfig.json`
```
    {
        "include": ["src/**/*.ts"], // ビルド対象
        "exclude": ["node_modules"], // ビルド無視
        "compilerOptions": {
            "module": "ESNext", // or CommonJS
            "target": "ESNext", // or ES6にしとく
            "declaration": true,
            "sourceMap": true,
            "strict": true,
            "outDir": "./dist", // ビルド先
            "moduleResolution": "node",
            "esModuleInterop": true
        },
        "ts-node": {
            "esm": true,
            "experimentalSpecifierResolution": "node"
        }
    }
```

### build
- TypeScriptのビルド
```
    tsc <path/to/local_pkg>
```


### ローカルパッケージのインストール
```
    npm install <path/to/local_pkg>
```

