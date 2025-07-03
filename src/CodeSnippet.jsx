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

      <p className="code-line"><span className="line-number">1</span><span className="keyword">import </span> <span className="react">React</span>, &#123; <span className="builtin">useState</span>, <span className="builtin">useEffect</span> &#125; <span className="keyword">from </span> <span className="string">"react"</span>;</p>
      <p className="code-line"><span className="line-number">2</span><br/></p>
      <p className="code-line"><span className="line-number">3</span><span className="keyword">const </span> <span className="function">App</span> = (&#123; title = <span className="string">"My App"</span> &#125;) =&gt; &#123;</p>
      <p className="code-line"><span className="line-number">4</span><span className="keyword">const</span> [count, setCount] = <span className="builtin">useState</span>(0);</p>
      <p className="code-line"><span className="line-number">5</span><span className="keyword">const</span> [items, setItems] = <span className="builtin">useState</span>([<span className="string">"apple"</span>, <span className="string">"banana"</span>, <span className="string">"cherry"</span>]);</p>
      <p className="code-line"><span className="line-number">6</span><span className="builtin">useEffect</span>(() =&gt; &#123;</p>
      <p className="code-line"><span className="line-number">7</span>    document.title = <span className="string">`Clicked &#36;&#123;count&#125; times`</span>;</p>
      <p className="code-line"><span className="line-number">8</span><span className="keyword">    return</span> () =&gt; <span className="builtin">console</span>.log(<span className="string">"Cleanup on unmount"</span>);</p>
      <p className="code-line"><span className="line-number">9</span>&#125;, [count]);</p>
      <p className="code-line"><span className="line-number">10</span><br/></p>
      <p className="code-line"><span className="line-number">11</span>    <span className="keyword">return</span> (</p>
      <p className="code-line"><span className="line-number">12</span>        &lt;<span className="html">div</span> className=<span className="string">"app-container"</span>&gt;</p>
      <p className="code-line"><span className="line-number">13</span>            &lt;<span className="html">h1</span>&gt;&#123;title&#125;&lt;/<span className="html">h1</span>&gt;</p>
      <p className="code-line"><span className="line-number">14</span>            &lt;<span className="html">button</span> onClick=&#123;handleClick&#125;&gt;Clicked &#123;count&#125; times&lt;/<span className="html">button</span>&gt;</p>
      <p className="code-line"><span className="line-number">15</span>            &lt;<span className="html">ul</span>&gt;</p>
      <p className="code-line"><span className="line-number">16</span>                &#123;items.map((item, index) =&gt; (</p>
      <p className="code-line"><span className="line-number">17</span>                    &lt;<span className="html">li</span> key=&#123;index&#125;&gt;&#123;item.toUpperCase()&#125;&lt;/<span className="html">li</span>&gt;</p>
      <p className="code-line"><span className="line-number">18</span>                ))&#125;</p>
      <p className="code-line"><span className="line-number">19</span>            &lt;/<span className="html">ul</span>&gt;</p>
      <p className="code-line"><span className="line-number">20</span>        &lt;/<span className="html">div</span>&gt;</p>
      <p className="code-line"><span className="line-number">21</span>    );</p>
      <p className="code-line"><span className="line-number">22</span>&#125;;</p>
      <p className="code-line"><span className="line-number">23</span></p>
      <p className="code-line"><span className="line-number">24</span><span className="keyword">export </span> <span className="keyword">default</span> App;</p>
    </div>
  );
};

export default CodeSnippet;
