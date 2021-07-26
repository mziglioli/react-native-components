import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackAction: () => void;
  onMenuAction: () => void;
}

const AppBarHeader = ({
  title,
  showBackButton,
  onBackAction,
  onMenuAction,
}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <Appbar.Header testID="AppBarHeader">
      {showBackButton && (
        <Appbar.BackAction
          testID="AppBarHeader__BackAction"
          onPress={onBackAction}
          touchSoundDisabled={false}
        />
      )}
      <Appbar.Content testID="AppBarHeader__Content" title={title} />
      <Appbar.Action
        testID="AppBarHeader__Action"
        icon={menuOpen ? 'menu-open' : 'menu'}
        onPress={() => {
          setMenuOpen(!menuOpen);
          onMenuAction();
        }}
        touchSoundDisabled={false}
      />
    </Appbar.Header>
  );
};
export { AppBarHeader };
