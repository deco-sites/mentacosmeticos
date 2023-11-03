import { Picture, Source } from 'apps/website/components/Picture.tsx';
import type { ImageWidget } from 'apps/admin/widgets.ts';

export interface Props {
  text?: string;
  title?: string;
  link?: {
    text: string;
    href: string;
  };
}

const DEFAULT_PROPS: Props = {
  link: {
    href: '#',
    text: 'Ver agora',
  },
};

export default function CupomBanner(props: Props) {
  const { link, text, title } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="container">
      {title} - {text}
    </div>
  );
}
