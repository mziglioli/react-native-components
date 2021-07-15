import React from 'react';
import { Appbar } from 'react-native-paper';

interface HeaderProps {
  onBackAction: () => void;
  onMenuAction: () => void;
}

const Header = ({ onBackAction, onMenuAction }: HeaderProps) => (
  <Appbar.Header testID="Header">
    <Appbar.BackAction onPress={onBackAction} touchSoundDisabled={false} />
    <Appbar.Content title="Title" />
    <Appbar.Action
      icon="dots-vertical"
      onPress={onMenuAction}
      touchSoundDisabled={false}
    />
  </Appbar.Header>
);
export { Header };
