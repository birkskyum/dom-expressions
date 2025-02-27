import { setProp as _$setProp } from "r-custom";
import { effect as _$effect } from "r-custom";
import { createComponent as _$createComponent } from "r-custom";
import { memo as _$memo } from "r-custom";
import { insert as _$insert } from "r-custom";
import { createElement as _$createElement } from "r-custom";
const template1 = (() => {
  var _el$ = _$createElement("div");
  _$insert(_el$, simple);
  return _el$;
})();
const template2 = (() => {
  var _el$2 = _$createElement("div");
  _$insert(_el$2, () => state.dynamic);
  return _el$2;
})();
const template3 = (() => {
  var _el$3 = _$createElement("div");
  _$insert(_el$3, simple ? good : bad);
  return _el$3;
})();
const template4 = (() => {
  var _el$4 = _$createElement("div");
  _$insert(_el$4, () => (simple ? good() : bad));
  return _el$4;
})();
const template5 = (() => {
  var _el$5 = _$createElement("div");
  _$insert(
    _el$5,
    (() => {
      var _c$ = _$memo(() => !!state.dynamic);
      return () => (_c$() ? good() : bad);
    })()
  );
  return _el$5;
})();
const template6 = (() => {
  var _el$6 = _$createElement("div");
  _$insert(
    _el$6,
    (() => {
      var _c$2 = _$memo(() => !!state.dynamic);
      return () => _c$2() && good();
    })()
  );
  return _el$6;
})();
const template7 = (() => {
  var _el$7 = _$createElement("div");
  _$insert(
    _el$7,
    (() => {
      var _c$3 = _$memo(() => state.count > 5);
      return () =>
        _c$3()
          ? (() => {
              var _c$4 = _$memo(() => !!state.dynamic);
              return () => (_c$4() ? best : good());
            })()
          : bad;
    })()
  );
  return _el$7;
})();
const template8 = (() => {
  var _el$8 = _$createElement("div");
  _$insert(
    _el$8,
    (() => {
      var _c$5 = _$memo(() => !!(state.dynamic && state.something));
      return () => _c$5() && good();
    })()
  );
  return _el$8;
})();
const template9 = (() => {
  var _el$9 = _$createElement("div");
  _$insert(
    _el$9,
    (() => {
      var _c$6 = _$memo(() => !!state.dynamic);
      return () => (_c$6() && good()) || bad;
    })()
  );
  return _el$9;
})();
const template10 = (() => {
  var _el$10 = _$createElement("div");
  _$insert(_el$10, () => (state.a ? "a" : state.b ? "b" : state.c ? "c" : "fallback"));
  return _el$10;
})();
const template11 = (() => {
  var _el$11 = _$createElement("div");
  _$insert(
    _el$11,
    (() => {
      var _c$7 = _$memo(() => !!state.a);
      return () =>
        _c$7()
          ? a()
          : (() => {
              var _c$8 = _$memo(() => !!state.b);
              return () => (_c$8() ? b() : state.c ? "c" : "fallback");
            })();
    })()
  );
  return _el$11;
})();
const template12 = _$createComponent(Comp, {
  get render() {
    return _$memo(() => !!state.dynamic)() ? good() : bad;
  }
});

// no dynamic predicate
const template13 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ? good : bad;
  }
});
const template14 = _$createComponent(Comp, {
  get render() {
    return _$memo(() => !!state.dynamic)() && good();
  }
});

// no dynamic predicate
const template15 = _$createComponent(Comp, {
  get render() {
    return state.dynamic && good;
  }
});
const template16 = _$createComponent(Comp, {
  get render() {
    return state.dynamic || good();
  }
});
const template17 = _$createComponent(Comp, {
  get render() {
    return _$memo(() => !!state.dynamic)()
      ? _$createComponent(Comp, {})
      : _$createComponent(Comp, {});
  }
});
const template18 = _$createComponent(Comp, {
  get children() {
    return _$memo(() => !!state.dynamic)()
      ? _$createComponent(Comp, {})
      : _$createComponent(Comp, {});
  }
});
const template19 = (() => {
  var _el$12 = _$createElement("div");
  _$effect(_$p =>
    _$setProp(
      _el$12,
      "innerHTML",
      state.dynamic ? _$createComponent(Comp, {}) : _$createComponent(Comp, {}),
      _$p
    )
  );
  return _el$12;
})();
const template20 = (() => {
  var _el$13 = _$createElement("div");
  _$insert(
    _el$13,
    (() => {
      var _c$9 = _$memo(() => !!state.dynamic);
      return () => (_c$9() ? _$createComponent(Comp, {}) : _$createComponent(Comp, {}));
    })()
  );
  return _el$13;
})();
const template21 = _$createComponent(Comp, {
  get render() {
    return state?.dynamic ? "a" : "b";
  }
});
const template22 = _$createComponent(Comp, {
  get children() {
    return state?.dynamic ? "a" : "b";
  }
});
const template23 = (() => {
  var _el$14 = _$createElement("div");
  _$effect(_$p => _$setProp(_el$14, "innerHTML", state?.dynamic ? "a" : "b", _$p));
  return _el$14;
})();
const template24 = (() => {
  var _el$15 = _$createElement("div");
  _$insert(_el$15, () => (state?.dynamic ? "a" : "b"));
  return _el$15;
})();
const template25 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ?? _$createComponent(Comp, {});
  }
});
const template26 = _$createComponent(Comp, {
  get children() {
    return state.dynamic ?? _$createComponent(Comp, {});
  }
});
const template27 = (() => {
  var _el$16 = _$createElement("div");
  _$effect(_$p =>
    _$setProp(_el$16, "innerHTML", state.dynamic ?? _$createComponent(Comp, {}), _$p)
  );
  return _el$16;
})();
const template28 = (() => {
  var _el$17 = _$createElement("div");
  _$insert(_el$17, () => state.dynamic ?? _$createComponent(Comp, {}));
  return _el$17;
})();
const template29 = (() => {
  var _el$18 = _$createElement("div");
  _$insert(
    _el$18,
    (() => {
      var _c$10 = _$memo(() => !!thing());
      return () => (_c$10() && thing1()) ?? thing2() ?? thing3();
    })()
  );
  return _el$18;
})();
const template30 = (() => {
  var _el$19 = _$createElement("div");
  _$insert(_el$19, () => thing() || thing1() || thing2());
  return _el$19;
})();
const template31 = _$createComponent(Comp, {
  get value() {
    return _$memo(() => !!count())() ? (_$memo(() => !!count())() ? count() : count()) : count();
  }
});
const template32 = (() => {
  var _el$20 = _$createElement("div");
  _$insert(_el$20, () => something?.());
  return _el$20;
})();
const template33 = _$createComponent(Comp, {
  get children() {
    return something?.();
  }
});
