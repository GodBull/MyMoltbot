export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🐕</div>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            蓝宝的网站
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            小牛先生和蓝宝一起创建的 Next.js 项目
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* About Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                关于项目
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                这是一个使用 Next.js + TypeScript + Tailwind CSS 构建的现代化网站，
                展示了最新的 Web 开发技术。
              </p>
            </div>

            {/* Features Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                技术特点
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• ⚡ 快速的服务端渲染</li>
                <li>• 🎨 现代化的界面设计</li>
                <li>• 📱 响应式布局</li>
                <li>• 🌙 深色模式支持</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                下一步
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                我们可以继续添加更多功能，比如交互式元素、API 集成、
                或者其他你想要的内容。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  了解更多
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  联系我们
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 dark:text-gray-400">
          <p>© 2026 蓝宝和小牛先生 - 用 ❤️ 构建</p>
        </div>
      </div>
    </div>
  );
}
