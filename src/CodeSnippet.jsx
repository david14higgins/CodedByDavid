// src/CodeSnippet.jsx
import React from "react";

const CodeSnippet = () => {
  return (
    <div>
      <style>{`
        .keyword   { color: #d67206; }
        .react    { color: #e80505; }
        .builtin   { color: #6f42c1; }
        .string    { color: #00eaff; }
        .html     { color: green; }
        .function  { color: #005cc5; }
        .bracket   { color: #000000; }
        .comment   { color: #6a737d; font-style: italic; }
        .code-line { white-space: pre; margin: 0; }
      `}</style>

      <p className="code-line"><span className="keyword">import </span> <span className="react">React</span>, &#123; <span className="builtin">useState</span>, <span className="builtin">useEffect</span> &#125; <span className="keyword">from </span> <span className="string">"react"</span>;</p>
      <p className="code-line"></p>
      <p className="code-line"><span className="keyword">const </span> <span className="function">App</span> = (&#123; title = <span className="string">"My App"</span> &#125;) =&gt; &#123;</p>
      <p className="code-line">    <span className="keyword">const</span> [count, setCount] = <span className="builtin">useState</span>(0);</p>
      <p className="code-line">    <span className="keyword">const</span> [items, setItems] = <span className="builtin">useState</span>([<span className="string">"apple"</span>, <span className="string">"banana"</span>, <span className="string">"cherry"</span>]);</p>
      <p className="code-line">    <span className="builtin">useEffect</span>(() =&gt; &#123;</p>
      <p className="code-line">        document.title = <span className="string">`Clicked &#36;&#123;count&#125; times`</span>;</p>
      <p className="code-line">        <span className="keyword">return</span> () =&gt; <span className="builtin">console</span>.log(<span className="string">"Cleanup on unmount"</span>);</p>
      <p className="code-line">    &#125;, [count]);</p>
      <p className="code-line"></p>
      <p className="code-line">    <span className="keyword">return</span> (</p>
      <p className="code-line">        &lt;<span className="html">div </span> className=<span className="string">"app-container"</span>&gt;</p>
      <p className="code-line">            &lt;h1&gt;&#123;title&#125;&lt;/h1&gt;</p>
      <p className="code-line">            &lt;button onClick=&#123;handleClick&#125;&gt;Clicked &#123;count&#125; times&lt;/button&gt;</p>
      <p className="code-line">            &lt;ul&gt;</p>
      <p className="code-line">                &#123;items.map((item, index) =&gt; (</p>
      <p className="code-line">                    &lt;li key=&#123;index&#125;&gt;&#123;item.toUpperCase()&#125;&lt;/li&gt;</p>
      <p className="code-line">                ))&#125;</p>
      <p className="code-line">            &lt;/ul&gt;</p>
      <p className="code-line">        &lt;/div&gt;</p>
      <p className="code-line">    );</p>
      <p className="code-line">&#125;;</p>
      <p className="code-line"></p>
      <p className="code-line"><span className="keyword">export</span> <span className="keyword">default</span> App;</p>
    </div>
  );
};

export default CodeSnippet;
