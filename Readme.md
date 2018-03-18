### source map
오류 및 경고를 쉽게 추적할 수 있도록 JavaScript는 컴파일된 코드를 원래 소스 코드로 다시 매핑하는 소스 맵을 제공합니다. 오류가 b.js에서 비롯된 경우 소스 맵에서 정확히 알 수 있습니다.

![](/screen/sourcemap.png)


// Avoid inline-*** and eval-*** use in production as they can increase bundle size and reduce the overall performance.