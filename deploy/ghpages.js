// 將它儲存為：deploy/ghpages.mjs
// 更多資訊可參考：https://github.com/tschaub/gh-pages
import path from 'path';
import { fileURLToPath } from 'url';
import ghpages from 'gh-pages';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/covncovy/test.git' // 專案的 GitHub 存儲庫
};

const callback = err => {
    if (err) console.error(err);
    else console.log('發佈成功');
};

/**
 * 這個任務會將內容推送到配置的存儲庫的 `gh-pages` 分支。
 */
ghpages.publish(path.resolve(__dirname, '../dist'), options, callback);
