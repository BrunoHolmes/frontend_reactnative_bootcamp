import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';
//Não possuem estilização própria
//Não possuem valor semantico (significado)
//Todos os componentes possuem, por padrão, 'display: flex'
//View: div, header, footer, main, aside, section, etc. NÃP SE USA TAGS
//Text: p, span, strong, ha, h2, h3, etc.

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1' />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1'
    },

    project: {
        color: '#FFF',
        fontSize: 30,
    },
})