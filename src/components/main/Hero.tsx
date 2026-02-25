import HeroContent from '../sub/HeroContent'
import { FaDocker, FaAws, FaGithub, FaLinux } from 'react-icons/fa'
import { SiKubernetes, SiTerraform } from 'react-icons/si'

const floatingIcons = [
  { icon: FaDocker,     color: '#2496ED', size: 38, style: { top: '12%', left: '6%' },     animation: 'floatIcon1 8s ease-in-out infinite',  opacity: 0.18 },
  { icon: SiKubernetes, color: '#326CE5', size: 34, style: { top: '18%', right: '8%' },    animation: 'floatIcon2 10s ease-in-out infinite', opacity: 0.16 },
  { icon: FaAws,        color: '#FF9900', size: 42, style: { top: '55%', left: '4%' },     animation: 'floatIcon3 12s ease-in-out infinite', opacity: 0.18 },
  { icon: SiTerraform,  color: '#7B42BC', size: 32, style: { top: '70%', right: '6%' },    animation: 'floatIcon4 9s ease-in-out infinite',  opacity: 0.16 },
  { icon: FaGithub,     color: '#8b5cf6', size: 36, style: { top: '80%', left: '15%' },    animation: 'floatIcon5 11s ease-in-out infinite', opacity: 0.14 },
  { icon: FaLinux,      color: '#3b82f6', size: 36, style: { top: '30%', right: '4%' },    animation: 'floatIcon1 13s ease-in-out infinite', opacity: 0.15 },
  { icon: FaDocker,     color: '#6366f1', size: 26, style: { bottom: '15%', right: '18%' },animation: 'floatIcon3 7s ease-in-out infinite',  opacity: 0.10 },
  { icon: SiKubernetes, color: '#7c3aed', size: 28, style: { top: '42%', left: '2%' },     animation: 'floatIcon2 14s ease-in-out infinite', opacity: 0.12 },
]

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="absolute"
              style={{
                ...item.style,
                opacity: item.opacity,
                animation: item.animation,
                filter: `drop-shadow(0 0 8px ${item.color}40)`,
              }}
            >
              <Icon size={item.size} color={item.color} />
            </div>
          )
        })}
      </div>

      {/* Keyframes for floating icons */}
      <style>{`
        @keyframes floatIcon1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25%      { transform: translateY(-18px) rotate(3deg); }
          75%      { transform: translateY(10px) rotate(-2deg); }
        }
        @keyframes floatIcon2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%      { transform: translateY(-22px) rotate(-4deg); }
          66%      { transform: translateY(12px) rotate(3deg); }
        }
        @keyframes floatIcon3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-15px) scale(1.08); }
        }
        @keyframes floatIcon4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          40%      { transform: translateY(-20px) rotate(5deg); }
          80%      { transform: translateY(8px) rotate(-3deg); }
        }
        @keyframes floatIcon5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-25px) rotate(-6deg); }
        }
      `}</style>

      <HeroContent />
    </section>
  )
}

export default Hero