"use client";

import React, { useState } from "react";
import { createContactData } from "@/app/_actions/contact";
import { useActionState } from "react";
import styles from "./index.module.css";

// 状態の型を定義
type ContactFormState = {
  status: string;
  message: string;
};

const initialState: ContactFormState = {
  status: "",
  message: "",
};

export default function ModuleContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    await formAction(formDataToSubmit);
  };

  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            姓
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className={styles.actions}>
        {state.status === "error" && <p className={styles.error}>{state.message}</p>}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
