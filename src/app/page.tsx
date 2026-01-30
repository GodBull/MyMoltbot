export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🐕</div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                蓝宝
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                首页
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                关于
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                项目
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                联系
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl mb-6 animate-float">🐕</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-glow">
              蓝宝的数字空间
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              小牛先生和蓝宝一起打造的现代化数字体验，
              融合创新技术与优雅设计的完美作品
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center space-x-2">
                <span>探索更多</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 transform hover:-translate-y-1 transition-all duration-300">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              核心特色
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              采用最新技术栈，为你带来卓越的数字体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">极速性能</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                基于 Next.js 的服务端渲染技术，带来闪电般的加载速度和流畅的用户体验
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">优雅设计</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                现代化的 UI 设计语言，精美的动画效果，每一个细节都经过精心雕琢
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">完美适配</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                响应式设计理念，无论在桌面端还是移动端，都能获得完美的浏览体验
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-white">
            技术栈
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'React'].map((tech) => (
              <div key={tech} className="px-6 py-3 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-600/50">
                <span className="font-semibold text-gray-800 dark:text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl">🐕</div>
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              蓝宝
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            由小牛先生和蓝宝用心打造
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2026 蓝宝的数字空间. 保留所有权利.
          </p>
        </div>
      </footer>
    </div>
  );
}
