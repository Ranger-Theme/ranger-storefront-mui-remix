import { css, Global } from '@emotion/react'

const GlobalStyled = () => {
  const styles = css`
    html {
      line-height: unset;
    }

    ul,
    ol {
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
      }
    }

    dl,
    dd {
      margin: 0;
    }

    p {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    img {
      max-width: 100%;
    }

    svg {
      display: inline-block;
      vertical-align: middle;
    }
  `

  return <Global styles={styles} />
}

export default GlobalStyled
