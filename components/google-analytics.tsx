export default function () {
  return <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-58295126-2"></script>
    <script dangerouslySetInnerHTML={{__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-58295126-1');
    `}}></script>
  </>
}
