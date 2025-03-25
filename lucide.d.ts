// Type definitions for lucide-react
declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react'

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    color?: string
    size?: string | number
    className?: string
  }

  export type Icon = ComponentType<LucideProps>

  export const AlertCircle: Icon
  export const ArrowRight: Icon
  export const Check: Icon
  export const CheckCircle: Icon
  export const Download: Icon
  export const Edit: Icon
  export const Eraser: Icon
  export const Feather: Icon
  export const FileCode: Icon
  export const FileSearch: Icon
  export const FileText: Icon
  export const Globe: Icon
  export const Hash: Icon
  export const Image: Icon
  export const ImageIcon: Icon
  export const Loader2: Icon
  export const Lock: Icon
  export const Menu: Icon
  export const MessageCircle: Icon
  export const MessageSquare: Icon
  export const Mic: Icon
  export const Moon: Icon
  export const Music: Icon
  export const RefreshCw: Icon
  export const Search: Icon
  export const Share2: Icon
  export const Star: Icon
  export const Subtitles: Icon
  export const Sun: Icon
  export const Upload: Icon
  export const Video: Icon
  export const VoiceNetwork: Icon
  export const X: Icon
  // Add more icon exports as needed
} 