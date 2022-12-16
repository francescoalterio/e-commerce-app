import React, { useState } from "react";

export function useTextInput() {
  const [data, setData] = useState<string>("");

  const onChangeText = (text: string) => setData(text);

  return [data, onChangeText];
}
