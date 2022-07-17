# 1.0.0 (2022-07-17)

### Bug Fixes

- :bug: add missing configuration and fix wrong one ([c2b4267](https://github.com/nitro-system/nitro/commit/c2b4267be861247bbcbfc238fb1f9c58f241ee2c))
- :rotating_light: fix tests warnings and sonar lint warnings ([fa6744d](https://github.com/nitro-system/nitro/commit/fa6744d13d99b5f4f32c373c49dfe19adaba5eaa))
- **b-api:** :truck: rename end point from `/home/env` to `/home` ([4ed9ec5](https://github.com/nitro-system/nitro/commit/4ed9ec5c246e7cbbda736a082a9b5ec8332d8847))
- **frontend:** :lipstick: fix dark mode background and text colors ([585e560](https://github.com/nitro-system/nitro/commit/585e560a231891ce61ccd12bcd4d2eba729214d3))
- **github:** :bug: fix github workflow action name ([66c111b](https://github.com/nitro-system/nitro/commit/66c111bf5bc569bb04427887c345b04466c563d8))
- **semantic-release:** :bug: set branch name in semantic release config file to `staging` ([7b56ca5](https://github.com/nitro-system/nitro/commit/7b56ca511bcd22c7ea505e5212e92493584c0aaf))
- **sentry:** :wrench: run sentry only in production mode ([8ff0a59](https://github.com/nitro-system/nitro/commit/8ff0a59b01a5d024a8f4d4350fd17235eec806be))

### Features

- :wrench: add staging environment to all apps ([631ab9d](https://github.com/nitro-system/nitro/commit/631ab9da0fa370f32780f334481b544476212350))
- **b-api:** :sparkles: add `home` and `services` module with crud methods ([e055e84](https://github.com/nitro-system/nitro/commit/e055e84e09c47c5a5897b4ec22c569a1869651f7))
- **frontend-libs-home:** :sparkles: add new UI frontend home library ([1ad6916](https://github.com/nitro-system/nitro/commit/1ad6916e7e95878f1965adcba3e8b87fe466a466))
- **frontend:** :dizzy: add angular animations to `home` and `services` components ([95a4d92](https://github.com/nitro-system/nitro/commit/95a4d9233a80efe5fef4cf10bed12860b2c66858))
- **frontend:** :wrench: add `apiUrlInterceptor` to append backend url from env to api url ([2fa6d7d](https://github.com/nitro-system/nitro/commit/2fa6d7dd3a15be8d25c9e8567fe4a362ffc3cb1a))
- **libs:** :sparkles: create shared `dtos`, `enums`, `interfaces` and `utils` libraries ([b73da4e](https://github.com/nitro-system/nitro/commit/b73da4e3f571aed3e720200b387e94fa683f9f3e))
- **m-admin:** :rocket: add ios `m-admin` application and sync it with production ([b440e0e](https://github.com/nitro-system/nitro/commit/b440e0e2370f6c28d3a23f2a657c4902ca454275))
- **m-admin:** :sparkles: add `home` and `services` module with crud methods ([cc473f3](https://github.com/nitro-system/nitro/commit/cc473f30e33e3865281dbaa1a050cdd5dd135f9c))
- **m-admin:** :sparkles: add android platform `m-admin` application ([20884d6](https://github.com/nitro-system/nitro/commit/20884d6aeea0353a4739cc6e74917cc64bb0a980))
- **m-admin:** :sparkles: add ionic/angular to m-admin project ([0d2712f](https://github.com/nitro-system/nitro/commit/0d2712f22824a7bd8c836457970cc921970fa881))
- **sentry:** :sparkles: complete `sentry` setup for all apps ([1d65fc4](https://github.com/nitro-system/nitro/commit/1d65fc4465edb6684dc5a0e98aee19a65d22b526))
- **sentry:** :sparkles: work on adding sentry to the apps and add global environment ([1299494](https://github.com/nitro-system/nitro/commit/129949448683ecf13d934bdaeeb73f7b85c41ab4))
- **tailwind:** :sparkles: add tailwind to `w-admin` application & setup it ([80e1531](https://github.com/nitro-system/nitro/commit/80e153149e3e168f85c75a0405bceb98ff73fd41))
- **w-admin:** :sparkles: add `home` and `services` module with crud methods ([88743c6](https://github.com/nitro-system/nitro/commit/88743c6d5347cad14e8f9cb93685d1dfb51bb47b))

### Performance Improvements

- **b-api:** :zap: improve backend generator uuid by using `randomUUID` from `node:crypto` ([a35e5c6](https://github.com/nitro-system/nitro/commit/a35e5c6046fbe54d916cdfe5abcd7617fba2d717))
- **frontend:** :zap: improve apps preformance by setting `ChangeDetector` to `OnPush` Strategy ([d2454bf](https://github.com/nitro-system/nitro/commit/d2454bf12d029389e665c398afe107018dc7d517))
- **lint:** :zap: improve eslint rules and extends ([3c039a7](https://github.com/nitro-system/nitro/commit/3c039a7bf37d72958f4f2172294f30d332e7f70d))
