import { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import {
  documentGetInitialProps,
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from '@mui/material-nextjs/v15-pagesRouter'

export default function Document(props: DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  return await documentGetInitialProps(ctx)
}
