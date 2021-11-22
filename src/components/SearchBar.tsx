import styled from '@emotion/styled';
import React, { useState } from 'react';

const TextInput = styled("input")({
  background: 'white',
  borderRadius: 8,
  padding: 8
});

const Button = styled("button")({
  padding: 8,
  borderRadius: 8,
  background: '#e3c936',
  color: 'white'
})

interface SearchBarProps {
  defaultValue?: string;
  placeholder?: string;
  onSubmit: (value: string) => void;
}

export default function SearchBar({
  defaultValue,
  placeholder = "Search",
  onSubmit,
}: SearchBarProps): JSX.Element {
  const [city, setCity] = useState("")
  return (
    <form>
      <TextInput
        placeholder={placeholder}
        value={defaultValue}
        onChange={(e: React.BaseSyntheticEvent) => setCity(e.target.value)}
      />
      <Button
        type="button"
        onClick={() => onSubmit(city)}
      >
        Search
      </Button>
    </form>
  )
}
