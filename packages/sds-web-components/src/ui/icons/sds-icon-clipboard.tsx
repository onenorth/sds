import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-clipboard',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconClipboard {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M10.6666 2.66671H12C12.3536 2.66671 12.6927 2.80718 12.9428 3.05723C13.1928 3.30728 13.3333 3.64642 13.3333 4.00004V13.3334C13.3333 13.687 13.1928 14.0261 12.9428 14.2762C12.6927 14.5262 12.3536 14.6667 12 14.6667H3.99996C3.64634 14.6667 3.3072 14.5262 3.05715 14.2762C2.8071 14.0261 2.66663 13.687 2.66663 13.3334V4.00004C2.66663 3.64642 2.8071 3.30728 3.05715 3.05723C3.3072 2.80718 3.64634 2.66671 3.99996 2.66671H5.33329M5.99996 1.33337H9.99996C10.3681 1.33337 10.6666 1.63185 10.6666 2.00004V3.33337C10.6666 3.70156 10.3681 4.00004 9.99996 4.00004H5.99996C5.63177 4.00004 5.33329 3.70156 5.33329 3.33337V2.00004C5.33329 1.63185 5.63177 1.33337 5.99996 1.33337Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
