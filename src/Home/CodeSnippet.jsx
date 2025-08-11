// src/CodeSnippet.jsx
import React, { useState, useCallback } from "react";
import Typewriter from "./TypeWriter"
import { Element, Link } from "react-scroll";


const CodeSnippet = () => {
  const [firstDone, setFirstDone] = useState(false);

  const handleFirstDone = useCallback(() => setFirstDone(true), []);
  
  
  return (
    <div>
      <style>{`
        .keyword   { color: #cf8a02ff; }
        .react    { color: #ff0000ff; }
        .builtin   { color: #9d70f1ff; }
        .string    { color: #00eaff; }
        .html     { color: #0ef902ff; }
        .pink-bracket { color: #ff00ff; }
        .grey-bracket { color: #6c6c6cff; }
        .props { color: #f69797ff; }
        .function  { color: #4697f4ff; }
        .bracket   { color: #000000; }
        .comment   { color: #000000ff; font-style: italic; }
        .code-line { white-space: pre; margin: 0; }
      `}</style>
      
      <p className="code-line"><span className="line-number">1</span><span className="keyword">import </span> <span className="react">React</span>, <span className="pink-bracket">{'{'}</span> <span className="builtin">useState</span>, <span className="builtin">useEffect</span> <span className="pink-bracket">{'}'}</span> <span className="keyword"> from </span> <span className="string">"react"</span>;</p>
      <p className="code-line"><span className="line-number">2</span><br/></p>
      <p className="code-line"><span className="line-number">3</span><span className="keyword">const </span> <span className="function">App</span> = <span className="pink-bracket">(</span><span className="pink-bracket">{'{'}</span> title = <span className="string">"My App"</span> <span className="pink-bracket">{'}'}</span><span className="pink-bracket">)</span> =&gt; <span className="pink-bracket">{'{'}</span></p>
      <p className="code-line"><span className="line-number">4</span><span className="keyword">  const</span> <span className="pink-bracket">[</span>count, setCount<span className="pink-bracket">]</span> = <span className="builtin">useState</span><span className="pink-bracket">(</span>0<span className="pink-bracket">)</span>;</p>
      <p className="code-line"><span className="line-number">5</span><span className="keyword">  const</span> <span className="pink-bracket">[</span>items, setItems<span className="pink-bracket">]</span> = <span className="builtin">useState</span><span className="pink-bracket">(</span><span className="pink-bracket">[</span><span className="string">"apple"</span>, <span className="string">"banana"</span>, <span className="string">"cherry"</span><span className="pink-bracket">]</span><span className="pink-bracket">)</span>;</p>
      <p className="code-line"><span className="line-number">6</span><span className="builtin">  useEffect</span><span className="pink-bracket">(</span><span className="pink-bracket">(</span><span className="pink-bracket">)</span> =&gt; <span className="pink-bracket">{'{'}</span></p>
      <p className="code-line"><span className="line-number">7</span><span className="keyword">    return </span> <span className="pink-bracket">(</span><span className="pink-bracket">)</span> =&gt; <span className="builtin">console</span><span className="function">.log</span><span className="pink-bracket">(</span><span className="string">"Cleanup on unmount"</span><span className="pink-bracket">)</span>;</p>
      <p className="code-line"><span className="line-number">8</span><span className="pink-bracket">  {'}'}</span>, <span className="pink-bracket">[</span>count<span className="pink-bracket">]</span><span className="pink-bracket">)</span>;</p>
      <p className="code-line"><span className="line-number">9</span><br/></p>
      <p className="code-line">
        <span className="line-number">10</span>
        <span>  </span>
        <span className="string">
        <Typewriter 
          text="// Welcome to CodedByDavid"
          speed={100}
          onDone={handleFirstDone}
          delay={2000}/>
        </span>
      </p>
      <p className="code-line">
        <span className="line-number">11</span>
        <span>  </span>
        {firstDone && (
          <Link to="about-page" smooth={true} duration={1000} className="clickHereLink">
            <Typewriter
              text="clickHereToContinue();"
              speed={100}
              keepBlinking={true}
              delay={1000}
            />
          </Link>
        )}
      </p> 
      <p className="code-line"><span className="line-number">12</span><br/></p>
      <p className="code-line"><span className="line-number">13</span><span className="keyword">  return</span> <span className="pink-bracket">(</span></p>
      <p className="code-line"><span className="line-number">14</span><span className="grey-bracket">{'    <'}</span><span className="html">div</span> <span className="props"> className</span>=<span className="string">"app-container"</span><span className="grey-bracket">{'>'}</span></p>
      <p className="code-line"><span className="line-number">15</span><span className="grey-bracket">{'      <'}</span><span className="html">h1</span><span className="grey-bracket">{'>'}</span><span className="pink-bracket">{'{'}</span>title<span className="pink-bracket">{'}'}</span><span className="grey-bracket">{'</'}</span><span className="html">h1</span><span className="grey-bracket">{'>'}</span></p>
      <p className="code-line"><span className="line-number">16</span><span className="grey-bracket">{'      <'}</span><span className="html">button</span> <span className="props"> onClick</span>=<span className="pink-bracket">{'{'}</span>handleClick<span className="pink-bracket">{'}'}</span><span className="grey-bracket">{'>'}</span>Clicked <span className="pink-bracket">{'{'}</span>count<span className="pink-bracket">{'}'}</span> times<span className="grey-bracket">{'</'}</span><span className="html">button</span><span className="grey-bracket">{'>'}</span></p>
      <p className="code-line"><span className="line-number">17</span><span className="grey-bracket">{'      <'}</span><span className="html">ul</span><span className="grey-bracket">{'>'}</span></p>
      <p className="code-line"><span className="line-number">18</span><span className="pink-bracket">{'        {'}</span>items<span className="function">.map</span><span className="pink-bracket">(</span><span className="pink-bracket">(</span>item, index<span className="pink-bracket">)</span> =&gt; <span className="pink-bracket">(</span></p>
      <p className="code-line"><span className="line-number">19</span><span className="grey-bracket">{'         <'}</span><span className="html">li</span> <span className="props"> key</span>=<span className="pink-bracket">{'{'}</span>index<span className="pink-bracket">{'}'}</span><span className="grey-bracket">{'>'}</span><span className="pink-bracket">{'{'}</span>item<span className="function">.toUpperCase</span><span className="pink-bracket">(</span><span className="pink-bracket">)</span><span className="pink-bracket">{'}'}</span><span className="grey-bracket">{'</'}</span><span className="html">li</span>&gt;</p>
      <p className="code-line"><span className="line-number">20</span><span className="pink-bracket">        )</span><span className="pink-bracket">)</span><span className="pink-bracket">{'}'}</span></p>
      <p className="code-line"><span className="line-number">21</span><span className="grey-bracket">{'      </'}</span><span className="html">ul</span><span className="grey-bracket">{'>'}</span></p>
      <p className="code-line"><span className="line-number">22</span><span className="grey-bracket">{'    </'}</span><span className="html">div</span><span className="grey-bracket">{'>'}</span></p>
      <p className="code-line"><span className="line-number">23</span><span className="pink-bracket">  )</span>;</p>
      <p className="code-line"><span className="line-number">24</span><span className="pink-bracket">{'}'}</span>;</p>
      <p className="code-line"><span className="line-number">25</span></p>
      <p className="code-line"><span className="line-number">26</span><span className="keyword">export </span> <span className="keyword">default</span> App;</p>
    </div>
  );
};

export default CodeSnippet;
