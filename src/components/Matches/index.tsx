import React from 'react';
import { FlatList } from 'react-native';

import { Match } from '../Match';
import { TEAMS } from '../../utils/teams';

import { Container, Title } from './styles';
import { Search } from '../Search';

export function Matches() {

  function handleAccessibilityAction(actionName: string) {
    console.log('Ação usuário:', actionName )
  }

  return (
    <Container>
      <Title>Próximas partidas</Title>

      <Search />

      <FlatList
        data={TEAMS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Match
            data={item}
            accessibilityActions={[
              { name: 'activate', label: 'Ver detalhes do jogo'},
              { name: 'longpress', label: 'Atualizar placar dp jogo'}
            ]}
            onAccessibilityAction={e => handleAccessibilityAction(e.nativeEvent.actionName)}
          />
        )}
      />
    </Container>
  );
}