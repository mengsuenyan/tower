(function() {var implementors = {};
implementors["tower"] = [{"text":"impl Send for Discover","synthetic":true,"types":[]},{"text":"impl&lt;D, Req&gt; Send for MakeBalanceLayer&lt;D, Req&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S, Req&gt; Send for MakeBalance&lt;S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, Req&gt; Send for MakeFuture&lt;F, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D, Req&gt; Send for Balance&lt;D, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as Discover&gt;::Key: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as Discover&gt;::Service: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;MS, Target, Request&gt; Send for PoolDiscoverer&lt;MS, Target, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MS: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;MS as MakeService&lt;Target, Request&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Builder","synthetic":true,"types":[]},{"text":"impl&lt;MS, Target, Request&gt; Send for Pool&lt;MS, Target, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MS: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Request: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;MS as MakeService&lt;Target, Request&gt;&gt;::Future: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;MS as MakeService&lt;Target, Request&gt;&gt;::Service: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ServiceError","synthetic":true,"types":[]},{"text":"impl Send for Closed","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ResponseFuture&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Request&gt; Send for BufferLayer&lt;Request&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, Request&gt; Send for Buffer&lt;T, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Request: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Service&lt;Request&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ServiceList&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as IntoIterator&gt;::IntoIter: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Send for Change&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, S, Request&gt; Send for AsyncResponseFuture&lt;P, S, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as AsyncPredicate&lt;Request&gt;&gt;::Future: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as Service&lt;&lt;P as AsyncPredicate&lt;Request&gt;&gt;::Request&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R, F&gt; Send for ResponseFuture&lt;R, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; Send for FilterLayer&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; Send for AsyncFilterLayer&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for Filter&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for AsyncFilter&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, P&gt; Send for Hedge&lt;S, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, Request&gt; Send for Future&lt;S, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as Service&lt;Request&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ResponseFuture&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ConcurrencyLimitLayer","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ConcurrencyLimit&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for RateLimitLayer","synthetic":true,"types":[]},{"text":"impl Send for Rate","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for RateLimit&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for CompleteOnResponse","synthetic":true,"types":[]},{"text":"impl&lt;F, C, H&gt; Send for TrackCompletionFuture&lt;F, C, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, M&gt; Send for Constant&lt;T, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, C&gt; Send for PeakEwma&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D, C&gt; Send for PeakEwmaDiscover&lt;D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Cost","synthetic":true,"types":[]},{"text":"impl Send for Handle","synthetic":true,"types":[]},{"text":"impl&lt;S, C&gt; Send for PendingRequests&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D, C&gt; Send for PendingRequestsDiscover&lt;D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Count","synthetic":true,"types":[]},{"text":"impl Send for Handle","synthetic":true,"types":[]},{"text":"impl Send for Overloaded","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for ResponseFuture&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for LoadShedLayer","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for LoadShed&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;M, Request&gt; Send for IntoService&lt;M, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Request: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, M, Request&gt; Send for AsService&lt;'a, M, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Request: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, S, Req&gt; Send for ReadyCache&lt;K, S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Send for Failed&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, E&gt; Send for ResponseFuture&lt;F, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;M, Target&gt; Send for Reconnect&lt;M, Target&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Service&lt;Target&gt;&gt;::Error: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Service&lt;Target&gt;&gt;::Future: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Service&lt;Target&gt;&gt;::Response: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Budget","synthetic":true,"types":[]},{"text":"impl Send for Overdrawn","synthetic":true,"types":[]},{"text":"impl&lt;P, S, Request&gt; Send for ResponseFuture&lt;P, S, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Request: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as Policy&lt;Request, &lt;S as Service&lt;Request&gt;&gt;::Response, &lt;S as Service&lt;Request&gt;&gt;::Error&gt;&gt;::Future: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as Service&lt;Request&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Send for RetryLayer&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, S&gt; Send for Retry&lt;P, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, E&gt; Send for ResponseFuture&lt;F, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SpawnReadyLayer","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for MakeSpawnReady&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MakeFuture&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for SpawnReady&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, Req&gt; Send for Steer&lt;S, F, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Elapsed","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ResponseFuture&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for TimeoutLayer","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Timeout&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for AndThen&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F1, F2, N&gt; Send for AndThenFuture&lt;F1, F2, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for AndThenLayer&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U, E&gt; Send for BoxService&lt;T, U, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, U, E&gt; !Send for UnsyncBoxService&lt;T, U, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Svc, S&gt; Send for CallAll&lt;Svc, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Svc: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Svc as Service&lt;&lt;S as Stream&gt;::Item&gt;&gt;::Error: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Svc as Service&lt;&lt;S as Stream&gt;::Item&gt;&gt;::Future: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Svc as Service&lt;&lt;S as Stream&gt;::Item&gt;&gt;::Response: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Svc, S&gt; Send for CallAllUnordered&lt;Svc, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Svc: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Svc as Service&lt;&lt;S as Stream&gt;::Item&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; Send for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, S&gt; Send for FutureService&lt;F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for MapErr&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MapErrLayer&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, N&gt; Send for MapErrFuture&lt;F, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for MapRequest&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MapRequestLayer&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for MapResponse&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MapResponseLayer&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, N&gt; Send for MapResponseFuture&lt;F, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for MapResult&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MapResultLayer&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, N&gt; Send for MapResultFuture&lt;F, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for MapFuture&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MapFutureLayer&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, Req&gt; Send for Oneshot&lt;S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as Service&lt;Req&gt;&gt;::Future: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for None","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ResponseFuture&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Optional&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, Request&gt; Send for ReadyOneshot&lt;T, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, Request&gt; Send for ReadyAnd&lt;'a, T, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ServiceFn&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for Then&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for ThenLayer&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F1, F2, N&gt; Send for ThenFuture&lt;F1, F2, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;L&gt; Send for ServiceBuilder&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["tower_layer"] = [{"text":"impl Send for Identity","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for LayerFn&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Inner, Outer&gt; Send for Stack&lt;Inner, Outer&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Outer: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["tower_test"] = [{"text":"impl Send for Closed","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ResponseFuture&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Spawn&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for Mock&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for Handle&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for SendResponse&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()