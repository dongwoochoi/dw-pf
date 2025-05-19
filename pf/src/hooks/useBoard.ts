import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { boardModalAtom } from "../jotai/Modal/BoardModalAtom";
import { Instance } from "../types/api";
import axios from "axios";
import { shouldRefetchAtom } from "../jotai/shouldRefetchAtom";

export interface ApiErrorResponse {
  status: number;
  detail: string | any;
}

class ResponseError {
  readonly status: ApiErrorResponse["status"];

  readonly detail: ApiErrorResponse["detail"];

  readonly defaultText: string;

  constructor(error: any) {
    const { status, detail } = error;

    this.status = status;
    this.detail = detail;
    this.defaultText = `Error Code ${status}: ${detail}`;
  }
}

export default function useBoard() {
  const setModal = useSetAtom(boardModalAtom);
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  const isModalOpen = useAtomValue(boardModalAtom);
  const [board, setBoard] = useState<{ writer: string; content: string }>({
    writer: "",
    content: "",
  });
  const [writerIsNull, setWriterIsNull] = useState<boolean>(false);
  const [contentIsNull, setContentIsNull] = useState<boolean>(false);
  const setShouldRefetch = useSetAtom(shouldRefetchAtom);
  const customAxios: Instance = async ({ method, body }) => {
    try {
      const response = await api({
        method,
        url: `/api/posts/`,
        data: body,
      });
      return response.data;
    } catch (e) {
      throw new ResponseError(e);
    }
  };

  const submit = async (value: { writer: string; content: string }) => {
    if (value.writer === "") {
      setWriterIsNull(true);
    }
    if (value.content === "") {
      setContentIsNull(true);
    }
    try {
      await customAxios({
        method: `post`,
        body: value,
      });
      localStorage.setItem("toast", "true");
      setModal(false);
      setShouldRefetch(true);
    } catch (e) {
      alert("잠시후 다시 시도해주세요.");
      return console.error(e);
    }
  };

  useEffect(() => {
    setBoard({
      writer: "",
      content: "",
    });
    setContentIsNull(false);
    setWriterIsNull(false);
  }, [isModalOpen]);

  const onChangeWriter = (value: string) => {
    setBoard((prev) => {
      return {
        ...prev,
        writer: value,
      };
    });
  };

  const onChangeContent = (value: string) => {
    setBoard((prev) => {
      return {
        ...prev,
        content: value,
      };
    });
  };

  const isWriterError = board.writer.length > 20;
  const isContentError = board.content.length > 100;

  return {
    board,
    onChangeWriter,
    onChangeContent,
    isWriterError,
    isContentError,
    submit,
    writerIsNull,
    contentIsNull,
  };
}
