import Link from "next/link";
import { ArrowRight, BookOpen, Users, Newspaper, Sparkles, Shield, Trophy } from "lucide-react";

const modules = [
  {
    title: "卡塞尔学院",
    desc: "探索学院主页，了解校园全貌",
    href: "/college",
    icon: Shield,
  },
  {
    title: "诺玛 AI",
    desc: "与卡塞尔学院的智能管理系统对话",
    href: "/norma",
    icon: Sparkles,
  },
  {
    title: "学生论坛",
    desc: "与同学交流讨论，分享心得",
    href: "/forum",
    icon: Users,
  },
  {
    title: "校园新闻",
    desc: "获取学院最新动态资讯",
    href: "/news",
    icon: Newspaper,
  },
  {
    title: "言灵百科",
    desc: "查阅完整的言灵知识体系",
    href: "/wiki/spirits",
    icon: BookOpen,
  },
  {
    title: "任务大厅",
    desc: "领取任务，赚取经验与奖励",
    href: "/tasks",
    icon: Trophy,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero 区域 */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 py-24 md:py-36 text-center">
          <p className="text-sm md:text-base tracking-[0.3em] text-secondary uppercase mb-4">
            Cassel College
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-glow mb-6">
            卡塞尔学院
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            隐藏在世界阴影之下的秘密学府，龙裔与言灵者的摇篮。
            在这里，每一个平凡的灵魂都可能觉醒非凡的血脉。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium transition-transform hover:scale-105"
            >
              加入学院
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/college"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-accent"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* 功能模块网格 */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
            探索学院的每一个角落
          </h2>
          <p className="text-muted-foreground">
            从课程到论坛，从百科到任务，一切尽在掌握
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className="card-hover group rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground">{mod.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 卡塞尔学院 · 非官方粉丝站点</p>
        </div>
      </footer>
    </main>
  );
}
