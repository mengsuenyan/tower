(function() {var implementors = {};
implementors["tower"] = [{"text":"impl&lt;D:&nbsp;Clone, Req:&nbsp;Clone&gt; Clone for MakeBalanceLayer&lt;D, Req&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, Req:&nbsp;Clone&gt; Clone for MakeBalance&lt;S, Req&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Builder","synthetic":false,"types":[]},{"text":"impl&lt;Request&gt; Clone for BufferLayer&lt;Request&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, Request&gt; Clone for Buffer&lt;T, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Service&lt;Request&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Clone&gt; Clone for FilterLayer&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone&gt; Clone for Filter&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone&gt; Clone for AsyncFilter&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ConcurrencyLimitLayer","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for ConcurrencyLimit&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for RateLimitLayer","synthetic":false,"types":[]},{"text":"impl Clone for Rate","synthetic":false,"types":[]},{"text":"impl Clone for CompleteOnResponse","synthetic":false,"types":[]},{"text":"impl Clone for Cost","synthetic":false,"types":[]},{"text":"impl Clone for Count","synthetic":false,"types":[]},{"text":"impl Clone for LoadShedLayer","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone&gt; Clone for LoadShed&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;M, Request&gt; Clone for IntoService&lt;M, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;P:&nbsp;Clone, S:&nbsp;Clone&gt; Clone for Retry&lt;P, S&gt;","synthetic":false,"types":[]},{"text":"impl Clone for SpawnReadyLayer","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone&gt; Clone for MakeSpawnReady&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl Clone for TimeoutLayer","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Timeout&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for AndThen&lt;S, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for AndThenLayer&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Clone, B:&nbsp;Clone&gt; Clone for Either&lt;A, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone, S:&nbsp;Clone&gt; Clone for FutureService&lt;F, S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for MapErr&lt;S, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for MapErrLayer&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for MapRequest&lt;S, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for MapRequestLayer&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for MapResponse&lt;S, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for MapResponseLayer&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for MapResult&lt;S, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for MapResultLayer&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for MapFuture&lt;S, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for MapFutureLayer&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for ServiceFn&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Clone, F:&nbsp;Clone&gt; Clone for Then&lt;S, F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for ThenLayer&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Clone&gt; Clone for ServiceBuilder&lt;L&gt;","synthetic":false,"types":[]}];
implementors["tower_layer"] = [{"text":"impl Clone for Identity","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Clone&gt; Clone for LayerFn&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Inner:&nbsp;Clone, Outer:&nbsp;Clone&gt; Clone for Stack&lt;Inner, Outer&gt;","synthetic":false,"types":[]}];
implementors["tower_test"] = [{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Spawn&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; Clone for Mock&lt;T, U&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()