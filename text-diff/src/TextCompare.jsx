import React, { useState, useRef } from "react";
import { diffWords } from "diff";
import "./TextCompare.css";

function TextCompare() {
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);

  const [diffHTML1, setDiffHTML1] = useState("");
  const [diffHTML2, setDiffHTML2] = useState("");

  const [text, setText] = useState({ text1: "", text2: "" });
  const [showDiff, setShowDiff] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev, [name]: value }));
  }

  function compareTexts(text1, text2) {
    return diffWords(text1, text2);
  }

  function runComparison(text1, text2) {
    const diff = compareTexts(text1, text2);

    // BOTH sides: show removed (red) + added (green)
    const html = diff
      .map((part) => {
        if (part.added) return `<span class="added">${part.value}</span>`;
        if (part.removed) return `<span class="removed">${part.value}</span>`;
        return part.value;
      })
      .join("");

    setDiffHTML1(html);
    setDiffHTML2(html);
    setShowDiff(true);
  }

  function handleCompare() {
    runComparison(text.text1, text.text2);
  }

  function handleSwap() {
    const swapped = {
      text1: text.text2,
      text2: text.text1,
    };
    setText(swapped);

    if (showDiff) {
      runComparison(swapped.text1, swapped.text2);
    }
  }

  function handleBackToEdit() {
    setShowDiff(false);
    setDiffHTML1("");
    setDiffHTML2("");
  }

  return (
    <div className="text-compare">
      <div className="top-bar">
        <div className="options">
          <select>
            <option>ქართული</option>
            <option>English</option>
          </select>
          <label>
            <input type="checkbox" /> ფონტის ცვლილება
          </label>
        </div>
        <div className="checkbox">
          <button className="add-btn">ახლის დამატება</button>
        </div>
      </div>

      <div className="text-boxes">
        <div className="text-box">
          {!showDiff ? (
            <textarea
              name="text1"
              onChange={handleChange}
              value={text.text1}
              placeholder="დაინახე ტექსტი..."
            ></textarea>
          ) : (
            <div
              className="overlay"
              ref={overlay1Ref}
              dangerouslySetInnerHTML={{ __html: diffHTML1 }}
            />
          )}
        </div>

        {/* Swap button */}
        <div className="swap" onClick={handleSwap}>
          ⇄
        </div>

        <div className="text-box">
          {!showDiff ? (
            <textarea
              name="text2"
              onChange={handleChange}
              value={text.text2}
              placeholder="დაინახე ტექსტი..."
            ></textarea>
          ) : (
            <div
              className="overlay"
              ref={overlay2Ref}
              dangerouslySetInnerHTML={{ __html: diffHTML2 }}
            />
          )}
        </div>
      </div>

      <div className="s">
        {!showDiff ? (
          <button className="compare-btn" onClick={handleCompare}>
            შედარება
          </button>
        ) : (
          <button className="compare-btn" onClick={handleBackToEdit}>
            დაბრუნება რედაქტირებაზე
          </button>
        )}
      </div>
    </div>
  );
}

export default TextCompare;
