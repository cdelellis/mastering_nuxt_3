import { a as __nuxt_component_0$1, c as __nuxt_component_1 } from '../server.mjs';
import { u as useCourse } from './useCourse.af3ef2a6.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'defu';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';

const _sfc_main = {
  __name: "course",
  __ssrInlineRender: true,
  setup(__props) {
    const { chapters } = useCourse();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center" }, _attrs))}><div class="prose mb-12"><h1><span class="font-medium"> Course: <span class="font-bold">Mastering Nuxt 3</span></span></h1></div><div class="flex flex-row justify-center flex-grow"><div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"><h3>Chapters</h3><!--[-->`);
      ssrRenderList(unref(chapters), (chapter) => {
        _push(`<div class="space-y-1 mb-4 flex flex-col"><h4>${ssrInterpolate(chapter.title)}</h4><!--[-->`);
        ssrRenderList(chapter.lessons, (lesson, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: lesson.slug,
            class: ["flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4", {
              "text-blue-500": lesson.path === _ctx.$route.fullPath,
              "text-gray-600": lesson.path !== _ctx.$route.fullPath
            }],
            to: lesson.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-gray-500"${_scopeId}>${ssrInterpolate(index + 1)}.</span><span${_scopeId}>${ssrInterpolate(lesson.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-gray-500" }, toDisplayString(index + 1) + ".", 1),
                  createVNode("span", null, toDisplayString(lesson.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="prose p-12 bg-white rounded-md w-[65ch]">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=course.48dd024e.mjs.map
