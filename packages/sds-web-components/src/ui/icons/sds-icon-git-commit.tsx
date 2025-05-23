import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-git-commit',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconGitCommit {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15789)">
          <path
            d="M0.699951 8.00001H4.66662M11.34 8.00001H15.3066M10.6666 8.00001C10.6666 9.47277 9.47271 10.6667 7.99995 10.6667C6.52719 10.6667 5.33328 9.47277 5.33328 8.00001C5.33328 6.52725 6.52719 5.33334 7.99995 5.33334C9.47271 5.33334 10.6666 6.52725 10.6666 8.00001Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15789">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
