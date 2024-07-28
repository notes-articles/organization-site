import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/organization-site/', // 这里的 'organization-site' 应该是你的仓库名称
});
